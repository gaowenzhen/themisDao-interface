import { useSelector } from "react-redux";
import { Skeleton } from "@material-ui/lab";
import { Typography, Box } from "@material-ui/core";
import { trim, formatCurrency } from "../../../../helpers";
import InfoTooltip from "src/components/InfoTooltip/InfoTooltip.jsx";
import { Trans, t } from "@lingui/macro";

export const Metric = props => <Box className={`metric ${props.className}`}>{props.children}</Box>;

Metric.Value = props => <Typography variant="h5">{props.children || <Skeleton type="text" />}</Typography>;

Metric.Title = props => (
  <Typography variant="h6" color="textSecondary">
    {props.children}
  </Typography>
);

export const MarketCap = () => {
  const marketCap = useSelector(state => state.app.marketCap);

  return (
    <Metric className="market">
      <Metric.Title><Trans>Market Cap</Trans></Metric.Title>
      <Metric.Value>
        {marketCap && formatCurrency(marketCap, 0)}
      </Metric.Value>
    </Metric>
  );
};

export const THSPrice = () => {
  const marketPrice = useSelector(state => state.app.thsPrice);

  return (
    <Metric className="price">
      <Metric.Title><Trans>THS Price</Trans></Metric.Title>
      <Metric.Value>
        {marketPrice && formatCurrency(marketPrice, 2)}
      </Metric.Value>
    </Metric>
  );
};

export const CircSupply = () => {
  const circSupply = useSelector(state => state.app.circSupply);
  const totalSupply = useSelector(state => state.app.totalSupply);

  const isDataLoaded = circSupply && totalSupply;

  return (
    <Metric className="circ">
      <Metric.Title><Trans>Total casting quantity</Trans></Metric.Title>
      <Metric.Value>
        {isDataLoaded &&
          // parseInt(circSupply) + " / " + 
          parseInt(totalSupply)}
      </Metric.Value>
    </Metric>
  );
};

export const BackingPerTHS = () => {
  const backingPerThs = useSelector(state => state.app.treasuryMarketValue / state.app.circSupply);

  return (
    <Metric className="bpo">
      <Metric.Title><Trans>Backing per THS</Trans></Metric.Title>
      <Metric.Value>
        {!isNaN(backingPerThs) && formatCurrency(backingPerThs, 2)}
      </Metric.Value>
    </Metric>
  );
};

export const CurrentIndex = () => {
  const currentIndex = useSelector(state => state.app.currentIndex);

  return (
    <Metric className="index">
      <Metric.Title><Trans>
        Current Index
        <InfoTooltip message={t`The current index tracks the amount of sTHS accumulated since the beginning of staking. Basically, how much sTHS one would have if they staked and held a single THS from day 1.`} />
      </Trans></Metric.Title>
      <Metric.Value>
        {currentIndex && trim(currentIndex, 4) + " sTHS"}
      </Metric.Value>
    </Metric>
  );
};

export const STHSPrice = () => {
  const sThsPrice = useSelector(state => state.app.thsPrice);

  return (
    <Metric className="wsoprice">
      <Metric.Title><Trans>
        sTHS Price
        {/* <InfoTooltip
          message={
            "sThs = THS * index\n\nThe price of wsOHM is equal to the price of THS multiplied by the current index"
          }
        /> */}
      </Trans></Metric.Title>
      <Metric.Value>
        {sThsPrice && formatCurrency(sThsPrice, 2)}
      </Metric.Value>
    </Metric>
  );
};
