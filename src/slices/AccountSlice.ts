import { BigNumber, BigNumberish, ethers } from "ethers";
import { addresses } from "../constants";
import { abi as ThemisERC20TokenABI } from "src/abi/ThemisERC20Token.json";
import { abi as ierc20Abi } from "src/abi/IERC20.json";
import { abi as sTHSAbi } from "src/abi/sThemis.json"; 
// import { abi as wsOHM } from "../abi/wsOHM.json";
import { abi as ThemisStakingABI } from "../abi/ThemisStaking.json";

import { setAll } from "../helpers";

import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "src/store";
import { IBaseAddressAsyncThunk, ICalcUserBondDetailsAsyncThunk } from "./interfaces";
import { ThemisERC20Token, SThemis, IERC20 } from "src/typechain";

interface IUserBalances {
  balances: {
    ths: string;
    sThs: string;
    pool: string;
    usdt: string;
    sThsStaking: string;
  };
}

export const getBalances = createAsyncThunk(
  "account/getBalances",
  async ({ address, networkID, provider }: IBaseAddressAsyncThunk) => {
    const signer = provider.getSigner();
    const thsContract = new ethers.Contract(addresses[networkID].THS_ADDRESS as string, ThemisERC20TokenABI, signer) as ThemisERC20Token;
    const thsBalance = await thsContract.balanceOf(address);
  
    const usdtContract = new ethers.Contract(addresses[networkID].USDT_ADDRESS as string, ierc20Abi, signer) as IERC20;
    const usdtBalance = await usdtContract.balanceOf(address);
    
    const staking = new ethers.Contract(
      addresses[networkID].STAKING_ADDRESS as string,
      ThemisStakingABI,
      signer,
    ) as any;
    const sThsStakingBalance = await staking.stakingAmountOf(address);
    const sThsContract = new ethers.Contract(
      addresses[networkID].STHS_ADDRESS as string,
      sTHSAbi,
      provider,
    ) as IERC20;
    const sThsBalance = await sThsContract.balanceOf(address);

    return {
      balances: {
        ths: ethers.utils.formatUnits(thsBalance, "gwei"),
        usdt: ethers.utils.formatUnits(usdtBalance, "gwei"),
        sThsStaking: ethers.utils.formatUnits(sThsStakingBalance, "gwei"),
        sThs: ethers.utils.formatUnits(sThsBalance, "gwei"),
        pool: "0.0", // ethers.utils.formatUnits(poolBalance, "gwei"),
      },
    };
  },
);

interface IUserAccountDetails {
  staking: {
    ohmStake: number;
    ohmUnstake: number;
  };
  wrapping: {
    sohmWrap: number;
    wsohmUnwrap: number;
  };
}

export const loadAccountDetails = createAsyncThunk(
  "account/loadAccountDetails",
  async ({ networkID, provider, address }: IBaseAddressAsyncThunk, { dispatch }) => {
    const signer = provider.getSigner();

    const thsContract = new ethers.Contract(addresses[networkID].THS_ADDRESS as string, ierc20Abi, signer) as IERC20;
    const stakeAllowance = await thsContract.allowance(address, addresses[networkID].STAKING_HELPER_ADDRESS);

    const sThsContract = new ethers.Contract(addresses[networkID].STHS_ADDRESS as string, sTHSAbi, signer) as SThemis;
    const unstakeAllowance = await sThsContract.allowance(address, addresses[networkID].STAKING_ADDRESS);
    await dispatch(getBalances({ address, networkID, provider }));

    return {
      staking: {
        ohmStake: ethers.utils.formatUnits(stakeAllowance, "gwei"),
        ohmUnstake: ethers.utils.formatUnits(unstakeAllowance, "gwei"),
      },
      wrapping: {
        // ohmWrap: +wrapAllowance,
        // ohmUnwrap: +unwrapAllowance,
      },
      pooling: {
        // sohmPool: +poolAllowance,
      },
    };
  },
);

export interface IUserBondDetails {
  allowance: number;
  interestDue: number;
  bondMaturationBlock: number;
  pendingPayout: string; //Payout formatted in gwei.
}
export const calculateUserBondDetails = createAsyncThunk(
  "account/calculateUserBondDetails",
  async ({ address, bond, networkID, provider }: ICalcUserBondDetailsAsyncThunk) => {
    if (!address) {
      return {
        bond: "",
        displayName: "",
        // bondIconSvg: "",
        isLP: false,
        allowance: 0,
        balance: "0",
        interestDue: 0,
        bondMaturationBlock: 0,
        pendingPayout: "",
      };
    }

    const signer = provider.getSigner();


    const bondContract = bond.getContractForBond(networkID, signer);
    const reserveContract = bond.getContractForReserve(networkID, signer);
    let pendingPayout, bondMaturationBlock;

    const bondDetails = await bondContract.bondInfo(address);


    let interestDue: BigNumberish = Number(bondDetails.payout.toString()) / Math.pow(10, 9);
    bondMaturationBlock = +bondDetails.vesting + +bondDetails.lastBlock;

    pendingPayout = await bondContract.pendingPayoutFor(address);

    let allowance,
      balance = BigNumber.from(0);
    allowance = await reserveContract.allowance(address, bond.getAddressForBond(networkID));
    balance = await reserveContract.balanceOf(address);

    // formatEthers takes BigNumber => String
    const balanceVal = ethers.utils.formatEther(balance);
    // balanceVal should NOT be converted to a number. it loses decimal precision
    return {
      bond: bond.name,
      displayName: bond.displayName,
      // bondIconSvg: bond.bondIconSvg,
      isLP: bond.isLP,
      allowance: Number(allowance.toString()),
      balance: balanceVal,
      interestDue,
      bondMaturationBlock,
      pendingPayout: ethers.utils.formatUnits(pendingPayout, "gwei"),
    };
  },
);

interface IAccountSlice extends IUserAccountDetails, IUserBalances {
  bonds: { [key: string]: IUserBondDetails };
  balances: {
    ths: string;
    sThs: string;
    usdt: string;
    pool: string;
    sThsStaking: string,
  };
  loading: boolean;
  staking: {
    ohmStake: number;
    ohmUnstake: number;
  };
  pooling: {
    sohmPool: number;
  };
}

const initialState: IAccountSlice = {
  loading: false,
  bonds: {},
  balances: { ths: "", sThs: "", usdt: "", pool: "", sThsStaking: "" },
  staking: { ohmStake: 0, ohmUnstake: 0 },
  wrapping: { sohmWrap: 0, wsohmUnwrap: 0 },
  pooling: { sohmPool: 0 },
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    fetchAccountSuccess(state, action) {
      setAll(state, action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loadAccountDetails.pending, state => {
        state.loading = true;
      })
      .addCase(loadAccountDetails.fulfilled, (state, action) => {
        setAll(state, action.payload);
        state.loading = false;
      })
      .addCase(loadAccountDetails.rejected, (state, { error }) => {
        state.loading = false;
        console.log(error);
      })
      .addCase(getBalances.pending, state => {
        state.loading = true;
      })
      .addCase(getBalances.fulfilled, (state, action) => {
        setAll(state, action.payload);
        state.loading = false;
      })
      .addCase(getBalances.rejected, (state, { error }) => {
        state.loading = false;
        console.log(error);
      })
      .addCase(calculateUserBondDetails.pending, state => {
        state.loading = true;
      })
      .addCase(calculateUserBondDetails.fulfilled, (state, action) => {
        if (!action.payload) return;
        const bond = action.payload.bond;
        state.bonds[bond] = action.payload;
        state.loading = false;
      })
      .addCase(calculateUserBondDetails.rejected, (state, { error }) => {
        state.loading = false;
        console.log(error);
      });
  },
});

export default accountSlice.reducer;

export const { fetchAccountSuccess } = accountSlice.actions;

const baseInfo = (state: RootState) => state.account;

export const getAccountState = createSelector(baseInfo, account => account);
