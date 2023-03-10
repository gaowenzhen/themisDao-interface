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

export type PayTokenPriceInfoStruct = { payToken: string; price: BigNumberish };

export type PayTokenPriceInfoStructOutput = [string, BigNumber] & {
  payToken: string;
  price: BigNumber;
};

export type TermInfoStruct = {
  termId: BigNumberish;
  saleAmountMax: BigNumberish;
  eachUserBuyMax: BigNumberish;
  soldAmount: BigNumberish;
  startTimestamp: BigNumberish;
  endTimestamp: BigNumberish;
};

export type TermInfoStructOutput = [
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber
] & {
  termId: BigNumber;
  saleAmountMax: BigNumber;
  eachUserBuyMax: BigNumber;
  soldAmount: BigNumber;
  startTimestamp: BigNumber;
  endTimestamp: BigNumber;
};

export interface PresaleContractInterface extends utils.Interface {
  functions: {
    "addExperiencerBatch(address[])": FunctionFragment;
    "addTerm(uint256,uint256,uint256,uint256,uint256,address[],uint256[])": FunctionFragment;
    "buyPreTHS(address,uint256)": FunctionFragment;
    "buyTotalOf(address)": FunctionFragment;
    "calculatePayout(address,uint256)": FunctionFragment;
    "currentTermId()": FunctionFragment;
    "eachUserBuyPreThsMax()": FunctionFragment;
    "experienceEndTimestamp()": FunctionFragment;
    "getAllPayToken(uint256)": FunctionFragment;
    "getCurrentMaxTerm()": FunctionFragment;
    "getExperiencerByPage(uint256,uint256)": FunctionFragment;
    "getTermInfoByPage(uint256,uint256)": FunctionFragment;
    "getUserBuyTotal(address)": FunctionFragment;
    "isExperiencer(address)": FunctionFragment;
    "policy()": FunctionFragment;
    "preTHS()": FunctionFragment;
    "priceDec()": FunctionFragment;
    "pullPolicy()": FunctionFragment;
    "pushPolicy(address)": FunctionFragment;
    "removeExperience(address)": FunctionFragment;
    "renouncePolicy()": FunctionFragment;
    "salePreThsMax()": FunctionFragment;
    "setCurrentTermEachUserBuyMax(uint256)": FunctionFragment;
    "setCurrentTermEndTimestamp(uint256)": FunctionFragment;
    "setEachUserBuyPreThsMax(uint256)": FunctionFragment;
    "setExperienceEndTimestamp(uint256)": FunctionFragment;
    "setPrice(uint256,address,uint256)": FunctionFragment;
    "setSalePreThsMax(uint256)": FunctionFragment;
    "setTermSalePreThsMax(uint256,uint256)": FunctionFragment;
    "soldPreThsTotal()": FunctionFragment;
    "switchTermTo(uint256)": FunctionFragment;
    "termInfoOf(uint256)": FunctionFragment;
    "userBuyTotalOfTerm(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addExperiencerBatch",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "addTerm",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string[],
      BigNumberish[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "buyPreTHS",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "buyTotalOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "calculatePayout",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "currentTermId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "eachUserBuyPreThsMax",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "experienceEndTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllPayToken",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentMaxTerm",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getExperiencerByPage",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTermInfoByPage",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserBuyTotal",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isExperiencer",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "policy", values?: undefined): string;
  encodeFunctionData(functionFragment: "preTHS", values?: undefined): string;
  encodeFunctionData(functionFragment: "priceDec", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pullPolicy",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pushPolicy", values: [string]): string;
  encodeFunctionData(
    functionFragment: "removeExperience",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renouncePolicy",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "salePreThsMax",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setCurrentTermEachUserBuyMax",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setCurrentTermEndTimestamp",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setEachUserBuyPreThsMax",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setExperienceEndTimestamp",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPrice",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setSalePreThsMax",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTermSalePreThsMax",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "soldPreThsTotal",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "switchTermTo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "termInfoOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "userBuyTotalOfTerm",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addExperiencerBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addTerm", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buyPreTHS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buyTotalOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calculatePayout",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentTermId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "eachUserBuyPreThsMax",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "experienceEndTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllPayToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentMaxTerm",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getExperiencerByPage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTermInfoByPage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserBuyTotal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isExperiencer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "policy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "preTHS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "priceDec", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pullPolicy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pushPolicy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeExperience",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renouncePolicy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "salePreThsMax",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCurrentTermEachUserBuyMax",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCurrentTermEndTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setEachUserBuyPreThsMax",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setExperienceEndTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setSalePreThsMax",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTermSalePreThsMax",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "soldPreThsTotal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "switchTermTo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "termInfoOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "userBuyTotalOfTerm",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipPulled(address,address)": EventFragment;
    "OwnershipPushed(address,address)": EventFragment;
    "SetPrice(address,uint256,address,uint256,uint256)": EventFragment;
    "SwitchTerm(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipPulled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipPushed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetPrice"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SwitchTerm"): EventFragment;
}

export type OwnershipPulledEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipPulledEventFilter = TypedEventFilter<OwnershipPulledEvent>;

export type OwnershipPushedEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipPushedEventFilter = TypedEventFilter<OwnershipPushedEvent>;

export type SetPriceEvent = TypedEvent<
  [string, BigNumber, string, BigNumber, BigNumber],
  {
    sender: string;
    termId: BigNumber;
    payToken: string;
    oldPrice: BigNumber;
    newPrice: BigNumber;
  }
>;

export type SetPriceEventFilter = TypedEventFilter<SetPriceEvent>;

export type SwitchTermEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { sender: string; oldTerm: BigNumber; newTerm: BigNumber }
>;

export type SwitchTermEventFilter = TypedEventFilter<SwitchTermEvent>;

export interface PresaleContract extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PresaleContractInterface;

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
    addExperiencerBatch(
      _experiencers: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addTerm(
      _saleMax: BigNumberish,
      _eachUserBuyMax: BigNumberish,
      _startTimestamp: BigNumberish,
      _termTimeLength: BigNumberish,
      _payTokenSize: BigNumberish,
      _payTokens: string[],
      _prices: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    buyPreTHS(
      _payToken: string,
      _payAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    buyTotalOf(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    calculatePayout(
      _payToken: string,
      _payAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { payoutThs_: BigNumber }>;

    currentTermId(overrides?: CallOverrides): Promise<[BigNumber]>;

    eachUserBuyPreThsMax(overrides?: CallOverrides): Promise<[BigNumber]>;

    experienceEndTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    getAllPayToken(
      _termId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, PayTokenPriceInfoStructOutput[]] & {
        resultSize_: BigNumber;
        payTokens_: PayTokenPriceInfoStructOutput[];
      }
    >;

    getCurrentMaxTerm(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { termId_: BigNumber }>;

    getExperiencerByPage(
      _start: BigNumberish,
      _size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string[]] & {
        resultSize_: BigNumber;
        experiencerList_: string[];
      }
    >;

    getTermInfoByPage(
      _start: BigNumberish,
      _size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, TermInfoStructOutput[]] & {
        resultSize_: BigNumber;
        termInfoList_: TermInfoStructOutput[];
      }
    >;

    getUserBuyTotal(
      _buyer: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { buyPreThsTotal_: BigNumber }>;

    isExperiencer(_addr: string, overrides?: CallOverrides): Promise<[boolean]>;

    policy(overrides?: CallOverrides): Promise<[string]>;

    preTHS(overrides?: CallOverrides): Promise<[string]>;

    priceDec(overrides?: CallOverrides): Promise<[BigNumber]>;

    pullPolicy(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pushPolicy(
      newPolicy_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeExperience(
      _experiencer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renouncePolicy(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    salePreThsMax(overrides?: CallOverrides): Promise<[BigNumber]>;

    setCurrentTermEachUserBuyMax(
      _buyMax: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setCurrentTermEndTimestamp(
      _endTimestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setEachUserBuyPreThsMax(
      _eachUserBuyPreThsMax: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setExperienceEndTimestamp(
      _endTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPrice(
      _termId: BigNumberish,
      _addrToken: string,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSalePreThsMax(
      _totalSaleMax: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTermSalePreThsMax(
      _termId: BigNumberish,
      _totalSaleMax: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    soldPreThsTotal(overrides?: CallOverrides): Promise<[BigNumber]>;

    switchTermTo(
      _termId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    termInfoOf(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        termId: BigNumber;
        saleAmountMax: BigNumber;
        eachUserBuyMax: BigNumber;
        soldAmount: BigNumber;
        startTimestamp: BigNumber;
        endTimestamp: BigNumber;
      }
    >;

    userBuyTotalOfTerm(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  addExperiencerBatch(
    _experiencers: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addTerm(
    _saleMax: BigNumberish,
    _eachUserBuyMax: BigNumberish,
    _startTimestamp: BigNumberish,
    _termTimeLength: BigNumberish,
    _payTokenSize: BigNumberish,
    _payTokens: string[],
    _prices: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  buyPreTHS(
    _payToken: string,
    _payAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  buyTotalOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  calculatePayout(
    _payToken: string,
    _payAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  currentTermId(overrides?: CallOverrides): Promise<BigNumber>;

  eachUserBuyPreThsMax(overrides?: CallOverrides): Promise<BigNumber>;

  experienceEndTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  getAllPayToken(
    _termId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, PayTokenPriceInfoStructOutput[]] & {
      resultSize_: BigNumber;
      payTokens_: PayTokenPriceInfoStructOutput[];
    }
  >;

  getCurrentMaxTerm(overrides?: CallOverrides): Promise<BigNumber>;

  getExperiencerByPage(
    _start: BigNumberish,
    _size: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string[]] & {
      resultSize_: BigNumber;
      experiencerList_: string[];
    }
  >;

  getTermInfoByPage(
    _start: BigNumberish,
    _size: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, TermInfoStructOutput[]] & {
      resultSize_: BigNumber;
      termInfoList_: TermInfoStructOutput[];
    }
  >;

  getUserBuyTotal(
    _buyer: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isExperiencer(_addr: string, overrides?: CallOverrides): Promise<boolean>;

  policy(overrides?: CallOverrides): Promise<string>;

  preTHS(overrides?: CallOverrides): Promise<string>;

  priceDec(overrides?: CallOverrides): Promise<BigNumber>;

  pullPolicy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pushPolicy(
    newPolicy_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeExperience(
    _experiencer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renouncePolicy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  salePreThsMax(overrides?: CallOverrides): Promise<BigNumber>;

  setCurrentTermEachUserBuyMax(
    _buyMax: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setCurrentTermEndTimestamp(
    _endTimestamp: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setEachUserBuyPreThsMax(
    _eachUserBuyPreThsMax: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setExperienceEndTimestamp(
    _endTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPrice(
    _termId: BigNumberish,
    _addrToken: string,
    _price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSalePreThsMax(
    _totalSaleMax: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTermSalePreThsMax(
    _termId: BigNumberish,
    _totalSaleMax: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  soldPreThsTotal(overrides?: CallOverrides): Promise<BigNumber>;

  switchTermTo(
    _termId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  termInfoOf(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      termId: BigNumber;
      saleAmountMax: BigNumber;
      eachUserBuyMax: BigNumber;
      soldAmount: BigNumber;
      startTimestamp: BigNumber;
      endTimestamp: BigNumber;
    }
  >;

  userBuyTotalOfTerm(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    addExperiencerBatch(
      _experiencers: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    addTerm(
      _saleMax: BigNumberish,
      _eachUserBuyMax: BigNumberish,
      _startTimestamp: BigNumberish,
      _termTimeLength: BigNumberish,
      _payTokenSize: BigNumberish,
      _payTokens: string[],
      _prices: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    buyPreTHS(
      _payToken: string,
      _payAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    buyTotalOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    calculatePayout(
      _payToken: string,
      _payAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentTermId(overrides?: CallOverrides): Promise<BigNumber>;

    eachUserBuyPreThsMax(overrides?: CallOverrides): Promise<BigNumber>;

    experienceEndTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    getAllPayToken(
      _termId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, PayTokenPriceInfoStructOutput[]] & {
        resultSize_: BigNumber;
        payTokens_: PayTokenPriceInfoStructOutput[];
      }
    >;

    getCurrentMaxTerm(overrides?: CallOverrides): Promise<BigNumber>;

    getExperiencerByPage(
      _start: BigNumberish,
      _size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string[]] & {
        resultSize_: BigNumber;
        experiencerList_: string[];
      }
    >;

    getTermInfoByPage(
      _start: BigNumberish,
      _size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, TermInfoStructOutput[]] & {
        resultSize_: BigNumber;
        termInfoList_: TermInfoStructOutput[];
      }
    >;

    getUserBuyTotal(
      _buyer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isExperiencer(_addr: string, overrides?: CallOverrides): Promise<boolean>;

    policy(overrides?: CallOverrides): Promise<string>;

    preTHS(overrides?: CallOverrides): Promise<string>;

    priceDec(overrides?: CallOverrides): Promise<BigNumber>;

    pullPolicy(overrides?: CallOverrides): Promise<void>;

    pushPolicy(newPolicy_: string, overrides?: CallOverrides): Promise<void>;

    removeExperience(
      _experiencer: string,
      overrides?: CallOverrides
    ): Promise<void>;

    renouncePolicy(overrides?: CallOverrides): Promise<void>;

    salePreThsMax(overrides?: CallOverrides): Promise<BigNumber>;

    setCurrentTermEachUserBuyMax(
      _buyMax: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setCurrentTermEndTimestamp(
      _endTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setEachUserBuyPreThsMax(
      _eachUserBuyPreThsMax: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setExperienceEndTimestamp(
      _endTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setPrice(
      _termId: BigNumberish,
      _addrToken: string,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setSalePreThsMax(
      _totalSaleMax: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setTermSalePreThsMax(
      _termId: BigNumberish,
      _totalSaleMax: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    soldPreThsTotal(overrides?: CallOverrides): Promise<BigNumber>;

    switchTermTo(
      _termId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    termInfoOf(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        termId: BigNumber;
        saleAmountMax: BigNumber;
        eachUserBuyMax: BigNumber;
        soldAmount: BigNumber;
        startTimestamp: BigNumber;
        endTimestamp: BigNumber;
      }
    >;

    userBuyTotalOfTerm(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "OwnershipPulled(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipPulledEventFilter;
    OwnershipPulled(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipPulledEventFilter;

    "OwnershipPushed(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipPushedEventFilter;
    OwnershipPushed(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipPushedEventFilter;

    "SetPrice(address,uint256,address,uint256,uint256)"(
      sender?: string | null,
      termId?: BigNumberish | null,
      payToken?: null,
      oldPrice?: null,
      newPrice?: null
    ): SetPriceEventFilter;
    SetPrice(
      sender?: string | null,
      termId?: BigNumberish | null,
      payToken?: null,
      oldPrice?: null,
      newPrice?: null
    ): SetPriceEventFilter;

    "SwitchTerm(address,uint256,uint256)"(
      sender?: string | null,
      oldTerm?: BigNumberish | null,
      newTerm?: BigNumberish | null
    ): SwitchTermEventFilter;
    SwitchTerm(
      sender?: string | null,
      oldTerm?: BigNumberish | null,
      newTerm?: BigNumberish | null
    ): SwitchTermEventFilter;
  };

  estimateGas: {
    addExperiencerBatch(
      _experiencers: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addTerm(
      _saleMax: BigNumberish,
      _eachUserBuyMax: BigNumberish,
      _startTimestamp: BigNumberish,
      _termTimeLength: BigNumberish,
      _payTokenSize: BigNumberish,
      _payTokens: string[],
      _prices: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    buyPreTHS(
      _payToken: string,
      _payAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    buyTotalOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    calculatePayout(
      _payToken: string,
      _payAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentTermId(overrides?: CallOverrides): Promise<BigNumber>;

    eachUserBuyPreThsMax(overrides?: CallOverrides): Promise<BigNumber>;

    experienceEndTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    getAllPayToken(
      _termId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCurrentMaxTerm(overrides?: CallOverrides): Promise<BigNumber>;

    getExperiencerByPage(
      _start: BigNumberish,
      _size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTermInfoByPage(
      _start: BigNumberish,
      _size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserBuyTotal(
      _buyer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isExperiencer(_addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    policy(overrides?: CallOverrides): Promise<BigNumber>;

    preTHS(overrides?: CallOverrides): Promise<BigNumber>;

    priceDec(overrides?: CallOverrides): Promise<BigNumber>;

    pullPolicy(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pushPolicy(
      newPolicy_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeExperience(
      _experiencer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renouncePolicy(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    salePreThsMax(overrides?: CallOverrides): Promise<BigNumber>;

    setCurrentTermEachUserBuyMax(
      _buyMax: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setCurrentTermEndTimestamp(
      _endTimestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setEachUserBuyPreThsMax(
      _eachUserBuyPreThsMax: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setExperienceEndTimestamp(
      _endTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPrice(
      _termId: BigNumberish,
      _addrToken: string,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSalePreThsMax(
      _totalSaleMax: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTermSalePreThsMax(
      _termId: BigNumberish,
      _totalSaleMax: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    soldPreThsTotal(overrides?: CallOverrides): Promise<BigNumber>;

    switchTermTo(
      _termId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    termInfoOf(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userBuyTotalOfTerm(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addExperiencerBatch(
      _experiencers: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addTerm(
      _saleMax: BigNumberish,
      _eachUserBuyMax: BigNumberish,
      _startTimestamp: BigNumberish,
      _termTimeLength: BigNumberish,
      _payTokenSize: BigNumberish,
      _payTokens: string[],
      _prices: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    buyPreTHS(
      _payToken: string,
      _payAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    buyTotalOf(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculatePayout(
      _payToken: string,
      _payAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentTermId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    eachUserBuyPreThsMax(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    experienceEndTimestamp(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllPayToken(
      _termId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCurrentMaxTerm(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getExperiencerByPage(
      _start: BigNumberish,
      _size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTermInfoByPage(
      _start: BigNumberish,
      _size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserBuyTotal(
      _buyer: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isExperiencer(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    policy(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    preTHS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceDec(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pullPolicy(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pushPolicy(
      newPolicy_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeExperience(
      _experiencer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renouncePolicy(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    salePreThsMax(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setCurrentTermEachUserBuyMax(
      _buyMax: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setCurrentTermEndTimestamp(
      _endTimestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setEachUserBuyPreThsMax(
      _eachUserBuyPreThsMax: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setExperienceEndTimestamp(
      _endTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPrice(
      _termId: BigNumberish,
      _addrToken: string,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSalePreThsMax(
      _totalSaleMax: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTermSalePreThsMax(
      _termId: BigNumberish,
      _totalSaleMax: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    soldPreThsTotal(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    switchTermTo(
      _termId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    termInfoOf(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    userBuyTotalOfTerm(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
