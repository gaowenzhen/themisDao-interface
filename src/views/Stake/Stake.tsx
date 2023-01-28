import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Paper,
  Tab,
  Tabs,
  Typography,
  Zoom,
  Divider,
  styled
} from "@material-ui/core";
import { t, Trans } from "@lingui/macro";
// import NewReleases from "@material-ui/icons/NewReleases";
import RebaseTimer from "../../components/RebaseTimer/RebaseTimer";
import TabPanel from "../../components/TabPanel";
import { getOhmTokenImage, getTokenImage, trim } from "../../helpers";
import { changeApproval, changeStake } from "../../slices/StakeThunk";
import "./stake.scss";
import { useWeb3Context } from "src/hooks/web3Context";
import { isPendingTxn, txnButtonText } from "src/slices/PendingTxnsSlice";
import { Skeleton } from "@material-ui/lab";
import { error } from "../../slices/MessagesSlice";
import { ethers } from "ethers";
import { useAppSelector } from "src/hooks";
import { debounce } from "src/utils/debounce";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Stake() {
  const dispatch = useDispatch();
  const { provider, address, connected, connect, chainID } = useWeb3Context();

  const [zoomed, setZoomed] = useState(false);
  const [view, setView] = useState(0);
  const [quantity, setQuantity] = useState("0");

  const isAppLoading = useAppSelector(state => state.app.loading);
  const currentIndex = useAppSelector(state => {
    return state.app.currentIndex;
  });
  const fiveDayRate = useAppSelector(state => {
    return state.app.fiveDayRate;
  });
  const thsBalance = useAppSelector(state => {
    return state.account.balances && state.account.balances.ths;
  });
  const sThsBalance = useAppSelector(state => {
    return state.account.balances && state.account.balances.sThs;
  });
  const sThsSTakingBalance = useAppSelector(state => {
    return state.account.balances && state.account.balances.sThsStaking;
  });
  // const fsohmBalance = useAppSelector(state => {
  //   return state.account.balances && state.account.balances.fsohm;
  // });
  // const wsohmBalance = useAppSelector(state => {
  //   return state.account.balances && state.account.balances.wsohm;
  // });
  // const wsohmAsSohm = useAppSelector(state => {
  //   return state.account.balances && state.account.balances.wsohmAsSohm;
  // });
  const stakeAllowance = useAppSelector(state => {
    return (state.account.staking && state.account.staking.ohmStake) || 0;
  });
  const unstakeAllowance = useAppSelector(state => {
    return (state.account.staking && state.account.staking.ohmUnstake) || 0;
  });
  const stakingRebase = useAppSelector(state => {
    return state.app.stakingRebase || 0;
  });
  const stakingAPY = useAppSelector(state => {
    return state.app.stakingAPY || 0;
  });
  const stakingTVL = useAppSelector(state => {
    return state.app.stakingTVL;
  });

  const pendingTransactions = useAppSelector(state => {
    return state.pendingTransactions;
  });

  const setMax = () => {
    if (view === 0) {
      setQuantity(Number(Math.floor(Number(thsBalance) * 10000) / 10000) + "");
    } else {
      setQuantity(Number(Math.floor(Number(sThsSTakingBalance) * 10000) / 10000) + "");
    }
  };

  const onSeekApproval = async (token: string) => {
    await dispatch(changeApproval({ address, token, provider, networkID: chainID, thsBalance, sThsBalance }));
  };

  const onChangeStake = async (action: string) => {
    // console.log("action", action)
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(Number(quantity)) || quantity === "0") {
      // eslint-disable-next-line no-alert
      return dispatch(error(t`Please enter a value!`));
    }

    // 1st catch if quantity > balance
    let gweiValue = ethers.utils.parseUnits(quantity.toString(), "gwei");
    if (action === "stake" && gweiValue.gt(ethers.utils.parseUnits(thsBalance, "gwei"))) {
      return dispatch(error(t`You cannot stake more than your THS balance.`));
    }

    if (action === "unstake" && gweiValue.gt(ethers.utils.parseUnits(sThsBalance, "gwei"))) {
      return dispatch(error(t`You cannot unstake more than your sTHS balance.`));
    }
    await dispatch(changeStake({ address, action, value: quantity.toString(), provider, networkID: chainID }));
  };

  const hasAllowance = useCallback(
    token => {
      // console.dir("stakeAllowance:" + stakeAllowance)
      // console.dir("unstakeAllowance:" + unstakeAllowance)
      if (token === "ths") return stakeAllowance >= Number(100000);
      if (token === "sThs") return unstakeAllowance >= Number(100000);
      return 0;
    },
    [stakeAllowance, unstakeAllowance],
  );

  const isAllowanceDataLoading = (stakeAllowance == null && view === 0) || (unstakeAllowance == null && view === 1);

  let modalButton = [];

  modalButton.push(
    <Button variant="contained" color="primary" className="connect-button" onClick={connect} key={1}>
      <Trans>Connect Wallet</Trans>
    </Button>,
  );

  const changeView = (_event: React.ChangeEvent<{}>, newView: number) => {
    setView(newView);
    setQuantity("0")
  };

  const trimmedBalance = Number(
    [sThsBalance]
      .filter(Boolean)
      .map(balance => Number(balance))
      .reduce((a, b) => a + b, 0)
      .toFixed(4),
  );
  const trimmedStakingAPY = trim(stakingAPY, 1);
  const stakingRebasePercentage = trim(stakingRebase, 4);
  const nextRewardValue = trim((Number(stakingRebasePercentage) / 100) * trimmedBalance, 4);
  const stakeAmount = Math.floor(((Number(sThsBalance) || 0) - (Number(sThsSTakingBalance) || 0)) * 10000) / 10000

  return (
    <div id="stake-view">
      <Zoom in={true} onEntered={() => setZoomed(true)}>
        <Paper className={`ohm-card`}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <div className="card-header">
                <Typography variant="h5"><Trans>Single Stake</Trans> (3, 3)</Typography>
                <RebaseTimer />

                {/* {address && Number(oldSohmBalance) > 0.01 && (
                  <Link
                    className="migrate-sohm-button"
                    style={{ textDecoration: "none" }}
                    href="https://docs.themisDao.finance/using-the-website/migrate"
                    aria-label="migrate-sohm"
                    target="_blank"
                  >
                    <NewReleases viewBox="0 0 24 24" />
                    <Typography>
                      <Trans>Migrate sTHS!</Trans>
                    </Typography>
                  </Link>
                )} */}
              </div>
            </Grid>

            <Grid item>
              <div className="stake-top-metrics">
                <Grid container spacing={2} alignItems="flex-end">
                  <Grid item xs={12} sm={4} md={4} lg={4}>
                    <div className="stake-apy">
                      <Typography variant="h5" color="textSecondary">
                        <Trans>APY</Trans>
                      </Typography>
                      <Typography variant="h4">
                        {stakingAPY ? (
                          <span data-testid="apy-value">
                            {new Intl.NumberFormat("en-US").format(Number(trimmedStakingAPY))}%
                          </span>
                        ) : (
                          <Skeleton width="150px" data-testid="apy-loading" />
                        )}
                      </Typography>
                    </div>
                  </Grid>

                  <Grid item xs={12} sm={4} md={4} lg={4}>
                    <div className="stake-tvl">
                      <Typography variant="h5" color="textSecondary">
                        <Trans>Total Value Deposited</Trans>
                      </Typography>
                      <Typography variant="h4">
                        {stakingTVL ? (
                          <span data-testid="tvl-value">
                            {
                              new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                                maximumFractionDigits: 0,
                                minimumFractionDigits: 0,
                              }).format(stakingTVL)
                            }
                          </span>
                        ) : (
                          <Skeleton width="150px" data-testid="tvl-loading" />
                        )}
                      </Typography>
                    </div>
                  </Grid>

                  <Grid item xs={12} sm={4} md={4} lg={4}>
                    <div className="stake-index">
                      <Typography variant="h5" color="textSecondary">
                        <Trans>Current Index</Trans>
                      </Typography>
                      <Typography variant="h4">
                        {currentIndex ? (
                          <span data-testid="index-value">{trim(Number(currentIndex), 4)} THS</span>
                        ) : (
                          <Skeleton width="150px" data-testid="index-loading" />
                        )}
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>

            <div className="staking-area">
              {!address ? (
                <div className="stake-wallet-notification">
                  <div className="wallet-menu" id="wallet-menu">
                    {modalButton}
                  </div>
                  <Typography variant="h6">
                    <Trans>Connect your wallet to stake THS</Trans>
                  </Typography>
                </div>
              ) : (
                <>
                  <Box className="stake-action-area">
                    <Tabs
                      key={String(zoomed)}
                      centered
                      value={view}
                      textColor="primary"
                      indicatorColor="primary"
                      className="stake-tab-buttons"
                      onChange={changeView}
                      aria-label="stake tabs"
                      //hides the tab underline sliding animation in while <Zoom> is loading
                        TabIndicatorProps={!zoomed ? { style: { display: "none" } } : undefined}
                    >
                      <Tab
                        label={t({
                          id: "do_stake",
                          comment: "The action of staking (verb)",
                        })}
                        {...a11yProps(0)}
                      />
                      <Tab label={t`Unstake`} {...a11yProps(1)} />
                    </Tabs>
                      <Box className="stake-action-row " display="flex" alignItems="center">
                      {address && !isAllowanceDataLoading ? (
                          (!hasAllowance("ths") && view === 0) || (!hasAllowance("sThs") && view === 1) ? (
                          <Box className="help-text">
                            <Typography variant="body1" className="stake-note" color="textSecondary">
                              {view === 0 ? (
                                <>
                                    <Trans>{view}First time staking</Trans> <b>THS</b>?
                                  <br />
                                    <Trans>Please approve Themis Dao to use your</Trans> <b>THS</b>{" "}
                                  <Trans>for staking</Trans>.
                                </>
                              ) : (
                                <>
                                      <Trans>First time unstaking</Trans> <b>sTHS</b>?
                                  <br />
                                      <Trans>Please approve Themis Dao to use your</Trans> <b>sTHS</b>{" "}
                                  <Trans>for unstaking</Trans>.
                                </>
                              )}
                            </Typography>
                          </Box>
                        ) : (
                              <FormControl className="ohm-input" variant="outlined" color="primary">
                            <InputLabel htmlFor="amount-input"></InputLabel>
                            <OutlinedInput
                              id="amount-input"
                              type="number"
                              placeholder="Enter an amount"
                              className="stake-input"
                              value={quantity}
                                  onChange={e => {
                                    setQuantity(e.target.value)
                                  }}
                              labelWidth={0}
                              endAdornment={
                                <InputAdornment position="end">
                                  <Button variant="text" onClick={setMax} color="inherit">
                                    <Trans>Max</Trans>
                                  </Button>
                                </InputAdornment>
                              }
                            />
                          </FormControl>
                        )
                      ) : (
                        <Skeleton width="150px" />
                      )}

                      <TabPanel value={view} index={0} className="stake-tab-panel">
                        {isAllowanceDataLoading ? (
                          <Skeleton />
                          ) : address && hasAllowance("ths") ? (
                          <Button
                            className="stake-button"
                            variant="contained"
                            color="primary"
                            disabled={isPendingTxn(pendingTransactions, "staking")}
                            key={!!isPendingTxn(pendingTransactions, "staking") + ""}
                            onClick={() => {
                              debounce(onChangeStake, 500, "stake");
                            }}
                          >
                                {txnButtonText(pendingTransactions, "staking", t`Stake THS`)}
                          </Button>
                        ) : (
                          <Button
                            className="stake-button"
                            variant="contained"
                            color="primary"
                            disabled={isPendingTxn(pendingTransactions, "approve_staking")}
                            onClick={() => {
                              debounce(onSeekApproval, 800, "ths");
                            }}
                          >
                            {txnButtonText(pendingTransactions, "approve_staking", t`Approve`)}
                          </Button>
                        )}
                      </TabPanel>
                      <TabPanel value={view} index={1} className="stake-tab-panel">
                        {isAllowanceDataLoading ? (
                          <Skeleton />
                          ) : address && hasAllowance("sThs") ? (
                          <Button
                            className="stake-button"
                            variant="contained"
                            color="primary"
                            disabled={isPendingTxn(pendingTransactions, "unstaking")}
                            onClick={() => {
                              debounce(onChangeStake, 500, "unstake");
                            }}
                          >
                                {txnButtonText(pendingTransactions, "unstaking", t`Unstake THS`)}
                          </Button>
                        ) : (
                          <Button
                            className="stake-button"
                            variant="contained"
                            color="primary"
                            disabled={isPendingTxn(pendingTransactions, "approve_unstaking")}
                            onClick={() => {
                              debounce(onSeekApproval, 800, "sThs");
                            }}
                          >
                            {txnButtonText(pendingTransactions, "approve_unstaking", t`Approve`)}
                          </Button>
                        )}
                      </TabPanel>
                    </Box>
                  </Box>

                  <div className={`stake-user-data`}>
                    <div className="data-row">
                      <Typography variant="body1">
                        <Trans>Unstaked Balance</Trans>
                      </Typography>
                      <Typography variant="body1" id="user-balance">
                          {isAppLoading ? <Skeleton width="80px" /> : <>{trim(Number(thsBalance), 4)} THS</>}
                      </Typography>
                    </div>

                    <div className="data-row">
                      <Typography variant="body1">
                        <Trans>Staked Balance</Trans>
                      </Typography>
                      <Typography variant="body1" id="user-staked-balance">
                          {isAppLoading ? <Skeleton width="80px" /> : <>{trim(Number(sThsSTakingBalance), 4)} sTHS</>}
                      </Typography>
                      </div>
                      
                      <div className="data-row">
                        <Typography variant="body1">
                          <Trans>Yield Amount</Trans>
                        </Typography>
                        <Typography variant="body1" id="user-staked-balance">
                          {isAppLoading ? <Skeleton width="80px" /> : <>{stakeAmount >= 0 ? stakeAmount : 0} sTHS</>}
                        </Typography>
                      </div>

                    <Divider color="secondary" />

                    <div className="data-row">
                      <Typography variant="body1">
                        <Trans>Next Reward Amount</Trans>
                      </Typography>
                      <Typography variant="body1">
                          {isAppLoading ? <Skeleton width="80px" /> : <>{nextRewardValue} sTHS</>}
                      </Typography>
                    </div>

                    <div className="data-row">
                      <Typography variant="body1">
                        <Trans>Next Reward Yield</Trans>
                      </Typography>
                        <Typography variant="body1">
                          {isAppLoading ? <Skeleton width="80px" /> : <>{stakingRebasePercentage}%</>}
                      </Typography>
                    </div>

                    <div className="data-row">
                      <Typography variant="body1">
                        <Trans>ROI (5-Day Rate)</Trans>
                      </Typography>
                        <Typography variant="body1">
                          {isAppLoading ? <Skeleton width="80px" /> : <>{trim(Number(fiveDayRate), 4)}%</>}
                      </Typography>
                    </div>
                  </div>
                </>
              )}
            </div>
          </Grid>
        </Paper>
      </Zoom>

    </div>
  );
}

export default Stake;
