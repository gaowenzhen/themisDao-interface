/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ThemisStakingInterface extends utils.Interface {
  functions: {
    "THS()": FunctionFragment;
    "claim(address)": FunctionFragment;
    "contractBalance()": FunctionFragment;
    "distributor()": FunctionFragment;
    "epoch()": FunctionFragment;
    "forfeit()": FunctionFragment;
    "giveLockBonus(uint256)": FunctionFragment;
    "index()": FunctionFragment;
    "initialize(address,address,uint256,uint256,uint256)": FunctionFragment;
    "locker()": FunctionFragment;
    "owner()": FunctionFragment;
    "rebase()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "returnLockBonus(uint256)": FunctionFragment;
    "sTHS()": FunctionFragment;
    "scFarmForInvter()": FunctionFragment;
    "scFarmForInvterSwaitch()": FunctionFragment;
    "scFarmForStaker()": FunctionFragment;
    "scFarmForStakerSwaitch()": FunctionFragment;
    "setContract(uint8,address)": FunctionFragment;
    "setScFarmForInvter(address,bool)": FunctionFragment;
    "setScFarmForStaker(address,bool)": FunctionFragment;
    "setStakingRewardRelease(address,bool)": FunctionFragment;
    "setWarmup(uint256)": FunctionFragment;
    "stake(uint256,address)": FunctionFragment;
    "stakingAmountOf(address)": FunctionFragment;
    "stakingRewardRelease()": FunctionFragment;
    "stakingRewardReleaseSwaitch()": FunctionFragment;
    "toggleDepositLock()": FunctionFragment;
    "totalBonus()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unstake(uint256,bool)": FunctionFragment;
    "warmupContract()": FunctionFragment;
    "warmupInfo(address)": FunctionFragment;
    "warmupPeriod()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "THS", values?: undefined): string;
  encodeFunctionData(functionFragment: "claim", values: [string]): string;
  encodeFunctionData(
    functionFragment: "contractBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "distributor",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "epoch", values?: undefined): string;
  encodeFunctionData(functionFragment: "forfeit", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "giveLockBonus",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "index", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "locker", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "rebase", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "returnLockBonus",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "sTHS", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "scFarmForInvter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "scFarmForInvterSwaitch",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "scFarmForStaker",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "scFarmForStakerSwaitch",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setContract",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setScFarmForInvter",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setScFarmForStaker",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setStakingRewardRelease",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setWarmup",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stake",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "stakingAmountOf",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "stakingRewardRelease",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stakingRewardReleaseSwaitch",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "toggleDepositLock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalBonus",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "unstake",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "warmupContract",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "warmupInfo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "warmupPeriod",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "THS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "contractBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "distributor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "epoch", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "forfeit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "giveLockBonus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "index", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "locker", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rebase", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "returnLockBonus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sTHS", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "scFarmForInvter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "scFarmForInvterSwaitch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "scFarmForStaker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "scFarmForStakerSwaitch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setScFarmForInvter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setScFarmForStaker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setStakingRewardRelease",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setWarmup", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakingAmountOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakingRewardRelease",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakingRewardReleaseSwaitch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "toggleDepositLock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "totalBonus", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unstake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "warmupContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "warmupInfo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "warmupPeriod",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface ThemisStaking extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ThemisStakingInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    THS(overrides?: CallOverrides): Promise<[string]>;

    claim(
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    contractBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    distributor(overrides?: CallOverrides): Promise<[string]>;

    epoch(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        length: BigNumber;
        number: BigNumber;
        endBlock: BigNumber;
        distribute: BigNumber;
      }
    >;

    forfeit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    giveLockBonus(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    index(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      _THS: string,
      _sTHS: string,
      _epochLength: BigNumberish,
      _firstEpochNumber: BigNumberish,
      _firstEpochBlock: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    locker(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    rebase(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    returnLockBonus(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sTHS(overrides?: CallOverrides): Promise<[string]>;

    scFarmForInvter(overrides?: CallOverrides): Promise<[string]>;

    scFarmForInvterSwaitch(overrides?: CallOverrides): Promise<[boolean]>;

    scFarmForStaker(overrides?: CallOverrides): Promise<[string]>;

    scFarmForStakerSwaitch(overrides?: CallOverrides): Promise<[boolean]>;

    setContract(
      _contract: BigNumberish,
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setScFarmForInvter(
      _contract: string,
      _switch: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setScFarmForStaker(
      _contract: string,
      _switch: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setStakingRewardRelease(
      _contract: string,
      _switch: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setWarmup(
      _warmupPeriod: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stake(
      _amount: BigNumberish,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakingAmountOf(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    stakingRewardRelease(overrides?: CallOverrides): Promise<[string]>;

    stakingRewardReleaseSwaitch(overrides?: CallOverrides): Promise<[boolean]>;

    toggleDepositLock(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    totalBonus(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unstake(
      _amount: BigNumberish,
      _trigger: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    warmupContract(overrides?: CallOverrides): Promise<[string]>;

    warmupInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, boolean] & {
        deposit: BigNumber;
        gons: BigNumber;
        expiry: BigNumber;
        lock: boolean;
      }
    >;

    warmupPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  THS(overrides?: CallOverrides): Promise<string>;

  claim(
    _recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  contractBalance(overrides?: CallOverrides): Promise<BigNumber>;

  distributor(overrides?: CallOverrides): Promise<string>;

  epoch(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      length: BigNumber;
      number: BigNumber;
      endBlock: BigNumber;
      distribute: BigNumber;
    }
  >;

  forfeit(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  giveLockBonus(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  index(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    _THS: string,
    _sTHS: string,
    _epochLength: BigNumberish,
    _firstEpochNumber: BigNumberish,
    _firstEpochBlock: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  locker(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  rebase(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  returnLockBonus(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sTHS(overrides?: CallOverrides): Promise<string>;

  scFarmForInvter(overrides?: CallOverrides): Promise<string>;

  scFarmForInvterSwaitch(overrides?: CallOverrides): Promise<boolean>;

  scFarmForStaker(overrides?: CallOverrides): Promise<string>;

  scFarmForStakerSwaitch(overrides?: CallOverrides): Promise<boolean>;

  setContract(
    _contract: BigNumberish,
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setScFarmForInvter(
    _contract: string,
    _switch: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setScFarmForStaker(
    _contract: string,
    _switch: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setStakingRewardRelease(
    _contract: string,
    _switch: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setWarmup(
    _warmupPeriod: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stake(
    _amount: BigNumberish,
    _recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakingAmountOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  stakingRewardRelease(overrides?: CallOverrides): Promise<string>;

  stakingRewardReleaseSwaitch(overrides?: CallOverrides): Promise<boolean>;

  toggleDepositLock(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  totalBonus(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unstake(
    _amount: BigNumberish,
    _trigger: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  warmupContract(overrides?: CallOverrides): Promise<string>;

  warmupInfo(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, boolean] & {
      deposit: BigNumber;
      gons: BigNumber;
      expiry: BigNumber;
      lock: boolean;
    }
  >;

  warmupPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    THS(overrides?: CallOverrides): Promise<string>;

    claim(_recipient: string, overrides?: CallOverrides): Promise<void>;

    contractBalance(overrides?: CallOverrides): Promise<BigNumber>;

    distributor(overrides?: CallOverrides): Promise<string>;

    epoch(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        length: BigNumber;
        number: BigNumber;
        endBlock: BigNumber;
        distribute: BigNumber;
      }
    >;

    forfeit(overrides?: CallOverrides): Promise<void>;

    giveLockBonus(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    index(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _THS: string,
      _sTHS: string,
      _epochLength: BigNumberish,
      _firstEpochNumber: BigNumberish,
      _firstEpochBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    locker(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    rebase(overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    returnLockBonus(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    sTHS(overrides?: CallOverrides): Promise<string>;

    scFarmForInvter(overrides?: CallOverrides): Promise<string>;

    scFarmForInvterSwaitch(overrides?: CallOverrides): Promise<boolean>;

    scFarmForStaker(overrides?: CallOverrides): Promise<string>;

    scFarmForStakerSwaitch(overrides?: CallOverrides): Promise<boolean>;

    setContract(
      _contract: BigNumberish,
      _address: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setScFarmForInvter(
      _contract: string,
      _switch: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setScFarmForStaker(
      _contract: string,
      _switch: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setStakingRewardRelease(
      _contract: string,
      _switch: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setWarmup(
      _warmupPeriod: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stake(
      _amount: BigNumberish,
      _recipient: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    stakingAmountOf(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stakingRewardRelease(overrides?: CallOverrides): Promise<string>;

    stakingRewardReleaseSwaitch(overrides?: CallOverrides): Promise<boolean>;

    toggleDepositLock(overrides?: CallOverrides): Promise<void>;

    totalBonus(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unstake(
      _amount: BigNumberish,
      _trigger: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    warmupContract(overrides?: CallOverrides): Promise<string>;

    warmupInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, boolean] & {
        deposit: BigNumber;
        gons: BigNumber;
        expiry: BigNumber;
        lock: boolean;
      }
    >;

    warmupPeriod(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    THS(overrides?: CallOverrides): Promise<BigNumber>;

    claim(
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    contractBalance(overrides?: CallOverrides): Promise<BigNumber>;

    distributor(overrides?: CallOverrides): Promise<BigNumber>;

    epoch(overrides?: CallOverrides): Promise<BigNumber>;

    forfeit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    giveLockBonus(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    index(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _THS: string,
      _sTHS: string,
      _epochLength: BigNumberish,
      _firstEpochNumber: BigNumberish,
      _firstEpochBlock: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    locker(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    rebase(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    returnLockBonus(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sTHS(overrides?: CallOverrides): Promise<BigNumber>;

    scFarmForInvter(overrides?: CallOverrides): Promise<BigNumber>;

    scFarmForInvterSwaitch(overrides?: CallOverrides): Promise<BigNumber>;

    scFarmForStaker(overrides?: CallOverrides): Promise<BigNumber>;

    scFarmForStakerSwaitch(overrides?: CallOverrides): Promise<BigNumber>;

    setContract(
      _contract: BigNumberish,
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setScFarmForInvter(
      _contract: string,
      _switch: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setScFarmForStaker(
      _contract: string,
      _switch: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setStakingRewardRelease(
      _contract: string,
      _switch: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setWarmup(
      _warmupPeriod: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stake(
      _amount: BigNumberish,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakingAmountOf(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stakingRewardRelease(overrides?: CallOverrides): Promise<BigNumber>;

    stakingRewardReleaseSwaitch(overrides?: CallOverrides): Promise<BigNumber>;

    toggleDepositLock(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    totalBonus(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unstake(
      _amount: BigNumberish,
      _trigger: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    warmupContract(overrides?: CallOverrides): Promise<BigNumber>;

    warmupInfo(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    warmupPeriod(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    THS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claim(
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    contractBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    distributor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    epoch(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    forfeit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    giveLockBonus(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    index(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _THS: string,
      _sTHS: string,
      _epochLength: BigNumberish,
      _firstEpochNumber: BigNumberish,
      _firstEpochBlock: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    locker(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rebase(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    returnLockBonus(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sTHS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    scFarmForInvter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    scFarmForInvterSwaitch(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    scFarmForStaker(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    scFarmForStakerSwaitch(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setContract(
      _contract: BigNumberish,
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setScFarmForInvter(
      _contract: string,
      _switch: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setScFarmForStaker(
      _contract: string,
      _switch: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setStakingRewardRelease(
      _contract: string,
      _switch: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setWarmup(
      _warmupPeriod: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stake(
      _amount: BigNumberish,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakingAmountOf(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stakingRewardRelease(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stakingRewardReleaseSwaitch(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    toggleDepositLock(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    totalBonus(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unstake(
      _amount: BigNumberish,
      _trigger: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    warmupContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    warmupInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    warmupPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
