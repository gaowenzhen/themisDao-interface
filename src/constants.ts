import { BigNumber } from "ethers";
import { Providers } from "./helpers/providers/Providers";

export const THE_GRAPH_URL =
  "https://api.thegraph.com/subgraphs/name/dwusiq/themisgraph"


// NOTE could get this from an outside source since it changes slightly over time
export const BLOCK_RATE_SECONDS = 3;

export const TOKEN_DECIMALS = 9;

//###: 
export const NETWORK_CHAINID = 56
export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000"

// ###
export const BINANCE_URI =
  "https://bsc-dataseed1.ninicoin.io"
  ;

export enum NetworkId {
  // TESTNET_KOVAN = NETWORK_TEST_CHAINID,
  MAIN_BINANCE = NETWORK_CHAINID,
}

export const USDT_DECIMAL = BigNumber.from("10").pow(18);

export const DEFAULT_ADDRESS = "0x9824952061C4Af5744B623c4FAAB527Bf2a81ADD"

interface IAddresses {
  [key: string]: { [key: string]: string };
}

// ###
export const addresses: IAddresses = {
  // BSC
  [NETWORK_CHAINID]: {
    USDT_ADDRESS: "0x55d398326f99059ff775485246999027b3197955",  //
    THS_USDT_PAIR_ADDRESS: "0xBB0E8171E3C14D3E56a3C8860a7AA3d3204e5178",  //
    THS_ADDRESS: "0x5Ecd430413488C1fBfEfe64f0EF759E4b2FC5F8b",  //
    STAKING_ADDRESS: "0x3C53Ca0E6B9e3ED8Ffe5aF1A9495604258E1a8B0", //
    STAKING_HELPER_ADDRESS: "0xC11117D86B729d78cfF5c560fa0217489d04C1D8", //
    STHS_ADDRESS: "0x96005e02A7f37b5365dF15081E638E82B48EA87B", //
    DISTRIBUTOR_ADDRESS: "0x79E262a25d7793872d04591AFA82636c88ec46f8", //
    BONDINGCALC_ADDRESS: "0x56897a4Ff43254C9bF19F6Ef97A1B8bcFA7664a5",
    TREASURY_ADDRESS: "0x38FBd2bC791c3DD399F325D73965Ffc88ae55C4c",  //
    REDEEM_HELPER_ADDRESS: "0x2CE48d42DDFE2B3bB51092B36994b1B7413aaE9f",
    THS_USDT_BOND: "0x96D626D15909b94A7DA82C712DC532954ABE5204",
    USDT_BOND: "0x74B5B5940d01E2b69195D16E6Ca6Ba30627728Fa",
    ScFarmForStaker_ADDRESS: "0x89A45b5e8d8b2136b8264Ec4e5dB911dAAb11895", //
    ScFarmForInvter_ADDRESS: "0xBd3D61E335c9a5a455E2cC1456b8F17c15380439", //
    StakingRewardRelease_ADDRESS: "0x9C240b79D99320005235c2260926067A910A1aDE", //
    Relationship_ADDRESS: "0xb7D952117282eE127Fd53c6Da512c18CBf93731b", //
    ScaleCode_ADDRESS: "0x59e9ea6D581e0b71D4db8B7Ab3d142b1A575216B", //
    RegisterForm_ADDRESS: "0x15B16fAD8Bba0614601768919002F81987C3aF0E",
    PRETHS_ADDRESS: "0x7cAaEE500E6ABca67E7E391a4288b90F9e37A390", //
    IDO_PRESALECONTRACT_ADDRESS: "0xA33D19E3EdDFc87c2362C991A86a020c7C1DC2ba", //
    IDO_PRESALERELEASE_ADDRESS: "0xE837A61CddD487c0665DD234B8d65E2520a5C7c6", //
    THSFarmForInviter_ADDRESS: "0xC3890f329740ef6C7dF9B1500a3d52c3ee4aF628",
    LoanContract_ADDRESS: "0xa6Ef9a915e07496cdc8e49c250E1EbC915f592CE",
    uri: Providers.getProviderUrl(NetworkId.MAIN_BINANCE)
  }
};

export const THEME_KEYWORD = "THS_THEME"
export const THEME_DARK = "dark"
export const THEME_LIGHT = "light"

export const allInvitedUrl = "https://themis.capital/themis/api/account/allInvitedByPage"
export const invitedUrl = "https://themis.capital/themis/api/account/invitedByPage"