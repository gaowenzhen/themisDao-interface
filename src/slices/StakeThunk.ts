import { ethers, BigNumber } from "ethers";
import { addresses } from "../constants";
import { abi as ierc20ABI } from "../abi/IERC20.json"; // 
import { abi as ThemisStakingABI } from "../abi/ThemisStaking.json";
import { abi as StakingHelperABI } from "../abi/StakingHelper.json";
import { clearPendingTxn, fetchPendingTxns, getStakingTypeText } from "./PendingTxnsSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAccountSuccess, getBalances } from "./AccountSlice";
import { error, info } from "../slices/MessagesSlice";
import { IActionValueAsyncThunk, IChangeApprovalAsyncThunk, IJsonRPCError } from "./interfaces";
import { IERC20, ThemisStaking, StakingHelper } from "src/typechain";
import { abi as sTHSAbi } from "src/abi/sThemis.json"; 
import { t } from "@lingui/macro";

interface IUAData {
  address: string;
  value: string;
  approved: boolean;
  txHash: string | null;
  type: string | null;
}

function alreadyApprovedToken(token: string, stakeAllowance: BigNumber, unstakeAllowance: BigNumber, thsBalance: string, sThsBalance: string) {
  // set defaults
  let bigZero = BigNumber.from("0");
  let applicableAllowance = BigNumber.from("0");

  // determine which allowance to check
  if (token === "ths") {
    applicableAllowance = stakeAllowance;
    bigZero = BigNumber.from(Math.floor((Number(thsBalance ?? 0) + 1) * 10000)).div(BigNumber.from("10000"));

  } else if (token === "sThs") {
    applicableAllowance = unstakeAllowance;
    bigZero = BigNumber.from(Math.floor((Number(sThsBalance ?? 0) + 1) * 10000)).div(BigNumber.from("10000"));
  }

  // console.log("bigZero", bigZero.toString())

  bigZero = bigZero.mul(ethers.utils.parseUnits("1", "gwei"))
  // check if allowance exists
  if (applicableAllowance.gt(bigZero)) return true;

  return false;
}

export const changeApproval = createAsyncThunk(
  "stake/changeApproval",
  async ({ token, provider, address, networkID, thsBalance, sThsBalance }: IChangeApprovalAsyncThunk, { dispatch }) => {
    // console.dir('changeApproval')
    if (!provider) {
      dispatch(error(t`Please connect your wallet!`));
      return;
    }


    const signer = provider.getSigner();
    const thsContract = new ethers.Contract(addresses[networkID].THS_ADDRESS as string, ierc20ABI, signer) as IERC20;

    const sThsContract = new ethers.Contract(addresses[networkID].STHS_ADDRESS as string, sTHSAbi, signer) as IERC20;

    let approveTx;
    let stakeAllowance = await thsContract.allowance(address, addresses[networkID].STAKING_HELPER_ADDRESS);
    let unstakeAllowance = await sThsContract.allowance(address, addresses[networkID].STAKING_ADDRESS);
    
    // return early if approval has already happened
    // if (alreadyApprovedToken(token, stakeAllowance, unstakeAllowance, thsBalance, sThsBalance)) {
    //   dispatch(info("Approval completed."));
    //   return dispatch(
    //     fetchAccountSuccess({
    //       staking: {
    //         ohmStake: +stakeAllowance,
    //         ohmUnstake: +unstakeAllowance,
    //       },
    //     }),
    //   );
    // }

    try {

      if (token === "ths") {
        approveTx = await thsContract.approve(
          addresses[networkID].STAKING_HELPER_ADDRESS,
          ethers.utils.parseUnits("150000", "gwei").toString(),
        );
      } else if (token === "sThs") {
        approveTx = await sThsContract.approve(
          addresses[networkID].STAKING_ADDRESS,
          ethers.utils.parseUnits("150000", "gwei").toString(),
        );
      }

      const text = "Approve " + (token === "ths" ? "Staking" : "Unstaking");
      const pendingTxnType = token === "ths" ? "approve_staking" : "approve_unstaking";
      if (approveTx) {
        dispatch(fetchPendingTxns({ txnHash: approveTx.hash, text, type: pendingTxnType }));
        await approveTx.wait();
      }
    } catch (e: unknown) {
      dispatch(error((e as IJsonRPCError).message));
      return;
    } finally {
      if (approveTx) {
        dispatch(clearPendingTxn(approveTx.hash));
      }
    }

    // go get fresh allowances
    stakeAllowance = await thsContract.allowance(address, addresses[networkID].STAKING_HELPER_ADDRESS);
    unstakeAllowance = await sThsContract.allowance(address, addresses[networkID].STAKING_ADDRESS);
    //console.dir(unstakeAllowance)
    //console.dir('====ohmUnstake====')
    return dispatch(
      fetchAccountSuccess({
        staking: {
          ohmStake: +stakeAllowance,
          ohmUnstake: +unstakeAllowance,
        },
      }),
    );
  },
);

export const changeStake = createAsyncThunk(
  "stake/changeStake",
  async ({ action, value, provider, address, networkID }: IActionValueAsyncThunk, { dispatch }) => {
    if (!provider) {
      dispatch(error(t`Please connect your wallet!`));
      return;
    }

    const signer = provider.getSigner();
    const staking = new ethers.Contract(
      addresses[networkID].STAKING_ADDRESS as string,
      ThemisStakingABI,
      signer,
    ) as ThemisStaking;
    const stakingHelper = new ethers.Contract(
      addresses[networkID].STAKING_HELPER_ADDRESS as string,
      StakingHelperABI,
      signer,
    ) as StakingHelper;

    let stakeTx;
    let uaData: IUAData = {
      address: address,
      value: value,
      approved: true,
      txHash: null,
      type: null,
    };
    try {
      if (action === "stake") {
        uaData.type = "stake";
        stakeTx = await stakingHelper.stake(ethers.utils.parseUnits(value, "gwei"), address);
      } else {
        uaData.type = "unstake";
        stakeTx = await staking.unstake(ethers.utils.parseUnits(value, "gwei"), true);
      }
      const pendingTxnType = action === "stake" ? "staking" : "unstaking";
      uaData.txHash = stakeTx.hash;
      dispatch(fetchPendingTxns({ txnHash: stakeTx.hash, text: getStakingTypeText(action), type: pendingTxnType }));
      await stakeTx.wait();
    } catch (e: unknown) {
      uaData.approved = false;
      const rpcError = e as IJsonRPCError;
      if (rpcError.code === -32603 && rpcError.message.indexOf("ds-math-sub-underflow") >= 0) {
        dispatch(
          error("You may be trying to stake more than your balance! Error code: 32603. Message: ds-math-sub-underflow"),
        );
      } else {
        dispatch(error(rpcError.message));
      }
      return;
    } finally {
      if (stakeTx) {
        dispatch(clearPendingTxn(stakeTx.hash));
      }
    }
    dispatch(getBalances({ address, networkID, provider }));
  },
);
