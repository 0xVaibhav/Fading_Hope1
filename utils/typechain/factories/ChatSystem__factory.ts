/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ChatSystem, ChatSystemInterface } from "../ChatSystem";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "GlobalMessageEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "PinGlobalMessageEvent",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "PinGlobalMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "SendGlobalMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    name: "ViewLastPinnedMessage",
    outputs: [
      {
        internalType: "string[]",
        name: "messages",
        type: "string[]",
      },
      {
        internalType: "uint256[]",
        name: "timestamps",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLength",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "pinMessages",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "pinTimestamps",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610d49806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80631069eb2e146100675780634daf890c146100985780635a9b74a2146100c8578063668da47e146100e4578063be1c766b14610100578063c0a6eb3d1461011e575b600080fd5b610081600480360381019061007c91906107c0565b61014e565b60405161008f9291906109a5565b60405180910390f35b6100b260048036038101906100ad91906107c0565b610418565b6040516100bf9190610a22565b60405180910390f35b6100e260048036038101906100dd919061073a565b61043c565b005b6100fe60048036038101906100f9919061077f565b610479565b005b610108610518565b6040516101159190610a22565b60405180910390f35b610138600480360381019061013391906107c0565b610524565b6040516101459190610a00565b60405180910390f35b6060808267ffffffffffffffff811115610191577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156101c457816020015b60608152602001906001900390816101af5790505b5091508267ffffffffffffffff811115610207577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156102355781602001602082028036833780820191505090505b50905060008383516102479190610b32565b905060005b8351821015610411576000828154811061028f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200180546102a490610bb2565b80601f01602080910402602001604051908101604052809291908181526020018280546102d090610bb2565b801561031d5780601f106102f25761010080835404028352916020019161031d565b820191906000526020600020905b81548152906001019060200180831161030057829003601f168201915b505050505084828151811061035b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010181905250600182815481106103a0577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001548382815181106103e4577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101818152505080806103fb90610c15565b915050818061040990610c15565b92505061024c565b5050915091565b6001818154811061042857600080fd5b906000526020600020016000915090505481565b7ff419b786d98b9272bc769f7e5437c247072be1ccc66f7e4be74dec87874632cd828260405161046d9291906109dc565b60405180910390a15050565b6000819080600181540180825580915050600190039060005260206000200160009091909190915090805190602001906104b49291906105d0565b5060014290806001815401808255809150506001900390600052602060002001600090919091909150557fd25cfcf1df45c6b69e723c4444d28d651b8a002c38172ef9bb9b8f97eb2e95dc8160405161050d9190610a00565b60405180910390a150565b60008080549050905090565b6000818154811061053457600080fd5b90600052602060002001600091509050805461054f90610bb2565b80601f016020809104026020016040519081016040528092919081815260200182805461057b90610bb2565b80156105c85780601f1061059d576101008083540402835291602001916105c8565b820191906000526020600020905b8154815290600101906020018083116105ab57829003601f168201915b505050505081565b8280546105dc90610bb2565b90600052602060002090601f0160209004810192826105fe5760008555610645565b82601f1061061757805160ff1916838001178555610645565b82800160010185558215610645579182015b82811115610644578251825591602001919060010190610629565b5b5090506106529190610656565b5090565b5b8082111561066f576000816000905550600101610657565b5090565b600061068661068184610a62565b610a3d565b90508281526020810184848401111561069e57600080fd5b6106a9848285610b70565b509392505050565b60008083601f8401126106c357600080fd5b8235905067ffffffffffffffff8111156106dc57600080fd5b6020830191508360018202830111156106f457600080fd5b9250929050565b600082601f83011261070c57600080fd5b813561071c848260208601610673565b91505092915050565b60008135905061073481610cfc565b92915050565b6000806020838503121561074d57600080fd5b600083013567ffffffffffffffff81111561076757600080fd5b610773858286016106b1565b92509250509250929050565b60006020828403121561079157600080fd5b600082013567ffffffffffffffff8111156107ab57600080fd5b6107b7848285016106fb565b91505092915050565b6000602082840312156107d257600080fd5b60006107e084828501610725565b91505092915050565b60006107f58383610915565b905092915050565b60006108098383610987565b60208301905092915050565b600061082082610ab3565b61082a8185610aee565b93508360208202850161083c85610a93565b8060005b85811015610878578484038952815161085985826107e9565b945061086483610ad4565b925060208a01995050600181019050610840565b50829750879550505050505092915050565b600061089582610abe565b61089f8185610aff565b93506108aa83610aa3565b8060005b838110156108db5781516108c288826107fd565b97506108cd83610ae1565b9250506001810190506108ae565b5085935050505092915050565b60006108f48385610b21565b9350610901838584610b70565b61090a83610ceb565b840190509392505050565b600061092082610ac9565b61092a8185610b10565b935061093a818560208601610b7f565b61094381610ceb565b840191505092915050565b600061095982610ac9565b6109638185610b21565b9350610973818560208601610b7f565b61097c81610ceb565b840191505092915050565b61099081610b66565b82525050565b61099f81610b66565b82525050565b600060408201905081810360008301526109bf8185610815565b905081810360208301526109d3818461088a565b90509392505050565b600060208201905081810360008301526109f78184866108e8565b90509392505050565b60006020820190508181036000830152610a1a818461094e565b905092915050565b6000602082019050610a376000830184610996565b92915050565b6000610a47610a58565b9050610a538282610be4565b919050565b6000604051905090565b600067ffffffffffffffff821115610a7d57610a7c610cbc565b5b610a8682610ceb565b9050602081019050919050565b6000819050602082019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610b3d82610b66565b9150610b4883610b66565b925082821015610b5b57610b5a610c5e565b5b828203905092915050565b6000819050919050565b82818337600083830152505050565b60005b83811015610b9d578082015181840152602081019050610b82565b83811115610bac576000848401525b50505050565b60006002820490506001821680610bca57607f821691505b60208210811415610bde57610bdd610c8d565b5b50919050565b610bed82610ceb565b810181811067ffffffffffffffff82111715610c0c57610c0b610cbc565b5b80604052505050565b6000610c2082610b66565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610c5357610c52610c5e565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610d0581610b66565b8114610d1057600080fd5b5056fea26469706673582212200edc2ba80344a2cecafa85071fe43e4fa519f0fbf958ab5c9dfdf75543d18ad264736f6c63430008040033";

export class ChatSystem__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ChatSystem> {
    return super.deploy(overrides || {}) as Promise<ChatSystem>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ChatSystem {
    return super.attach(address) as ChatSystem;
  }
  connect(signer: Signer): ChatSystem__factory {
    return super.connect(signer) as ChatSystem__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ChatSystemInterface {
    return new utils.Interface(_abi) as ChatSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ChatSystem {
    return new Contract(address, _abi, signerOrProvider) as ChatSystem;
  }
}
