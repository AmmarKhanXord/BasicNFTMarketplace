/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ERC721 } from "../ERC721";

export class ERC721__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides
  ): Promise<ERC721> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): ERC721 {
    return super.attach(address) as ERC721;
  }
  connect(signer: Signer): ERC721__factory {
    return super.connect(signer) as ERC721__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721 {
    return new Contract(address, _abi, signerOrProvider) as ERC721;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001485380380620014858339810160408190526200003491620001c5565b81516200004990600090602085019062000068565b5080516200005f90600190602084019062000068565b50505062000282565b82805462000076906200022f565b90600052602060002090601f0160209004810192826200009a5760008555620000e5565b82601f10620000b557805160ff1916838001178555620000e5565b82800160010185558215620000e5579182015b82811115620000e5578251825591602001919060010190620000c8565b50620000f3929150620000f7565b5090565b5b80821115620000f35760008155600101620000f8565b600082601f8301126200012057600080fd5b81516001600160401b03808211156200013d576200013d6200026c565b604051601f8301601f19908116603f011681019082821181831017156200016857620001686200026c565b816040528381526020925086838588010111156200018557600080fd5b600091505b83821015620001a957858201830151818301840152908201906200018a565b83821115620001bb5760008385830101525b9695505050505050565b60008060408385031215620001d957600080fd5b82516001600160401b0380821115620001f157600080fd5b620001ff868387016200010e565b935060208501519150808211156200021657600080fd5b5062000225858286016200010e565b9150509250929050565b600181811c908216806200024457607f821691505b602082108114156200026657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6111f380620002926000396000f3fe608060405234801561001057600080fd5b50600436106100af5760003560e01c806301ffc9a7146100b457806306fdde03146100dc578063081812fc146100f1578063095ea7b31461011c57806323b872dd1461013157806342842e0e146101445780636352211e1461015757806370a082311461016a57806395d89b411461018b578063a22cb46514610193578063b88d4fde146101a6578063c87b56dd146101b9578063e985e9c5146101cc575b600080fd5b6100c76100c2366004610ed2565b6101df565b60405190151581526020015b60405180910390f35b6100e4610231565b6040516100d39190610fbd565b6101046100ff366004610f0c565b6102c3565b6040516001600160a01b0390911681526020016100d3565b61012f61012a366004610ea8565b610350565b005b61012f61013f366004610d55565b610461565b61012f610152366004610d55565b610492565b610104610165366004610f0c565b6104ad565b61017d610178366004610d07565b610524565b6040519081526020016100d3565b6100e46105ab565b61012f6101a1366004610e6c565b6105ba565b61012f6101b4366004610d91565b61067b565b6100e46101c7366004610f0c565b6106b3565b6100c76101da366004610d22565b61078b565b60006001600160e01b031982166380ac58cd60e01b148061021057506001600160e01b03198216635b5e139f60e01b145b8061022b57506301ffc9a760e01b6001600160e01b03198316145b92915050565b606060008054610240906110e2565b80601f016020809104026020016040519081016040528092919081815260200182805461026c906110e2565b80156102b95780601f1061028e576101008083540402835291602001916102b9565b820191906000526020600020905b81548152906001019060200180831161029c57829003601f168201915b5050505050905090565b60006102ce826107b9565b6103345760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061035b826104ad565b9050806001600160a01b0316836001600160a01b031614156103c95760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b606482015260840161032b565b336001600160a01b03821614806103e557506103e5813361078b565b6104525760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776044820152771b995c881b9bdc88185c1c1c9bdd995908199bdc88185b1b60421b606482015260840161032b565b61045c83836107d6565b505050565b61046b3382610844565b6104875760405162461bcd60e51b815260040161032b90611022565b61045c83838361090e565b61045c8383836040518060200160405280600081525061067b565b6000818152600260205260408120546001600160a01b03168061022b5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b606482015260840161032b565b60006001600160a01b03821661058f5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b606482015260840161032b565b506001600160a01b031660009081526003602052604090205490565b606060018054610240906110e2565b6001600160a01b03821633141561060f5760405162461bcd60e51b815260206004820152601960248201527822a9219b99189d1030b8383937bb32903a379031b0b63632b960391b604482015260640161032b565b3360008181526005602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6106853383610844565b6106a15760405162461bcd60e51b815260040161032b90611022565b6106ad84848484610aae565b50505050565b60606106be826107b9565b6107225760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b606482015260840161032b565b600061073960408051602081019091526000815290565b905060008151116107595760405180602001604052806000815250610784565b8061076384610ae1565b604051602001610774929190610f51565b6040516020818303038152906040525b9392505050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6000908152600260205260409020546001600160a01b0316151590565b600081815260046020526040902080546001600160a01b0319166001600160a01b038416908117909155819061080b826104ad565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600061084f826107b9565b6108b05760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b606482015260840161032b565b60006108bb836104ad565b9050806001600160a01b0316846001600160a01b031614806108f65750836001600160a01b03166108eb846102c3565b6001600160a01b0316145b806109065750610906818561078b565b949350505050565b826001600160a01b0316610921826104ad565b6001600160a01b0316146109895760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b606482015260840161032b565b6001600160a01b0382166109eb5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161032b565b6109f66000826107d6565b6001600160a01b0383166000908152600360205260408120805460019290610a1f90849061109f565b90915550506001600160a01b0382166000908152600360205260408120805460019290610a4d908490611073565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b610ab984848461090e565b610ac584848484610bde565b6106ad5760405162461bcd60e51b815260040161032b90610fd0565b606081610b055750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610b2f5780610b198161111d565b9150610b289050600a8361108b565b9150610b09565b6000816001600160401b03811115610b4957610b4961118e565b6040519080825280601f01601f191660200182016040528015610b73576020820181803683370190505b5090505b841561090657610b8860018361109f565b9150610b95600a86611138565b610ba0906030611073565b60f81b818381518110610bb557610bb5611178565b60200101906001600160f81b031916908160001a905350610bd7600a8661108b565b9450610b77565b60006001600160a01b0384163b15610ce057604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610c22903390899088908890600401610f80565b602060405180830381600087803b158015610c3c57600080fd5b505af1925050508015610c6c575060408051601f3d908101601f19168201909252610c6991810190610eef565b60015b610cc6573d808015610c9a576040519150601f19603f3d011682016040523d82523d6000602084013e610c9f565b606091505b508051610cbe5760405162461bcd60e51b815260040161032b90610fd0565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610906565b506001949350505050565b80356001600160a01b0381168114610d0257600080fd5b919050565b600060208284031215610d1957600080fd5b61078482610ceb565b60008060408385031215610d3557600080fd5b610d3e83610ceb565b9150610d4c60208401610ceb565b90509250929050565b600080600060608486031215610d6a57600080fd5b610d7384610ceb565b9250610d8160208501610ceb565b9150604084013590509250925092565b60008060008060808587031215610da757600080fd5b610db085610ceb565b9350610dbe60208601610ceb565b92506040850135915060608501356001600160401b0380821115610de157600080fd5b818701915087601f830112610df557600080fd5b813581811115610e0757610e0761118e565b604051601f8201601f19908116603f01168101908382118183101715610e2f57610e2f61118e565b816040528281528a6020848701011115610e4857600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008060408385031215610e7f57600080fd5b610e8883610ceb565b915060208301358015158114610e9d57600080fd5b809150509250929050565b60008060408385031215610ebb57600080fd5b610ec483610ceb565b946020939093013593505050565b600060208284031215610ee457600080fd5b8135610784816111a4565b600060208284031215610f0157600080fd5b8151610784816111a4565b600060208284031215610f1e57600080fd5b5035919050565b60008151808452610f3d8160208601602086016110b6565b601f01601f19169290920160200192915050565b60008351610f638184602088016110b6565b835190830190610f778183602088016110b6565b01949350505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090610fb390830184610f25565b9695505050505050565b6020815260006107846020830184610f25565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b600082198211156110865761108661114c565b500190565b60008261109a5761109a611162565b500490565b6000828210156110b1576110b161114c565b500390565b60005b838110156110d15781810151838201526020016110b9565b838111156106ad5750506000910152565b600181811c908216806110f657607f821691505b6020821081141561111757634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156111315761113161114c565b5060010190565b60008261114757611147611162565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b0319811681146111ba57600080fd5b5056fea2646970667358221220019d8cdf9f087d2d73ccd921c7a04660c2d59ee962a5b8f26b6a70176c8ee6cd64736f6c63430008070033";
