/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  31337: {
    YourContract: {
      address: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
      abi: [
        {
          name: "GreetingChange",
          inputs: [
            {
              name: "greetingSetter",
              type: "address",
              indexed: false,
            },
            {
              name: "newGreeting",
              type: "string",
              indexed: false,
            },
            {
              name: "premium",
              type: "bool",
              indexed: false,
            },
            {
              name: "value",
              type: "uint256",
              indexed: false,
            },
          ],
          anonymous: false,
          type: "event",
        },
        {
          stateMutability: "nonpayable",
          type: "constructor",
          inputs: [
            {
              name: "_owner",
              type: "address",
            },
          ],
          outputs: [],
        },
        {
          stateMutability: "payable",
          type: "function",
          name: "setGreeting",
          inputs: [
            {
              name: "_newGreeting",
              type: "string",
            },
          ],
          outputs: [],
        },
        {
          stateMutability: "nonpayable",
          type: "function",
          name: "withdraw",
          inputs: [],
          outputs: [],
        },
        {
          stateMutability: "view",
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
            },
          ],
        },
        {
          stateMutability: "view",
          type: "function",
          name: "greeting",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
            },
          ],
        },
        {
          stateMutability: "view",
          type: "function",
          name: "premium",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "bool",
            },
          ],
        },
        {
          stateMutability: "view",
          type: "function",
          name: "totalCounter",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
            },
          ],
        },
      ],
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
