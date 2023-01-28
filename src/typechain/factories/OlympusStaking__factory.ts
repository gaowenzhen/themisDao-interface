/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  OlympusStaking,
  OlympusStakingInterface,
} from "../OlympusStaking";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "epochLengthInBlocks",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "ohmTokenAddress_",
        type: "address",
      },
      {
        internalType: "address",
        name: "sOHM_",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "epochLengthInBlocks_",
        type: "uint8",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "ohm",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ohmToDistributeNextEpoch",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "sTHS",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newEpochLengthInBlocks_",
        type: "uint256",
      },
    ],
    name: "setEpochLengthintBlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountToStake_",
        type: "uint256",
      },
    ],
    name: "stakeOHM",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountToStake_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline_",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v_",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r_",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s_",
        type: "bytes32",
      },
    ],
    name: "stakeOHMWithPermit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner_",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountToWithdraw_",
        type: "uint256",
      },
    ],
    name: "unstakeOHM",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountToWithdraw_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline_",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v_",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r_",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s_",
        type: "bytes32",
      },
    ],
    name: "unstakeOHMWithPermit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36119f8806100db6000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c80638017aba8116100a2578063c1773f8411610071578063c1773f8414610392578063f2fde38b146103c6578063f4b9fa751461040a578063f8c8765e1461043e578063fbfa77cf146104e25761010b565b80638017aba8146102c7578063813e4bb8146102d15780638da5cb5b1461032a578063b301fc7a1461035e5761010b565b80635b902063116100de5780635b902063146102015780635dbfbe35146102455780636817031b14610263578063715018a6146102bd5761010b565b8063310fc5e71461011057806339e302a0146101445780633e9cbcdb1461018857806351496bbd146101e1575b600080fd5b610118610516565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101706004803603602081101561015a57600080fd5b810190808035906020019092919050505061053c565b60405180821515815260200191505060405180910390f35b6101df600480360360a081101561019e57600080fd5b810190808035906020019092919080359060200190929190803560ff1690602001909291908035906020019092919080359060200190929190505050610550565b005b6101e9610775565b60405180821515815260200191505060405180910390f35b61022d6004803603602081101561021757600080fd5b81019080803590602001909291905050506108a7565b60405180821515815260200191505060405180910390f35b61024d6108bb565b6040518082815260200191505060405180910390f35b6102a56004803603602081101561027957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506108c1565b60405180821515815260200191505060405180910390f35b6102c56109ce565b005b6102cf610b4d565b005b610328600480360360a08110156102e757600080fd5b810190808035906020019092919080359060200190929190803560ff1690602001909291908035906020019092919080359060200190929190505050610e32565b005b610332610f37565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610366610f60565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61039a610f86565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610408600480360360208110156103dc57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610fac565b005b6104126111b0565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6104e06004803603608081101561045457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506111d6565b005b6104ea6113d5565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000610547826113ff565b60019050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d505accf333088888888886040518863ffffffff1660e01b8152600401808873ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1681526020018681526020018581526020018460ff168152602001838152602001828152602001975050505050505050600060405180830381600087803b15801561062457600080fd5b505af1158015610638573d6000803e3d6000fd5b50505050600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639c104d94600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff16815260200192505050602060405180830381600087803b15801561072957600080fd5b505af115801561073d573d6000803e3d6000fd5b505050506040513d602081101561075357600080fd5b81019080805190602001909291905050505061076e856113ff565b5050505050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639c104d94600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff16815260200192505050602060405180830381600087803b15801561086457600080fd5b505af1158015610878573d6000803e3d6000fd5b505050506040513d602081101561088e57600080fd5b8101908080519060200190929190505050506001905090565b60006108b2826116a0565b60019050919050565b60065481565b60003373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610984576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b81600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060019050919050565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610a8f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b3373ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610bf3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806119a06023913960400191505060405180910390fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bc4f2d6d6006546040518263ffffffff1660e01b815260040180828152602001915050602060405180830381600087803b158015610c6a57600080fd5b505af1158015610c7e573d6000803e3d6000fd5b505050506040513d6020811015610c9457600080fd5b8101908080519060200190929190505050506000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610d3157600080fd5b505afa158015610d45573d6000803e3d6000fd5b505050506040513d6020811015610d5b57600080fd5b810190808051906020019092919050505090506000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639358928b6040518163ffffffff1660e01b815260040160206040518083038186803b158015610dd857600080fd5b505afa158015610dec573d6000803e3d6000fd5b505050506040513d6020811015610e0257600080fd5b81019080805190602001909291905050509050610e28818361186f90919063ffffffff16565b6006819055505050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d505accf333088888888886040518863ffffffff1660e01b8152600401808873ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1681526020018681526020018581526020018460ff168152602001838152602001828152602001975050505050505050600060405180830381600087803b158015610f0657600080fd5b505af1158015610f1a573d6000803e3d6000fd5b50505050610f26610775565b50610f30856116a0565b5050505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461106d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156110f3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061197a6026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611297576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600160149054906101000a900460ff16156112b157600080fd5b83600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018060146101000a81548160ff02191690831515021790555050505050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b1580156114b057600080fd5b505af11580156114c4573d6000803e3d6000fd5b505050506040513d60208110156114da57600080fd5b810190808051906020019092919050505061155d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f4e6f7420656e6f756768207374616b650000000000000000000000000000000081525060200191505060405180910390fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156115f057600080fd5b505af1158015611604573d6000803e3d6000fd5b505050506040513d602081101561161a57600080fd5b810190808051906020019092919050505061169d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f436c61696d204661696c6564000000000000000000000000000000000000000081525060200191505060405180910390fd5b50565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b15801561175157600080fd5b505af1158015611765573d6000803e3d6000fd5b505050506040513d602081101561177b57600080fd5b810190808051906020019092919050505061179557600080fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561182857600080fd5b505af115801561183c573d6000803e3d6000fd5b505050506040513d602081101561185257600080fd5b810190808051906020019092919050505061186c57600080fd5b50565b60006118b183836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506118b9565b905092915050565b6000838311158290611966576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561192b578082015181840152602081019050611910565b50505050905090810190601f1680156119585780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838503905080915050939250505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573735661756c744f776e65643a2063616c6c6572206973206e6f7420746865205661756c74a2646970667358221220c4178475bc3b442c5aa99e6008423adb3033eb5912ccb28acc749eef907fce5464736f6c63430007050033";

type OlympusStakingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OlympusStakingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OlympusStaking__factory extends ContractFactory {
  constructor(...args: OlympusStakingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OlympusStaking> {
    return super.deploy(overrides || {}) as Promise<OlympusStaking>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): OlympusStaking {
    return super.attach(address) as OlympusStaking;
  }
  connect(signer: Signer): OlympusStaking__factory {
    return super.connect(signer) as OlympusStaking__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OlympusStakingInterface {
    return new utils.Interface(_abi) as OlympusStakingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OlympusStaking {
    return new Contract(address, _abi, signerOrProvider) as OlympusStaking;
  }
}
