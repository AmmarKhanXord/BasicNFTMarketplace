/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ProxyTest } from "../ProxyTest";

export class ProxyTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ProxyTest> {
    return super.deploy(overrides || {}) as Promise<ProxyTest>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ProxyTest {
    return super.attach(address) as ProxyTest;
  }
  connect(signer: Signer): ProxyTest__factory {
    return super.connect(signer) as ProxyTest__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProxyTest {
    return new Contract(address, _abi, signerOrProvider) as ProxyTest;
  }
}

const _abi = [
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newDelegateAddress",
        type: "address",
      },
    ],
    name: "upgradeDelegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600180546001600160a01b0319163317905534801561002257600080fd5b5060f8806100316000396000f3fe608060405260043610601c5760003560e01c80632da4e75c14603f575b600080543682833781823684845af490503d82833e808015603b573d83f35b8283fd5b348015604a57600080fd5b50605a60563660046094565b605c565b005b6001546001600160a01b03163314607257600080fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b60006020828403121560a557600080fd5b81356001600160a01b038116811460bb57600080fd5b939250505056fea264697066735822122042f568a88df50524cda44c86b6fb24935ef55ad8ab0005dc522c909e6d82d43764736f6c63430008070033";