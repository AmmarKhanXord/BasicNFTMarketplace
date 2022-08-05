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

interface FacetAInterface extends ethers.utils.Interface {
  functions: {
    "getValue()": FunctionFragment;
    "setValue(string)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "getValue", values?: undefined): string;
  encodeFunctionData(functionFragment: "setValue", values: [string]): string;

  decodeFunctionResult(functionFragment: "getValue", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setValue", data: BytesLike): Result;

  events: {};
}

export class FacetA extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: FacetAInterface;

  functions: {
    getValue(overrides?: CallOverrides): Promise<[string]>;

    "getValue()"(overrides?: CallOverrides): Promise<[string]>;

    setValue(_val: string, overrides?: Overrides): Promise<ContractTransaction>;

    "setValue(string)"(
      _val: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  getValue(overrides?: CallOverrides): Promise<string>;

  "getValue()"(overrides?: CallOverrides): Promise<string>;

  setValue(_val: string, overrides?: Overrides): Promise<ContractTransaction>;

  "setValue(string)"(
    _val: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    getValue(overrides?: CallOverrides): Promise<string>;

    "getValue()"(overrides?: CallOverrides): Promise<string>;

    setValue(_val: string, overrides?: CallOverrides): Promise<void>;

    "setValue(string)"(_val: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getValue(overrides?: CallOverrides): Promise<BigNumber>;

    "getValue()"(overrides?: CallOverrides): Promise<BigNumber>;

    setValue(_val: string, overrides?: Overrides): Promise<BigNumber>;

    "setValue(string)"(_val: string, overrides?: Overrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getValue(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getValue()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setValue(
      _val: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setValue(string)"(
      _val: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
