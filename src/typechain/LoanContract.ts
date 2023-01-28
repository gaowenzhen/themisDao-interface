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

export type BorrowInfoStruct = {
  borrowId: BigNumberish;
  borrower: string;
  borrowedTimestamp: BigNumberish;
  borrowedBlock: BigNumberish;
  repayedTimestamp: BigNumberish;
  repayedBlock: BigNumberish;
  stakedSthsAmount: BigNumberish;
  borrowedUsdtAmount: BigNumberish;
};

export type BorrowInfoStructOutput = [
  BigNumber,
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber
] & {
  borrowId: BigNumber;
  borrower: string;
  borrowedTimestamp: BigNumber;
  borrowedBlock: BigNumber;
  repayedTimestamp: BigNumber;
  repayedBlock: BigNumber;
  stakedSthsAmount: BigNumber;
  borrowedUsdtAmount: BigNumber;
};

export interface LoanContractInterface extends utils.Interface {
  functions: {
    "borrowFeeRateDec()": FunctionFragment;
    "borrowFeeRatePerBlock()": FunctionFragment;
    "borrowInfoOf(uint256)": FunctionFragment;
    "borrowUsdtPerSths()": FunctionFragment;
    "borrowedUsdtTotal()": FunctionFragment;
    "calculateSthsFee(uint256)": FunctionFragment;
    "calculateUsdtAmount(uint256)": FunctionFragment;
    "getAllowStakeSthsMax(address)": FunctionFragment;
    "getBorrowInfoByPage(address,uint256,uint256)": FunctionFragment;
    "initialize(address,address,address,address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "repayUsdt(uint256)": FunctionFragment;
    "sThs()": FunctionFragment;
    "setBorrowFeeRatePerBlock(uint256)": FunctionFragment;
    "setBorrowUsdtPerSths(uint256)": FunctionFragment;
    "stakeSthsAndBorrowUsdts(uint256)": FunctionFragment;
    "stakedSthsTotal()": FunctionFragment;
    "staking()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "treasury()": FunctionFragment;
    "usdt()": FunctionFragment;
    "withdrawToken(address,uint256,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "borrowFeeRateDec",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "borrowFeeRatePerBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "borrowInfoOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "borrowUsdtPerSths",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "borrowedUsdtTotal",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "calculateSthsFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateUsdtAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllowStakeSthsMax",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getBorrowInfoByPage",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string, string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "repayUsdt",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "sThs", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setBorrowFeeRatePerBlock",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setBorrowUsdtPerSths",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakeSthsAndBorrowUsdts",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakedSthsTotal",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "staking", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "treasury", values?: undefined): string;
  encodeFunctionData(functionFragment: "usdt", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawToken",
    values: [string, BigNumberish, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "borrowFeeRateDec",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "borrowFeeRatePerBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "borrowInfoOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "borrowUsdtPerSths",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "borrowedUsdtTotal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateSthsFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateUsdtAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllowStakeSthsMax",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBorrowInfoByPage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "repayUsdt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sThs", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setBorrowFeeRatePerBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBorrowUsdtPerSths",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakeSthsAndBorrowUsdts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakedSthsTotal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "staking", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "usdt", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawToken",
    data: BytesLike
  ): Result;

  events: {
    "Borrow(address,uint256,uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Repay(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Borrow"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Repay"): EventFragment;
}

export type BorrowEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  {
    borrower: string;
    sthsAmount: BigNumber;
    usdtAmount: BigNumber;
    borrowId: BigNumber;
  }
>;

export type BorrowEventFilter = TypedEventFilter<BorrowEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type RepayEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { borrower: string; borrowId: BigNumber; fee: BigNumber }
>;

export type RepayEventFilter = TypedEventFilter<RepayEvent>;

export interface LoanContract extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LoanContractInterface;

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
    borrowFeeRateDec(overrides?: CallOverrides): Promise<[BigNumber]>;

    borrowFeeRatePerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    borrowInfoOf(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        borrowId: BigNumber;
        borrower: string;
        borrowedTimestamp: BigNumber;
        borrowedBlock: BigNumber;
        repayedTimestamp: BigNumber;
        repayedBlock: BigNumber;
        stakedSthsAmount: BigNumber;
        borrowedUsdtAmount: BigNumber;
      }
    >;

    borrowUsdtPerSths(overrides?: CallOverrides): Promise<[BigNumber]>;

    borrowedUsdtTotal(overrides?: CallOverrides): Promise<[BigNumber]>;

    calculateSthsFee(
      _borrowId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { fee_: BigNumber }>;

    calculateUsdtAmount(
      _sthsAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { usdtAmount_: BigNumber }>;

    getAllowStakeSthsMax(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { allowSthsMax_: BigNumber }>;

    getBorrowInfoByPage(
      _borrower: string,
      _start: BigNumberish,
      _size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BorrowInfoStructOutput[]] & {
        resultSize_: BigNumber;
        resultArr_: BorrowInfoStructOutput[];
      }
    >;

    initialize(
      _sTHS: string,
      _treasury: string,
      _staking: string,
      _usdt: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    repayUsdt(
      _borrowId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sThs(overrides?: CallOverrides): Promise<[string]>;

    setBorrowFeeRatePerBlock(
      _newRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setBorrowUsdtPerSths(
      _newValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakeSthsAndBorrowUsdts(
      _sThsAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakedSthsTotal(overrides?: CallOverrides): Promise<[BigNumber]>;

    staking(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    treasury(overrides?: CallOverrides): Promise<[string]>;

    usdt(overrides?: CallOverrides): Promise<[string]>;

    withdrawToken(
      _token: string,
      _amount: BigNumberish,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  borrowFeeRateDec(overrides?: CallOverrides): Promise<BigNumber>;

  borrowFeeRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;

  borrowInfoOf(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      borrowId: BigNumber;
      borrower: string;
      borrowedTimestamp: BigNumber;
      borrowedBlock: BigNumber;
      repayedTimestamp: BigNumber;
      repayedBlock: BigNumber;
      stakedSthsAmount: BigNumber;
      borrowedUsdtAmount: BigNumber;
    }
  >;

  borrowUsdtPerSths(overrides?: CallOverrides): Promise<BigNumber>;

  borrowedUsdtTotal(overrides?: CallOverrides): Promise<BigNumber>;

  calculateSthsFee(
    _borrowId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateUsdtAmount(
    _sthsAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAllowStakeSthsMax(
    _addr: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getBorrowInfoByPage(
    _borrower: string,
    _start: BigNumberish,
    _size: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BorrowInfoStructOutput[]] & {
      resultSize_: BigNumber;
      resultArr_: BorrowInfoStructOutput[];
    }
  >;

  initialize(
    _sTHS: string,
    _treasury: string,
    _staking: string,
    _usdt: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  repayUsdt(
    _borrowId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sThs(overrides?: CallOverrides): Promise<string>;

  setBorrowFeeRatePerBlock(
    _newRate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setBorrowUsdtPerSths(
    _newValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakeSthsAndBorrowUsdts(
    _sThsAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakedSthsTotal(overrides?: CallOverrides): Promise<BigNumber>;

  staking(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  treasury(overrides?: CallOverrides): Promise<string>;

  usdt(overrides?: CallOverrides): Promise<string>;

  withdrawToken(
    _token: string,
    _amount: BigNumberish,
    _to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    borrowFeeRateDec(overrides?: CallOverrides): Promise<BigNumber>;

    borrowFeeRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    borrowInfoOf(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        borrowId: BigNumber;
        borrower: string;
        borrowedTimestamp: BigNumber;
        borrowedBlock: BigNumber;
        repayedTimestamp: BigNumber;
        repayedBlock: BigNumber;
        stakedSthsAmount: BigNumber;
        borrowedUsdtAmount: BigNumber;
      }
    >;

    borrowUsdtPerSths(overrides?: CallOverrides): Promise<BigNumber>;

    borrowedUsdtTotal(overrides?: CallOverrides): Promise<BigNumber>;

    calculateSthsFee(
      _borrowId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateUsdtAmount(
      _sthsAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAllowStakeSthsMax(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBorrowInfoByPage(
      _borrower: string,
      _start: BigNumberish,
      _size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BorrowInfoStructOutput[]] & {
        resultSize_: BigNumber;
        resultArr_: BorrowInfoStructOutput[];
      }
    >;

    initialize(
      _sTHS: string,
      _treasury: string,
      _staking: string,
      _usdt: string,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    repayUsdt(
      _borrowId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    sThs(overrides?: CallOverrides): Promise<string>;

    setBorrowFeeRatePerBlock(
      _newRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setBorrowUsdtPerSths(
      _newValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stakeSthsAndBorrowUsdts(
      _sThsAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stakedSthsTotal(overrides?: CallOverrides): Promise<BigNumber>;

    staking(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    treasury(overrides?: CallOverrides): Promise<string>;

    usdt(overrides?: CallOverrides): Promise<string>;

    withdrawToken(
      _token: string,
      _amount: BigNumberish,
      _to: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Borrow(address,uint256,uint256,uint256)"(
      borrower?: string | null,
      sthsAmount?: BigNumberish | null,
      usdtAmount?: BigNumberish | null,
      borrowId?: null
    ): BorrowEventFilter;
    Borrow(
      borrower?: string | null,
      sthsAmount?: BigNumberish | null,
      usdtAmount?: BigNumberish | null,
      borrowId?: null
    ): BorrowEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "Repay(address,uint256,uint256)"(
      borrower?: string | null,
      borrowId?: BigNumberish | null,
      fee?: BigNumberish | null
    ): RepayEventFilter;
    Repay(
      borrower?: string | null,
      borrowId?: BigNumberish | null,
      fee?: BigNumberish | null
    ): RepayEventFilter;
  };

  estimateGas: {
    borrowFeeRateDec(overrides?: CallOverrides): Promise<BigNumber>;

    borrowFeeRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    borrowInfoOf(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    borrowUsdtPerSths(overrides?: CallOverrides): Promise<BigNumber>;

    borrowedUsdtTotal(overrides?: CallOverrides): Promise<BigNumber>;

    calculateSthsFee(
      _borrowId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateUsdtAmount(
      _sthsAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAllowStakeSthsMax(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBorrowInfoByPage(
      _borrower: string,
      _start: BigNumberish,
      _size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _sTHS: string,
      _treasury: string,
      _staking: string,
      _usdt: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    repayUsdt(
      _borrowId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sThs(overrides?: CallOverrides): Promise<BigNumber>;

    setBorrowFeeRatePerBlock(
      _newRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setBorrowUsdtPerSths(
      _newValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakeSthsAndBorrowUsdts(
      _sThsAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakedSthsTotal(overrides?: CallOverrides): Promise<BigNumber>;

    staking(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    treasury(overrides?: CallOverrides): Promise<BigNumber>;

    usdt(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawToken(
      _token: string,
      _amount: BigNumberish,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    borrowFeeRateDec(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    borrowFeeRatePerBlock(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    borrowInfoOf(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    borrowUsdtPerSths(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    borrowedUsdtTotal(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    calculateSthsFee(
      _borrowId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateUsdtAmount(
      _sthsAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllowStakeSthsMax(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBorrowInfoByPage(
      _borrower: string,
      _start: BigNumberish,
      _size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _sTHS: string,
      _treasury: string,
      _staking: string,
      _usdt: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    repayUsdt(
      _borrowId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sThs(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setBorrowFeeRatePerBlock(
      _newRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setBorrowUsdtPerSths(
      _newValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakeSthsAndBorrowUsdts(
      _sThsAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakedSthsTotal(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    staking(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    treasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    usdt(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawToken(
      _token: string,
      _amount: BigNumberish,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}