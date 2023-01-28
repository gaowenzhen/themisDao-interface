import { useCallback, useEffect, useState } from "react";
import copy from "copy-to-clipboard"

import { ReactComponent as CloseIcon } from "../../asstes/icons/x.svg";
import { ReactComponent as WalletIcon } from "../../asstes/icons/wallet.svg";
import { useAddress, useWeb3Context } from "../../hooks/web3Context";
import InitialWalletView from "./InitialWalletView";
import { Drawer, SvgIcon, Button, Typography, Box, IconButton, ButtonProps, styled } from "@material-ui/core";
import { ethers } from "ethers";
import { addresses } from "src/constants";
import { abi as RelationshipABI } from "src/abi/Relationship.json";
import { Trans } from "@lingui/macro";



const WalletButtonBase = (props: ButtonProps) => (
  <Button id="ohm-menu-button" size="large" variant="contained" color="secondary" {...props} />
);

const OpenWalletButton = (props: ButtonProps) => (
  <WalletButtonBase {...props}>
    <SvgIcon component={WalletIcon} color="primary" />
    <Typography><span>Wallet</span></Typography>
  </WalletButtonBase>
);

const ConnectButton = (props: ButtonProps) => (
  <WalletButtonBase {...props}>
    <SvgIcon component={WalletIcon} color="primary" />
    <Typography><span>Connect Wallet</span></Typography>
  </WalletButtonBase>
);

const InitCode = styled("div")({
  width: "100%",
  padding: "16px 32px",
  fontSize: "16px",
  cursor: "pointer"
})

const WalletButton = ({ openWallet }: { openWallet: () => void }) => {
  const { connect, connected } = useWeb3Context();
  return connected ? <OpenWalletButton onClick={openWallet} /> : <ConnectButton onClick={connect} />;
};

// const PendingTxsList = ({ pendingTxs, anchorEl }) => {
//   <Popper id={id} open={open} anchorEl={walletButtonRef.current} placement="bottom-end">
//             <Fade {...TransitionProps} timeout={100}>
//               <Paper className="ohm-menu" elevation={1}>
//                 {pendingTransactions.map(({ txnHash, text }) => (
//                   <Box key={txnHash} fullWidth>
//                     <Link key={txnHash} href={getEtherscanUrl({ chainID, txnHash })} target="_blank" rel="noreferrer">
//                       <Button size="large" variant="contained" color="secondary" fullWidth>
//                         <Typography align="left">
//                           {text} <SvgIcon component={ArrowUpIcon} />
//                         </Typography>
//                       </Button>
//                     </Link>
//                   </Box>
//                 ))}
//               </Paper>
//             </Fade>
//       </Popper>
// }

const DisconnectButton = () => {
  const { disconnect } = useWeb3Context();
  return (
    <Button onClick={disconnect} variant="contained" size="large" color="secondary">
      <Typography><span>Disconnect</span></Typography>
    </Button>
  );
};

export function Wallet() {
  const [isWalletOpen, setWalletOpen] = useState(false);
  const [initCode, setInitCode] = useState("");
  const closeWallet = () => setWalletOpen(false);
  const openWallet = () => setWalletOpen(true);
  const { chainID, provider } = useWeb3Context()
  const address = useAddress()
  const [state, setState] = useState(false)


  const serachRelationship = useCallback(

    async (account: string) => {
      if (address && chainID && provider && addresses[chainID]?.Relationship_ADDRESS) {
        const signer = provider.getSigner();
        const RelationshipContract = new ethers.Contract(addresses[chainID].Relationship_ADDRESS as string, RelationshipABI, signer)
        const info = await RelationshipContract.RegisterInfoOf(account)
        info?.registrantCode && setInitCode(info.registrantCode)
      }

    }, [address, chainID, provider, addresses]
  )

  useEffect(() => {
    if (address && chainID && provider && addresses[chainID]?.Relationship_ADDRESS) {
      serachRelationship(address)
    }
  }, [address, chainID, provider, addresses])

 


  return (
    <>
      <WalletButton openWallet={openWallet} />
      <Drawer anchor="right" open={isWalletOpen} onClose={closeWallet}>
        <Box sx={{ display: "flex", justifyContent: "right" }}>
          <IconButton onClick={closeWallet} aria-label="close wallet">
            <SvgIcon component={CloseIcon} color="primary" />
          </IconButton>
        </Box>
        <InitialWalletView />
        {initCode && <InitCode onClick={() => {
          if (initCode && copy("https://app.themis.capital/register?initCode=" + initCode)) {
            setState(true)
            setInterval(() => {
              setState(false)
            }, 2000)
          }
        }}>{state ? "Copied" : `Invitation code:  ${initCode || "--"}`}</InitCode>
        }
        {/* <InitCode onClick={addToken}><Trans>Add Token Address</Trans></InitCode> */}
          <DisconnectButton />
      </Drawer>
    </>
  );
}
