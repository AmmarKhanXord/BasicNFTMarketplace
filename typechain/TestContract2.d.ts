/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface TestContract2Interface extends ethers.utils.Interface {
  functions: {
    "getValue2()": FunctionFragment;
    "setValue2(string)": FunctionFragment;
    "val2()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "getValue2", values?: undefined): string;
  encodeFunctionData(functionFragment: "setValue2", values: [string]): string;
  encodeFunctionData(functionFragment: "val2", values?: undefined): string;

  decodeFunctionResult(functionFragment: "getValue2", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setValue2", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "val2", data: BytesLike): Result;

  events: {};
}

export class TestContract2 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TestContract2Interface;

  functions: {
    getValue2(overrides?: CallOverrides): Promise<[string]>;

    "getValue2()"(overrides?: CallOverrides): Promise<[string]>;

    setValue2(
      _val2: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setValue2(string)"(
      _val2: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    val2(overrides?: CallOverrides): Promise<[string]>;

    "val2()"(overrides?: CallOverrides): Promise<[string]>;
  };

  getValue2(overrides?: CallOverrides): Promise<string>;

  "getValue2()"(overrides?: CallOverrides): Promise<string>;

  setValue2(_val2: string, overrides?: Overrides): Promise<ContractTransaction>;

  "setValue2(string)"(
    _val2: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  val2(overrides?: CallOverrides): Promise<string>;

  "val2()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    getValue2(overrides?: CallOverrides): Promise<string>;

    "getValue2()"(overrides?: CallOverrides): Promise<string>;

    setValue2(_val2: string, overrides?: CallOverrides): Promise<void>;

    "setValue2(string)"(
      _val2: string,
      overrides?: CallOverrides
    ): Promise<void>;

    val2(overrides?: CallOverrides): Promise<string>;

    "val2()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    getValue2(overrides?: CallOverrides): Promise<BigNumber>;

    "getValue2()"(overrides?: CallOverrides): Promise<BigNumber>;

    setValue2(_val2: string, overrides?: Overrides): Promise<BigNumber>;

    "setValue2(string)"(
      _val2: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    val2(overrides?: CallOverrides): Promise<BigNumber>;

    "val2()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getValue2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getValue2()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setValue2(
      _val2: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setValue2(string)"(
      _val2: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    val2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "val2()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
