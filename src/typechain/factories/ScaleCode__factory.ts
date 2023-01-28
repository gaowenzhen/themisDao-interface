/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ScaleCode, ScaleCodeInterface } from "../ScaleCode";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "farmForInvter",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "farmForStaker",
        type: "address",
      },
    ],
    name: "ChangeContract",
    type: "event",
  },
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_farmForInvter",
        type: "address",
      },
      {
        internalType: "address",
        name: "_farmForStaker",
        type: "address",
      },
    ],
    name: "changeContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
    inputs: [],
    name: "farmForInvter",
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
    name: "farmForStaker",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
        internalType: "address",
        name: "_farmForInvter",
        type: "address",
      },
      {
        internalType: "address",
        name: "_farmForStaker",
        type: "address",
      },
    ],
    name: "initliaze",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initliazeFlag",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
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
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526040518060400160405280601081526020017f5363616c6520436f646520546f6b656e000000000000000000000000000000008152506003908051906020019062000051929190620001bc565b506040518060400160405280600281526020017f5343000000000000000000000000000000000000000000000000000000000000815250600490805190602001906200009f929190620001bc565b506012600560006101000a81548160ff021916908360ff160217905550348015620000c957600080fd5b50620000ea620000de620000f060201b60201c565b620000f860201b60201c565b620002d1565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b828054620001ca906200026c565b90600052602060002090601f016020900481019282620001ee57600085556200023a565b82601f106200020957805160ff19168380011785556200023a565b828001600101855582156200023a579182015b82811115620002395782518255916020019190600101906200021c565b5b5090506200024991906200024d565b5090565b5b80821115620002685760008160009055506001016200024e565b5090565b600060028204905060018216806200028557607f821691505b602082108114156200029c576200029b620002a2565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b61234e80620002e16000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c806370a08231116100b857806395d89b411161007c57806395d89b41146103515780639e21dc371461036f578063a457c2d71461038d578063a9059cbb146103bd578063dd62ed3e146103ed578063f2fde38b1461041d57610142565b806370a08231146102bf578063715018a6146102ef57806379cc6790146102f957806383bd5161146103155780638da5cb5b1461033357610142565b8063395093511161010a578063395093511461020157806340c10f191461023157806342966c681461024d57806345e8c5d414610269578063482f0d1e146102855780636f6f696c146102a357610142565b806306fdde0314610147578063095ea7b31461016557806318160ddd1461019557806323b872dd146101b3578063313ce567146101e3575b600080fd5b61014f610439565b60405161015c9190611c4a565b60405180910390f35b61017f600480360381019061017a91906119b9565b6104cb565b60405161018c9190611c2f565b60405180910390f35b61019d6104e9565b6040516101aa9190611dcc565b60405180910390f35b6101cd60048036038101906101c8919061196a565b6104f3565b6040516101da9190611c2f565b60405180910390f35b6101eb6105cc565b6040516101f89190611de7565b60405180910390f35b61021b600480360381019061021691906119b9565b6105e3565b6040516102289190611c2f565b60405180910390f35b61024b600480360381019061024691906119b9565b61069b565b005b610267600480360381019061026291906119f5565b610791565b005b610283600480360381019061027e919061192e565b6107a5565b005b61028d610918565b60405161029a9190611c14565b60405180910390f35b6102bd60048036038101906102b8919061192e565b61093e565b005b6102d960048036038101906102d49190611905565b610a90565b6040516102e69190611dcc565b60405180910390f35b6102f7610ad9565b005b610313600480360381019061030e91906119b9565b610b61565b005b61031d610c30565b60405161032a9190611c2f565b60405180910390f35b61033b610c43565b6040516103489190611c14565b60405180910390f35b610359610c6c565b6040516103669190611c4a565b60405180910390f35b610377610cfe565b6040516103849190611c14565b60405180910390f35b6103a760048036038101906103a291906119b9565b610d24565b6040516103b49190611c2f565b60405180910390f35b6103d760048036038101906103d291906119b9565b610ddc565b6040516103e49190611c2f565b60405180910390f35b6104076004803603810190610402919061192e565b610dfa565b6040516104149190611dcc565b60405180910390f35b61043760048036038101906104329190611905565b610e81565b005b60606003805461044890611f30565b80601f016020809104026020016040519081016040528092919081815260200182805461047490611f30565b80156104c15780601f10610496576101008083540402835291602001916104c1565b820191906000526020600020905b8154815290600101906020018083116104a457829003601f168201915b5050505050905090565b60006104df6104d8610f79565b8484610f81565b6001905092915050565b6000600654905090565b600061050084848461114c565b6105c18461050c610f79565b6105bc856040518060600160405280602881526020016122cd60289139600260008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000610572610f79565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546114599092919063ffffffff16565b610f81565b600190509392505050565b6000600560009054906101000a900460ff16905090565b600080600260006105f2610f79565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050610690610677610f79565b8561068b86856114ae90919063ffffffff16565b610f81565b600191505092915050565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806107445750600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b610783576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077a90611dac565b60405180910390fd5b61078d82826114c4565b5050565b6107a261079c610f79565b82611660565b50565b6107ad610f79565b73ffffffffffffffffffffffffffffffffffffffff166107cb610c43565b73ffffffffffffffffffffffffffffffffffffffff1614610821576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081890611d0c565b60405180910390fd5b81600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f366e4cbd1071b174f108806ce0ebf6d5b505e37a8b6d19dc3f54f92719a1278260405160405180910390a45050565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610946610f79565b73ffffffffffffffffffffffffffffffffffffffff16610964610c43565b73ffffffffffffffffffffffffffffffffffffffff16146109ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109b190611d0c565b60405180910390fd5b600860149054906101000a900460ff1615610a0a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a0190611cec565b60405180910390fd5b81600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610ae1610f79565b73ffffffffffffffffffffffffffffffffffffffff16610aff610c43565b73ffffffffffffffffffffffffffffffffffffffff1614610b55576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b4c90611d0c565b60405180910390fd5b610b5f60006117fc565b565b610b6b8282611660565b610c2c82610b77610f79565b610c27846040518060600160405280602481526020016122f560249139600260008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000610bdd610f79565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546114599092919063ffffffff16565b610f81565b5050565b600860149054906101000a900460ff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060048054610c7b90611f30565b80601f0160208091040260200160405190810160405280929190818152602001828054610ca790611f30565b8015610cf45780601f10610cc957610100808354040283529160200191610cf4565b820191906000526020600020905b815481529060010190602001808311610cd757829003601f168201915b5050505050905090565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060026000610d33610f79565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050610dd1610db8610f79565b85610dcc86856118c090919063ffffffff16565b610f81565b600191505092915050565b6000610df0610de9610f79565b848461114c565b6001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610e89610f79565b73ffffffffffffffffffffffffffffffffffffffff16610ea7610c43565b73ffffffffffffffffffffffffffffffffffffffff1614610efd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ef490611d0c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610f6d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f6490611c8c565b60405180910390fd5b610f76816117fc565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610ff1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fe890611d6c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611061576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161105890611cac565b60405180910390fd5b80600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161113f9190611dcc565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156111bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111b390611d4c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561122c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161122390611c6c565b60405180910390fd5b6112378383836118d6565b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156112b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112b090611ccc565b60405180910390fd5b6000600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905061131082826118c090919063ffffffff16565b600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506113aa83826114ae90919063ffffffff16565b600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8560405161144a9190611dcc565b60405180910390a35050505050565b60008383111582906114a1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114989190611c4a565b60405180910390fd5b5082840390509392505050565b600081836114bc9190611e1e565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611534576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161152b90611d8c565b60405180910390fd5b611540600083836118d6565b611555816006546114ae90919063ffffffff16565b6006819055506000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506115b282826114ae90919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516116539190611dcc565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156116d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116c790611d2c565b60405180910390fd5b6116dc826000836118d6565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905061173382826118c090919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061178b826006546118c090919063ffffffff16565b600681905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516117ef9190611dcc565b60405180910390a3505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081836118ce9190611e74565b905092915050565b505050565b6000813590506118ea8161229e565b92915050565b6000813590506118ff816122b5565b92915050565b60006020828403121561191757600080fd5b6000611925848285016118db565b91505092915050565b6000806040838503121561194157600080fd5b600061194f858286016118db565b9250506020611960858286016118db565b9150509250929050565b60008060006060848603121561197f57600080fd5b600061198d868287016118db565b935050602061199e868287016118db565b92505060406119af868287016118f0565b9150509250925092565b600080604083850312156119cc57600080fd5b60006119da858286016118db565b92505060206119eb858286016118f0565b9150509250929050565b600060208284031215611a0757600080fd5b6000611a15848285016118f0565b91505092915050565b611a2781611ea8565b82525050565b611a3681611eba565b82525050565b6000611a4782611e02565b611a518185611e0d565b9350611a61818560208601611efd565b611a6a81611fc0565b840191505092915050565b6000611a82602383611e0d565b9150611a8d82611fd1565b604082019050919050565b6000611aa5602683611e0d565b9150611ab082612020565b604082019050919050565b6000611ac8602283611e0d565b9150611ad38261206f565b604082019050919050565b6000611aeb602683611e0d565b9150611af6826120be565b604082019050919050565b6000611b0e600c83611e0d565b9150611b198261210d565b602082019050919050565b6000611b31602083611e0d565b9150611b3c82612136565b602082019050919050565b6000611b54602183611e0d565b9150611b5f8261215f565b604082019050919050565b6000611b77602583611e0d565b9150611b82826121ae565b604082019050919050565b6000611b9a602483611e0d565b9150611ba5826121fd565b604082019050919050565b6000611bbd601f83611e0d565b9150611bc88261224c565b602082019050919050565b6000611be0600983611e0d565b9150611beb82612275565b602082019050919050565b611bff81611ee6565b82525050565b611c0e81611ef0565b82525050565b6000602082019050611c296000830184611a1e565b92915050565b6000602082019050611c446000830184611a2d565b92915050565b60006020820190508181036000830152611c648184611a3c565b905092915050565b60006020820190508181036000830152611c8581611a75565b9050919050565b60006020820190508181036000830152611ca581611a98565b9050919050565b60006020820190508181036000830152611cc581611abb565b9050919050565b60006020820190508181036000830152611ce581611ade565b9050919050565b60006020820190508181036000830152611d0581611b01565b9050919050565b60006020820190508181036000830152611d2581611b24565b9050919050565b60006020820190508181036000830152611d4581611b47565b9050919050565b60006020820190508181036000830152611d6581611b6a565b9050919050565b60006020820190508181036000830152611d8581611b8d565b9050919050565b60006020820190508181036000830152611da581611bb0565b9050919050565b60006020820190508181036000830152611dc581611bd3565b9050919050565b6000602082019050611de16000830184611bf6565b92915050565b6000602082019050611dfc6000830184611c05565b92915050565b600081519050919050565b600082825260208201905092915050565b6000611e2982611ee6565b9150611e3483611ee6565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611e6957611e68611f62565b5b828201905092915050565b6000611e7f82611ee6565b9150611e8a83611ee6565b925082821015611e9d57611e9c611f62565b5b828203905092915050565b6000611eb382611ec6565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015611f1b578082015181840152602081019050611f00565b83811115611f2a576000848401525b50505050565b60006002820490506001821680611f4857607f821691505b60208210811415611f5c57611f5b611f91565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f616c726561647920696e69740000000000000000000000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b7f6f6e6c79206661726d0000000000000000000000000000000000000000000000600082015250565b6122a781611ea8565b81146122b257600080fd5b50565b6122be81611ee6565b81146122c957600080fd5b5056fe45524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636542455032303a206275726e20616d6f756e74206578636565647320616c6c6f77616e6365a26469706673582212207a63ab96f4dbe9e47a6393e4c25d7bdd968a9ab6a1d4d434213041da3f341a9964736f6c63430008020033";

type ScaleCodeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ScaleCodeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ScaleCode__factory extends ContractFactory {
  constructor(...args: ScaleCodeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ScaleCode> {
    return super.deploy(overrides || {}) as Promise<ScaleCode>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ScaleCode {
    return super.attach(address) as ScaleCode;
  }
  connect(signer: Signer): ScaleCode__factory {
    return super.connect(signer) as ScaleCode__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ScaleCodeInterface {
    return new utils.Interface(_abi) as ScaleCodeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ScaleCode {
    return new Contract(address, _abi, signerOrProvider) as ScaleCode;
  }
}
