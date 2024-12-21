import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

/**
 * @example
 * const externalContracts = {
 *   1: {
 *     DAI: {
 *       address: "0x...",
 *       abi: [...],
 *     },
 *   },
 * } as const;
 */
const externalContracts = {
  84532: {
    mPAWSY: {
      address: "0x72cF9a1946fC06077DbfF0f49E08319E292DB0Ac",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "AccessControlBadConfirmation",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "neededRole",
              type: "bytes32",
            },
          ],
          name: "AccessControlUnauthorizedAccount",
          type: "error",
        },
        {
          inputs: [],
          name: "CheckpointUnorderedInsertion",
          type: "error",
        },
        {
          inputs: [],
          name: "ECDSAInvalidSignature",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "length",
              type: "uint256",
            },
          ],
          name: "ECDSAInvalidSignatureLength",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "s",
              type: "bytes32",
            },
          ],
          name: "ECDSAInvalidSignatureS",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "increasedSupply",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "cap",
              type: "uint256",
            },
          ],
          name: "ERC20ExceededSafeSupply",
          type: "error",
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
              name: "allowance",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "needed",
              type: "uint256",
            },
          ],
          name: "ERC20InsufficientAllowance",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "balance",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "needed",
              type: "uint256",
            },
          ],
          name: "ERC20InsufficientBalance",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "approver",
              type: "address",
            },
          ],
          name: "ERC20InvalidApprover",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "receiver",
              type: "address",
            },
          ],
          name: "ERC20InvalidReceiver",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "sender",
              type: "address",
            },
          ],
          name: "ERC20InvalidSender",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
          ],
          name: "ERC20InvalidSpender",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "deadline",
              type: "uint256",
            },
          ],
          name: "ERC2612ExpiredSignature",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "signer",
              type: "address",
            },
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "ERC2612InvalidSigner",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "timepoint",
              type: "uint256",
            },
            {
              internalType: "uint48",
              name: "clock",
              type: "uint48",
            },
          ],
          name: "ERC5805FutureLookup",
          type: "error",
        },
        {
          inputs: [],
          name: "ERC6372InconsistentClock",
          type: "error",
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
              name: "currentNonce",
              type: "uint256",
            },
          ],
          name: "InvalidAccountNonce",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidInitialization",
          type: "error",
        },
        {
          inputs: [],
          name: "NotInitializing",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "bits",
              type: "uint8",
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "SafeCastOverflowedUintDowncast",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "expiry",
              type: "uint256",
            },
          ],
          name: "VotesExpiredSignature",
          type: "error",
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
              name: "delegator",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "fromDelegate",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "toDelegate",
              type: "address",
            },
          ],
          name: "DelegateChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "delegate",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "previousVotes",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "newVotes",
              type: "uint256",
            },
          ],
          name: "DelegateVotesChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [],
          name: "EIP712DomainChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint64",
              name: "version",
              type: "uint64",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "previousAdminRole",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "newAdminRole",
              type: "bytes32",
            },
          ],
          name: "RoleAdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address",
            },
          ],
          name: "RoleGranted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address",
            },
          ],
          name: "RoleRevoked",
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
          inputs: [],
          name: "CLOCK_MODE",
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
          name: "DEFAULT_ADMIN_ROLE",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "DOMAIN_SEPARATOR",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "MINTER_ROLE",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
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
              name: "value",
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
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              internalType: "uint32",
              name: "pos",
              type: "uint32",
            },
          ],
          name: "checkpoints",
          outputs: [
            {
              components: [
                {
                  internalType: "uint48",
                  name: "_key",
                  type: "uint48",
                },
                {
                  internalType: "uint208",
                  name: "_value",
                  type: "uint208",
                },
              ],
              internalType: "struct Checkpoints.Checkpoint208",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "clock",
          outputs: [
            {
              internalType: "uint48",
              name: "",
              type: "uint48",
            },
          ],
          stateMutability: "view",
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
              name: "delegatee",
              type: "address",
            },
          ],
          name: "delegate",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "delegatee",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "nonce",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "expiry",
              type: "uint256",
            },
            {
              internalType: "uint8",
              name: "v",
              type: "uint8",
            },
            {
              internalType: "bytes32",
              name: "r",
              type: "bytes32",
            },
            {
              internalType: "bytes32",
              name: "s",
              type: "bytes32",
            },
          ],
          name: "delegateBySig",
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
          ],
          name: "delegates",
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
          name: "eip712Domain",
          outputs: [
            {
              internalType: "bytes1",
              name: "fields",
              type: "bytes1",
            },
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "string",
              name: "version",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "chainId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "verifyingContract",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "salt",
              type: "bytes32",
            },
            {
              internalType: "uint256[]",
              name: "extensions",
              type: "uint256[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "timepoint",
              type: "uint256",
            },
          ],
          name: "getPastTotalSupply",
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
              name: "account",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "timepoint",
              type: "uint256",
            },
          ],
          name: "getPastVotes",
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
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
          ],
          name: "getRoleAdmin",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
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
          ],
          name: "getVotes",
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
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "grantRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "hasRole",
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
              name: "defaultAdmin",
              type: "address",
            },
            {
              internalType: "address",
              name: "minter",
              type: "address",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
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
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "nonces",
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
              name: "account",
              type: "address",
            },
          ],
          name: "numCheckpoints",
          outputs: [
            {
              internalType: "uint32",
              name: "",
              type: "uint32",
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
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "deadline",
              type: "uint256",
            },
            {
              internalType: "uint8",
              name: "v",
              type: "uint8",
            },
            {
              internalType: "bytes32",
              name: "r",
              type: "bytes32",
            },
            {
              internalType: "bytes32",
              name: "s",
              type: "bytes32",
            },
          ],
          name: "permit",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "callerConfirmation",
              type: "address",
            },
          ],
          name: "renounceRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "revokeRole",
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
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "value",
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
              name: "value",
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
      ],
    },
    // LP: {
    //   address: "0x96FC64caE162C1Cb288791280c3Eff2255c330a8",
    //   abi: [
    //     { inputs: [], payable: false, stateMutability: "nonpayable", type: "constructor" },
    //     {
    //       anonymous: false,
    //       inputs: [
    //         { indexed: true, internalType: "address", name: "owner", type: "address" },
    //         { indexed: true, internalType: "address", name: "spender", type: "address" },
    //         { indexed: false, internalType: "uint256", name: "value", type: "uint256" },
    //       ],
    //       name: "Approval",
    //       type: "event",
    //     },
    //     {
    //       anonymous: false,
    //       inputs: [
    //         { indexed: true, internalType: "address", name: "sender", type: "address" },
    //         { indexed: false, internalType: "uint256", name: "amount0", type: "uint256" },
    //         { indexed: false, internalType: "uint256", name: "amount1", type: "uint256" },
    //         { indexed: true, internalType: "address", name: "to", type: "address" },
    //       ],
    //       name: "Burn",
    //       type: "event",
    //     },
    //     {
    //       anonymous: false,
    //       inputs: [
    //         { indexed: true, internalType: "address", name: "sender", type: "address" },
    //         { indexed: false, internalType: "uint256", name: "amount0", type: "uint256" },
    //         { indexed: false, internalType: "uint256", name: "amount1", type: "uint256" },
    //       ],
    //       name: "Mint",
    //       type: "event",
    //     },
    //     {
    //       anonymous: false,
    //       inputs: [
    //         { indexed: true, internalType: "address", name: "sender", type: "address" },
    //         { indexed: false, internalType: "uint256", name: "amount0In", type: "uint256" },
    //         { indexed: false, internalType: "uint256", name: "amount1In", type: "uint256" },
    //         { indexed: false, internalType: "uint256", name: "amount0Out", type: "uint256" },
    //         { indexed: false, internalType: "uint256", name: "amount1Out", type: "uint256" },
    //         { indexed: true, internalType: "address", name: "to", type: "address" },
    //       ],
    //       name: "Swap",
    //       type: "event",
    //     },
    //     {
    //       anonymous: false,
    //       inputs: [
    //         { indexed: false, internalType: "uint112", name: "reserve0", type: "uint112" },
    //         { indexed: false, internalType: "uint112", name: "reserve1", type: "uint112" },
    //       ],
    //       name: "Sync",
    //       type: "event",
    //     },
    //     {
    //       anonymous: false,
    //       inputs: [
    //         { indexed: true, internalType: "address", name: "from", type: "address" },
    //         { indexed: true, internalType: "address", name: "to", type: "address" },
    //         { indexed: false, internalType: "uint256", name: "value", type: "uint256" },
    //       ],
    //       name: "Transfer",
    //       type: "event",
    //     },
    //     {
    //       constant: true,
    //       inputs: [],
    //       name: "DOMAIN_SEPARATOR",
    //       outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    //       payable: false,
    //       stateMutability: "view",
    //       type: "function",
    //     },
    //     {
    //       constant: true,
    //       inputs: [],
    //       name: "MINIMUM_LIQUIDITY",
    //       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    //       payable: false,
    //       stateMutability: "view",
    //       type: "function",
    //     },
    //     {
    //       constant: true,
    //       inputs: [],
    //       name: "PERMIT_TYPEHASH",
    //       outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    //       payable: false,
    //       stateMutability: "view",
    //       type: "function",
    //     },
    //     {
    //       constant: true,
    //       inputs: [
    //         { internalType: "address", name: "", type: "address" },
    //         { internalType: "address", name: "", type: "address" },
    //       ],
    //       name: "allowance",
    //       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    //       payable: false,
    //       stateMutability: "view",
    //       type: "function",
    //     },
    //     {
    //       constant: false,
    //       inputs: [
    //         { internalType: "address", name: "spender", type: "address" },
    //         { internalType: "uint256", name: "value", type: "uint256" },
    //       ],
    //       name: "approve",
    //       outputs: [{ internalType: "bool", name: "", type: "bool" }],
    //       payable: false,
    //       stateMutability: "nonpayable",
    //       type: "function",
    //     },
    //     {
    //       constant: true,
    //       inputs: [{ internalType: "address", name: "", type: "address" }],
    //       name: "balanceOf",
    //       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    //       payable: false,
    //       stateMutability: "view",
    //       type: "function",
    //     },
    //     {
    //       constant: false,
    //       inputs: [{ internalType: "address", name: "to", type: "address" }],
    //       name: "burn",
    //       outputs: [
    //         { internalType: "uint256", name: "amount0", type: "uint256" },
    //         { internalType: "uint256", name: "amount1", type: "uint256" },
    //       ],
    //       payable: false,
    //       stateMutability: "nonpayable",
    //       type: "function",
    //     },
    //     {
    //       constant: true,
    //       inputs: [],
    //       name: "decimals",
    //       outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    //       payable: false,
    //       stateMutability: "view",
    //       type: "function",
    //     },
    //     {
    //       constant: true,
    //       inputs: [],
    //       name: "factory",
    //       outputs: [{ internalType: "address", name: "", type: "address" }],
    //       payable: false,
    //       stateMutability: "view",
    //       type: "function",
    //     },
    //     {
    //       constant: true,
    //       inputs: [],
    //       name: "getReserves",
    //       outputs: [
    //         { internalType: "uint112", name: "_reserve0", type: "uint112" },
    //         { internalType: "uint112", name: "_reserve1", type: "uint112" },
    //         { internalType: "uint32", name: "_blockTimestampLast", type: "uint32" },
    //       ],
    //       payable: false,
    //       stateMutability: "view",
    //       type: "function",
    //     },
    //     {
    //       constant: false,
    //       inputs: [
    //         { internalType: "address", name: "_token0", type: "address" },
    //         { internalType: "address", name: "_token1", type: "address" },
    //       ],
    //       name: "initialize",
    //       outputs: [],
    //       payable: false,
    //       stateMutability: "nonpayable",
    //       type: "function",
    //     },
    //     {
    //       constant: true,
    //       inputs: [],
    //       name: "kLast",
    //       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    //       payable: false,
    //       stateMutability: "view",
    //       type: "function",
    //     },
    //     {
    //       constant: false,
    //       inputs: [{ internalType: "address", name: "to", type: "address" }],
    //       name: "mint",
    //       outputs: [{ internalType: "uint256", name: "liquidity", type: "uint256" }],
    //       payable: false,
    //       stateMutability: "nonpayable",
    //       type: "function",
    //     },
    //     {
    //       constant: true,
    //       inputs: [],
    //       name: "name",
    //       outputs: [{ internalType: "string", name: "", type: "string" }],
    //       payable: false,
    //       stateMutability: "view",
    //       type: "function",
    //     },
    //     {
    //       constant: true,
    //       inputs: [{ internalType: "address", name: "", type: "address" }],
    //       name: "nonces",
    //       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    //       payable: false,
    //       stateMutability: "view",
    //       type: "function",
    //     },
    //     {
    //       constant: false,
    //       inputs: [
    //         { internalType: "address", name: "owner", type: "address" },
    //         { internalType: "address", name: "spender", type: "address" },
    //         { internalType: "uint256", name: "value", type: "uint256" },
    //         { internalType: "uint256", name: "deadline", type: "uint256" },
    //         { internalType: "uint8", name: "v", type: "uint8" },
    //         { internalType: "bytes32", name: "r", type: "bytes32" },
    //         { internalType: "bytes32", name: "s", type: "bytes32" },
    //       ],
    //       name: "permit",
    //       outputs: [],
    //       payable: false,
    //       stateMutability: "nonpayable",
    //       type: "function",
    //     },
    //     {
    //       constant: true,
    //       inputs: [],
    //       name: "price0CumulativeLast",
    //       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    //       payable: false,
    //       stateMutability: "view",
    //       type: "function",
    //     },
    //     {
    //       constant: true,
    //       inputs: [],
    //       name: "price1CumulativeLast",
    //       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    //       payable: false,
    //       stateMutability: "view",
    //       type: "function",
    //     },
    //     {
    //       constant: false,
    //       inputs: [{ internalType: "address", name: "to", type: "address" }],
    //       name: "skim",
    //       outputs: [],
    //       payable: false,
    //       stateMutability: "nonpayable",
    //       type: "function",
    //     },
    //     {
    //       constant: false,
    //       inputs: [
    //         { internalType: "uint256", name: "amount0Out", type: "uint256" },
    //         { internalType: "uint256", name: "amount1Out", type: "uint256" },
    //         { internalType: "address", name: "to", type: "address" },
    //         { internalType: "bytes", name: "data", type: "bytes" },
    //       ],
    //       name: "swap",
    //       outputs: [],
    //       payable: false,
    //       stateMutability: "nonpayable",
    //       type: "function",
    //     },
    //     {
    //       constant: true,
    //       inputs: [],
    //       name: "symbol",
    //       outputs: [{ internalType: "string", name: "", type: "string" }],
    //       payable: false,
    //       stateMutability: "view",
    //       type: "function",
    //     },
    //     {
    //       constant: false,
    //       inputs: [],
    //       name: "sync",
    //       outputs: [],
    //       payable: false,
    //       stateMutability: "nonpayable",
    //       type: "function",
    //     },
    //     {
    //       constant: true,
    //       inputs: [],
    //       name: "token0",
    //       outputs: [{ internalType: "address", name: "", type: "address" }],
    //       payable: false,
    //       stateMutability: "view",
    //       type: "function",
    //     },
    //     {
    //       constant: true,
    //       inputs: [],
    //       name: "token1",
    //       outputs: [{ internalType: "address", name: "", type: "address" }],
    //       payable: false,
    //       stateMutability: "view",
    //       type: "function",
    //     },
    //     {
    //       constant: true,
    //       inputs: [],
    //       name: "totalSupply",
    //       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    //       payable: false,
    //       stateMutability: "view",
    //       type: "function",
    //     },
    //     {
    //       constant: false,
    //       inputs: [
    //         { internalType: "address", name: "to", type: "address" },
    //         { internalType: "uint256", name: "value", type: "uint256" },
    //       ],
    //       name: "transfer",
    //       outputs: [{ internalType: "bool", name: "", type: "bool" }],
    //       payable: false,
    //       stateMutability: "nonpayable",
    //       type: "function",
    //     },
    //     {
    //       constant: false,
    //       inputs: [
    //         { internalType: "address", name: "from", type: "address" },
    //         { internalType: "address", name: "to", type: "address" },
    //         { internalType: "uint256", name: "value", type: "uint256" },
    //       ],
    //       name: "transferFrom",
    //       outputs: [{ internalType: "bool", name: "", type: "bool" }],
    //       payable: false,
    //       stateMutability: "nonpayable",
    //       type: "function",
    //     },
    //   ],
    // },
    TTK: {
      address: "0x059441bac101E1b195E12bf7F4a0c4145BFED60b",
      abi: [
        {
          inputs: [
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "string",
              name: "symbol",
              type: "string",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
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
              name: "allowance",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "needed",
              type: "uint256",
            },
          ],
          name: "ERC20InsufficientAllowance",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "balance",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "needed",
              type: "uint256",
            },
          ],
          name: "ERC20InsufficientBalance",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "approver",
              type: "address",
            },
          ],
          name: "ERC20InvalidApprover",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "receiver",
              type: "address",
            },
          ],
          name: "ERC20InvalidReceiver",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "sender",
              type: "address",
            },
          ],
          name: "ERC20InvalidSender",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
          ],
          name: "ERC20InvalidSpender",
          type: "error",
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
              name: "value",
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
              name: "to",
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
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "value",
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
              name: "value",
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
      ],
    },
  },
  8453: {
    $mPAWSY: {
      address: "0x1437819DF58Ad648e35ED4f6F642d992684B2004",
      abi: [
        { inputs: [], stateMutability: "nonpayable", type: "constructor" },
        { inputs: [], name: "AccessControlBadConfirmation", type: "error" },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
            { internalType: "bytes32", name: "neededRole", type: "bytes32" },
          ],
          name: "AccessControlUnauthorizedAccount",
          type: "error",
        },
        { inputs: [], name: "CheckpointUnorderedInsertion", type: "error" },
        { inputs: [], name: "ECDSAInvalidSignature", type: "error" },
        {
          inputs: [{ internalType: "uint256", name: "length", type: "uint256" }],
          name: "ECDSAInvalidSignatureLength",
          type: "error",
        },
        {
          inputs: [{ internalType: "bytes32", name: "s", type: "bytes32" }],
          name: "ECDSAInvalidSignatureS",
          type: "error",
        },
        {
          inputs: [
            { internalType: "uint256", name: "increasedSupply", type: "uint256" },
            { internalType: "uint256", name: "cap", type: "uint256" },
          ],
          name: "ERC20ExceededSafeSupply",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "allowance", type: "uint256" },
            { internalType: "uint256", name: "needed", type: "uint256" },
          ],
          name: "ERC20InsufficientAllowance",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "sender", type: "address" },
            { internalType: "uint256", name: "balance", type: "uint256" },
            { internalType: "uint256", name: "needed", type: "uint256" },
          ],
          name: "ERC20InsufficientBalance",
          type: "error",
        },
        {
          inputs: [{ internalType: "address", name: "approver", type: "address" }],
          name: "ERC20InvalidApprover",
          type: "error",
        },
        {
          inputs: [{ internalType: "address", name: "receiver", type: "address" }],
          name: "ERC20InvalidReceiver",
          type: "error",
        },
        {
          inputs: [{ internalType: "address", name: "sender", type: "address" }],
          name: "ERC20InvalidSender",
          type: "error",
        },
        {
          inputs: [{ internalType: "address", name: "spender", type: "address" }],
          name: "ERC20InvalidSpender",
          type: "error",
        },
        {
          inputs: [{ internalType: "uint256", name: "deadline", type: "uint256" }],
          name: "ERC2612ExpiredSignature",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "signer", type: "address" },
            { internalType: "address", name: "owner", type: "address" },
          ],
          name: "ERC2612InvalidSigner",
          type: "error",
        },
        {
          inputs: [
            { internalType: "uint256", name: "timepoint", type: "uint256" },
            { internalType: "uint48", name: "clock", type: "uint48" },
          ],
          name: "ERC5805FutureLookup",
          type: "error",
        },
        { inputs: [], name: "ERC6372InconsistentClock", type: "error" },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
            { internalType: "uint256", name: "currentNonce", type: "uint256" },
          ],
          name: "InvalidAccountNonce",
          type: "error",
        },
        { inputs: [], name: "InvalidInitialization", type: "error" },
        { inputs: [], name: "NotInitializing", type: "error" },
        {
          inputs: [
            { internalType: "uint8", name: "bits", type: "uint8" },
            { internalType: "uint256", name: "value", type: "uint256" },
          ],
          name: "SafeCastOverflowedUintDowncast",
          type: "error",
        },
        {
          inputs: [{ internalType: "uint256", name: "expiry", type: "uint256" }],
          name: "VotesExpiredSignature",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "owner", type: "address" },
            { indexed: true, internalType: "address", name: "spender", type: "address" },
            { indexed: false, internalType: "uint256", name: "value", type: "uint256" },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "delegator", type: "address" },
            { indexed: true, internalType: "address", name: "fromDelegate", type: "address" },
            { indexed: true, internalType: "address", name: "toDelegate", type: "address" },
          ],
          name: "DelegateChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "delegate", type: "address" },
            { indexed: false, internalType: "uint256", name: "previousVotes", type: "uint256" },
            { indexed: false, internalType: "uint256", name: "newVotes", type: "uint256" },
          ],
          name: "DelegateVotesChanged",
          type: "event",
        },
        { anonymous: false, inputs: [], name: "EIP712DomainChanged", type: "event" },
        {
          anonymous: false,
          inputs: [{ indexed: false, internalType: "uint64", name: "version", type: "uint64" }],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "bytes32", name: "role", type: "bytes32" },
            { indexed: true, internalType: "bytes32", name: "previousAdminRole", type: "bytes32" },
            { indexed: true, internalType: "bytes32", name: "newAdminRole", type: "bytes32" },
          ],
          name: "RoleAdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "bytes32", name: "role", type: "bytes32" },
            { indexed: true, internalType: "address", name: "account", type: "address" },
            { indexed: true, internalType: "address", name: "sender", type: "address" },
          ],
          name: "RoleGranted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "bytes32", name: "role", type: "bytes32" },
            { indexed: true, internalType: "address", name: "account", type: "address" },
            { indexed: true, internalType: "address", name: "sender", type: "address" },
          ],
          name: "RoleRevoked",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "from", type: "address" },
            { indexed: true, internalType: "address", name: "to", type: "address" },
            { indexed: false, internalType: "uint256", name: "value", type: "uint256" },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [],
          name: "CLOCK_MODE",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "DEFAULT_ADMIN_ROLE",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "DOMAIN_SEPARATOR",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "MINTER_ROLE",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
          ],
          name: "allowance",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "account", type: "address" }],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
            { internalType: "uint32", name: "pos", type: "uint32" },
          ],
          name: "checkpoints",
          outputs: [
            {
              components: [
                { internalType: "uint48", name: "_key", type: "uint48" },
                { internalType: "uint208", name: "_value", type: "uint208" },
              ],
              internalType: "struct Checkpoints.Checkpoint208",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "clock",
          outputs: [{ internalType: "uint48", name: "", type: "uint48" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "delegatee", type: "address" }],
          name: "delegate",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "delegatee", type: "address" },
            { internalType: "uint256", name: "nonce", type: "uint256" },
            { internalType: "uint256", name: "expiry", type: "uint256" },
            { internalType: "uint8", name: "v", type: "uint8" },
            { internalType: "bytes32", name: "r", type: "bytes32" },
            { internalType: "bytes32", name: "s", type: "bytes32" },
          ],
          name: "delegateBySig",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "account", type: "address" }],
          name: "delegates",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "eip712Domain",
          outputs: [
            { internalType: "bytes1", name: "fields", type: "bytes1" },
            { internalType: "string", name: "name", type: "string" },
            { internalType: "string", name: "version", type: "string" },
            { internalType: "uint256", name: "chainId", type: "uint256" },
            { internalType: "address", name: "verifyingContract", type: "address" },
            { internalType: "bytes32", name: "salt", type: "bytes32" },
            { internalType: "uint256[]", name: "extensions", type: "uint256[]" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "timepoint", type: "uint256" }],
          name: "getPastTotalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
            { internalType: "uint256", name: "timepoint", type: "uint256" },
          ],
          name: "getPastVotes",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }],
          name: "getRoleAdmin",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "account", type: "address" }],
          name: "getVotes",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes32", name: "role", type: "bytes32" },
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "grantRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes32", name: "role", type: "bytes32" },
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "hasRole",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "defaultAdmin", type: "address" },
            { internalType: "address", name: "minter", type: "address" },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "mint",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "owner", type: "address" }],
          name: "nonces",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "account", type: "address" }],
          name: "numCheckpoints",
          outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
            { internalType: "uint256", name: "deadline", type: "uint256" },
            { internalType: "uint8", name: "v", type: "uint8" },
            { internalType: "bytes32", name: "r", type: "bytes32" },
            { internalType: "bytes32", name: "s", type: "bytes32" },
          ],
          name: "permit",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "tokenAddress", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "recoverTokens",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes32", name: "role", type: "bytes32" },
            { internalType: "address", name: "callerConfirmation", type: "address" },
          ],
          name: "renounceRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes32", name: "role", type: "bytes32" },
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "revokeRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
          name: "supportsInterface",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    $mPAWSYImp: {
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_tokenMigration",
              type: "address",
            },
            {
              internalType: "address",
              name: "_oldToken",
              type: "address",
            },
            {
              internalType: "address",
              name: "_newToken",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "AccessControlBadConfirmation",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "neededRole",
              type: "bytes32",
            },
          ],
          name: "AccessControlUnauthorizedAccount",
          type: "error",
        },
        {
          inputs: [],
          name: "EnforcedPause",
          type: "error",
        },
        {
          inputs: [],
          name: "ExpectedPause",
          type: "error",
        },
        {
          inputs: [],
          name: "ReentrancyGuardReentrantCall",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "token",
              type: "address",
            },
          ],
          name: "SafeERC20FailedOperation",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "pauser",
              type: "address",
            },
          ],
          name: "MigrationPaused",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "pauser",
              type: "address",
            },
          ],
          name: "MigrationUnpaused",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "Paused",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "previousAdminRole",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "newAdminRole",
              type: "bytes32",
            },
          ],
          name: "RoleAdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address",
            },
          ],
          name: "RoleGranted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address",
            },
          ],
          name: "RoleRevoked",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "user",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "TokensMigrated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "Unpaused",
          type: "event",
        },
        {
          inputs: [],
          name: "DEFAULT_ADMIN_ROLE",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "PAUSER_ROLE",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
          ],
          name: "getRoleAdmin",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "grantRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "hasRole",
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
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "migrateTokens",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "minimumAmount",
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
          name: "newToken",
          outputs: [
            {
              internalType: "contract IERC20",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "oldToken",
          outputs: [
            {
              internalType: "contract IERC20",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "pause",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "paused",
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
              name: "tokenAddress",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "recoverERC20",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "tokenAddress",
              type: "address",
            },
          ],
          name: "recoverERC20From",
          outputs: [],
          stateMutability: "nonpayable",
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
          name: "registeredUsers",
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
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "callerConfirmation",
              type: "address",
            },
          ],
          name: "renounceRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "revokeRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_minimumAmount",
              type: "uint256",
            },
          ],
          name: "setMinimumAmount",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_tokenMigration",
              type: "address",
            },
          ],
          name: "setTokenMigration",
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
          name: "tokenMigration",
          outputs: [
            {
              internalType: "contract ITokenMigration",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "unpause",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      address: "0x86bD6B1beBEB9bB2CD62cc3A9DA2fF8696e849a5",
    },
    RewardsMarket: {
      address: "0x39b1314f35676F6Be6F27ae486FF8da7cbA1c617",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_rewardToken",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "CampaignExpired",
          type: "error",
        },
        {
          inputs: [],
          name: "CampaignNotActive",
          type: "error",
        },
        {
          inputs: [],
          name: "EnforcedPause",
          type: "error",
        },
        {
          inputs: [],
          name: "ExpectedPause",
          type: "error",
        },
        {
          inputs: [],
          name: "ExternalCallFailed",
          type: "error",
        },
        {
          inputs: [],
          name: "InsufficientBurnAmount",
          type: "error",
        },
        {
          inputs: [],
          name: "MaxRewardsReached",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "OwnableInvalidOwner",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "OwnableUnauthorizedAccount",
          type: "error",
        },
        {
          inputs: [],
          name: "ReentrancyGuardReentrantCall",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "token",
              type: "address",
            },
          ],
          name: "SafeERC20FailedOperation",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "campaignId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "minBurnAmount",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "endDate",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "tokenAddress",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "recipientAddress",
              type: "address",
            },
          ],
          name: "CampaignCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "campaignId",
              type: "uint256",
            },
          ],
          name: "CampaignDeactivated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "campaignId",
              type: "uint256",
            },
          ],
          name: "CampaignModified",
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
              indexed: false,
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "Paused",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "oldToken",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newToken",
              type: "address",
            },
          ],
          name: "RewardTokenUpdated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "campaignId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "user",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "burnAmount",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "externalCallSuccess",
              type: "bool",
            },
          ],
          name: "RewardTriggered",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "token",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "TokensRecovered",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "Unpaused",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "allCampaignIds",
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
          name: "campaignIdToArrayIndex",
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
          name: "campaigns",
          outputs: [
            {
              internalType: "uint256",
              name: "minBurnAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "endDate",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "maxRewards",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "rewardsIssued",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "targetContract",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "targetCalldata",
              type: "bytes",
            },
            {
              internalType: "bool",
              name: "isActive",
              type: "bool",
            },
            {
              internalType: "uint256",
              name: "createdAt",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "tokenAddress",
              type: "address",
            },
            {
              internalType: "address",
              name: "recipientAddress",
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
              name: "minBurnAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "endDate",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "maxRewards",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "targetContract",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "targetCalldata",
              type: "bytes",
            },
            {
              internalType: "address",
              name: "tokenAddress",
              type: "address",
            },
            {
              internalType: "address",
              name: "recipientAddress",
              type: "address",
            },
          ],
          name: "createCampaign",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "campaignId",
              type: "uint256",
            },
          ],
          name: "deactivateCampaign",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "startIndex",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "endIndex",
              type: "uint256",
            },
          ],
          name: "getActiveCampaigns",
          outputs: [
            {
              internalType: "uint256[]",
              name: "campaignIds",
              type: "uint256[]",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "minBurnAmount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "endDate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "maxRewards",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "rewardsIssued",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "targetContract",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "targetCalldata",
                  type: "bytes",
                },
                {
                  internalType: "bool",
                  name: "isActive",
                  type: "bool",
                },
                {
                  internalType: "uint256",
                  name: "createdAt",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "tokenAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "recipientAddress",
                  type: "address",
                },
              ],
              internalType: "struct RewardsMarket.Campaign[]",
              name: "details",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "campaignId",
              type: "uint256",
            },
          ],
          name: "getCampaign",
          outputs: [
            {
              internalType: "uint256",
              name: "minBurnAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "endDate",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "maxRewards",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "rewardsIssued",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "targetContract",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "targetCalldata",
              type: "bytes",
            },
            {
              internalType: "bool",
              name: "isActive",
              type: "bool",
            },
            {
              internalType: "uint256",
              name: "createdAt",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "tokenAddress",
              type: "address",
            },
            {
              internalType: "address",
              name: "recipientAddress",
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
              name: "startIndex",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "endIndex",
              type: "uint256",
            },
          ],
          name: "getCampaignIds",
          outputs: [
            {
              internalType: "uint256[]",
              name: "",
              type: "uint256[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "startIndex",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "endIndex",
              type: "uint256",
            },
          ],
          name: "getInactiveCampaigns",
          outputs: [
            {
              internalType: "uint256[]",
              name: "campaignIds",
              type: "uint256[]",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "minBurnAmount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "endDate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "maxRewards",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "rewardsIssued",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "targetContract",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "targetCalldata",
                  type: "bytes",
                },
                {
                  internalType: "bool",
                  name: "isActive",
                  type: "bool",
                },
                {
                  internalType: "uint256",
                  name: "createdAt",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "tokenAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "recipientAddress",
                  type: "address",
                },
              ],
              internalType: "struct RewardsMarket.Campaign[]",
              name: "details",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getTotalCampaigns",
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
              name: "user",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "campaignId",
              type: "uint256",
            },
          ],
          name: "getUserParticipationCount",
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
              name: "campaignId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "minBurnAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "endDate",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "maxRewards",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "targetContract",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "targetCalldata",
              type: "bytes",
            },
            {
              internalType: "address",
              name: "tokenAddress",
              type: "address",
            },
            {
              internalType: "address",
              name: "recipientAddress",
              type: "address",
            },
          ],
          name: "modifyCampaign",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "nextCampaignId",
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
          name: "pause",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "paused",
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
              internalType: "contract IERC20",
              name: "tokenAddress",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "recoverTokens",
          outputs: [],
          stateMutability: "nonpayable",
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
          name: "rewardToken",
          outputs: [
            {
              internalType: "contract RewardToken",
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
              name: "_newRewardToken",
              type: "address",
            },
          ],
          name: "setRewardToken",
          outputs: [],
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
        {
          inputs: [
            {
              internalType: "uint256",
              name: "campaignId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "burnAmount",
              type: "uint256",
            },
          ],
          name: "triggerReward",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "unpause",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "userParticipation",
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
      ],
      transactionHash: "0x722a9f5cda206ac0eab9d48d4f65aaabaf443e9408789c1b4930afca151af30d",
      receipt: {
        to: null,
        from: "0xCfdc7f77c37268c14293ebD466768F6068D99461",
        contractAddress: "0x39b1314f35676F6Be6F27ae486FF8da7cbA1c617",
        transactionIndex: 54,
        gasUsed: "1962832",
        logsBloom:
          "0x00000000000000000000000000000000000000000000000000800000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000001000000000000000000000000000000000020020000000000002000000800000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000010000000000000000000000000000000000000000100",
        blockHash: "0xc24f6b98adab0414c040d4074bfe747100364aa1471aecf59e1f0610a45efb6a",
        transactionHash: "0x722a9f5cda206ac0eab9d48d4f65aaabaf443e9408789c1b4930afca151af30d",
        logs: [
          {
            transactionIndex: 54,
            blockNumber: 23699466,
            transactionHash: "0x722a9f5cda206ac0eab9d48d4f65aaabaf443e9408789c1b4930afca151af30d",
            address: "0x39b1314f35676F6Be6F27ae486FF8da7cbA1c617",
            topics: [
              "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0",
              "0x0000000000000000000000000000000000000000000000000000000000000000",
              "0x000000000000000000000000cfdc7f77c37268c14293ebd466768f6068d99461",
            ],
            data: "0x",
            logIndex: 137,
            blockHash: "0xc24f6b98adab0414c040d4074bfe747100364aa1471aecf59e1f0610a45efb6a",
          },
        ],
        blockNumber: 23699466,
        cumulativeGasUsed: "10603389",
        status: 1,
        byzantium: true,
      },
      args: ["0xD2f2386A1c8a4C6D3605c9343B948b12056BD774"],
      numDeployments: 1,
      solcInputHash: "18973a7afcd155198ef73f38258aa7bb",
      metadata:
        '{"compiler":{"version":"0.8.22+commit.4fc1097e"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"address","name":"_rewardToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"CampaignExpired","type":"error"},{"inputs":[],"name":"CampaignNotActive","type":"error"},{"inputs":[],"name":"EnforcedPause","type":"error"},{"inputs":[],"name":"ExpectedPause","type":"error"},{"inputs":[],"name":"ExternalCallFailed","type":"error"},{"inputs":[],"name":"InsufficientBurnAmount","type":"error"},{"inputs":[],"name":"MaxRewardsReached","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[],"name":"ReentrancyGuardReentrantCall","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"SafeERC20FailedOperation","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"campaignId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"minBurnAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endDate","type":"uint256"},{"indexed":false,"internalType":"address","name":"tokenAddress","type":"address"},{"indexed":false,"internalType":"address","name":"recipientAddress","type":"address"}],"name":"CampaignCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"campaignId","type":"uint256"}],"name":"CampaignDeactivated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"campaignId","type":"uint256"}],"name":"CampaignModified","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldToken","type":"address"},{"indexed":true,"internalType":"address","name":"newToken","type":"address"}],"name":"RewardTokenUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"campaignId","type":"uint256"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"burnAmount","type":"uint256"},{"indexed":false,"internalType":"bool","name":"externalCallSuccess","type":"bool"}],"name":"RewardTriggered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokensRecovered","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allCampaignIds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"campaignIdToArrayIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"campaigns","outputs":[{"internalType":"uint256","name":"minBurnAmount","type":"uint256"},{"internalType":"uint256","name":"endDate","type":"uint256"},{"internalType":"uint256","name":"maxRewards","type":"uint256"},{"internalType":"uint256","name":"rewardsIssued","type":"uint256"},{"internalType":"address","name":"targetContract","type":"address"},{"internalType":"bytes","name":"targetCalldata","type":"bytes"},{"internalType":"bool","name":"isActive","type":"bool"},{"internalType":"uint256","name":"createdAt","type":"uint256"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"address","name":"recipientAddress","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"minBurnAmount","type":"uint256"},{"internalType":"uint256","name":"endDate","type":"uint256"},{"internalType":"uint256","name":"maxRewards","type":"uint256"},{"internalType":"address","name":"targetContract","type":"address"},{"internalType":"bytes","name":"targetCalldata","type":"bytes"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"address","name":"recipientAddress","type":"address"}],"name":"createCampaign","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"campaignId","type":"uint256"}],"name":"deactivateCampaign","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"startIndex","type":"uint256"},{"internalType":"uint256","name":"endIndex","type":"uint256"}],"name":"getActiveCampaigns","outputs":[{"internalType":"uint256[]","name":"campaignIds","type":"uint256[]"},{"components":[{"internalType":"uint256","name":"minBurnAmount","type":"uint256"},{"internalType":"uint256","name":"endDate","type":"uint256"},{"internalType":"uint256","name":"maxRewards","type":"uint256"},{"internalType":"uint256","name":"rewardsIssued","type":"uint256"},{"internalType":"address","name":"targetContract","type":"address"},{"internalType":"bytes","name":"targetCalldata","type":"bytes"},{"internalType":"bool","name":"isActive","type":"bool"},{"internalType":"uint256","name":"createdAt","type":"uint256"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"address","name":"recipientAddress","type":"address"}],"internalType":"struct RewardsMarket.Campaign[]","name":"details","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"campaignId","type":"uint256"}],"name":"getCampaign","outputs":[{"internalType":"uint256","name":"minBurnAmount","type":"uint256"},{"internalType":"uint256","name":"endDate","type":"uint256"},{"internalType":"uint256","name":"maxRewards","type":"uint256"},{"internalType":"uint256","name":"rewardsIssued","type":"uint256"},{"internalType":"address","name":"targetContract","type":"address"},{"internalType":"bytes","name":"targetCalldata","type":"bytes"},{"internalType":"bool","name":"isActive","type":"bool"},{"internalType":"uint256","name":"createdAt","type":"uint256"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"address","name":"recipientAddress","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"startIndex","type":"uint256"},{"internalType":"uint256","name":"endIndex","type":"uint256"}],"name":"getCampaignIds","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"startIndex","type":"uint256"},{"internalType":"uint256","name":"endIndex","type":"uint256"}],"name":"getInactiveCampaigns","outputs":[{"internalType":"uint256[]","name":"campaignIds","type":"uint256[]"},{"components":[{"internalType":"uint256","name":"minBurnAmount","type":"uint256"},{"internalType":"uint256","name":"endDate","type":"uint256"},{"internalType":"uint256","name":"maxRewards","type":"uint256"},{"internalType":"uint256","name":"rewardsIssued","type":"uint256"},{"internalType":"address","name":"targetContract","type":"address"},{"internalType":"bytes","name":"targetCalldata","type":"bytes"},{"internalType":"bool","name":"isActive","type":"bool"},{"internalType":"uint256","name":"createdAt","type":"uint256"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"address","name":"recipientAddress","type":"address"}],"internalType":"struct RewardsMarket.Campaign[]","name":"details","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalCampaigns","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"campaignId","type":"uint256"}],"name":"getUserParticipationCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"campaignId","type":"uint256"},{"internalType":"uint256","name":"minBurnAmount","type":"uint256"},{"internalType":"uint256","name":"endDate","type":"uint256"},{"internalType":"uint256","name":"maxRewards","type":"uint256"},{"internalType":"address","name":"targetContract","type":"address"},{"internalType":"bytes","name":"targetCalldata","type":"bytes"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"address","name":"recipientAddress","type":"address"}],"name":"modifyCampaign","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"nextCampaignId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"tokenAddress","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"recoverTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"contract RewardToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newRewardToken","type":"address"}],"name":"setRewardToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"campaignId","type":"uint256"},{"internalType":"uint256","name":"burnAmount","type":"uint256"}],"name":"triggerReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userParticipation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}],"devdoc":{"details":"Uses ReentrancyGuard to prevent reentrancy attacks and Pausable for emergency stops","errors":{"EnforcedPause()":[{"details":"The operation failed because the contract is paused."}],"ExpectedPause()":[{"details":"The operation failed because the contract is not paused."}],"OwnableInvalidOwner(address)":[{"details":"The owner is not a valid owner account. (eg. `address(0)`)"}],"OwnableUnauthorizedAccount(address)":[{"details":"The caller account is not authorized to perform an operation."}],"ReentrancyGuardReentrantCall()":[{"details":"Unauthorized reentrant call."}],"SafeERC20FailedOperation(address)":[{"details":"An operation with an ERC-20 token failed."}]},"events":{"Paused(address)":{"details":"Emitted when the pause is triggered by `account`."},"Unpaused(address)":{"details":"Emitted when the pause is lifted by `account`."}},"kind":"dev","methods":{"createCampaign(uint256,uint256,uint256,address,bytes,address,address)":{"params":{"endDate":"Campaign end date (0 for no end date)","maxRewards":"Maximum number of rewards (0 for unlimited)","minBurnAmount":"Minimum tokens required to burn","recipientAddress":"Where tokens go (address(0) means burn)","targetCalldata":"Calldata for external call","targetContract":"Contract to call (address(0) for no call)","tokenAddress":"Token to be spent (address(0) means use rewardToken)"}},"deactivateCampaign(uint256)":{"params":{"campaignId":"ID of the campaign to deactivate"}},"getActiveCampaigns(uint256,uint256)":{"params":{"endIndex":"End index in the campaigns array (exclusive)","startIndex":"Start index in the campaigns array"},"returns":{"campaignIds":"Array of campaign IDs that are active","details":"Array of campaign details corresponding to the IDs"}},"getCampaign(uint256)":{"params":{"campaignId":"Campaign ID to query"}},"getCampaignIds(uint256,uint256)":{"params":{"endIndex":"End index in the campaigns array (exclusive)","startIndex":"Start index in the campaigns array"},"returns":{"_0":"Array of campaign IDs"}},"getInactiveCampaigns(uint256,uint256)":{"params":{"endIndex":"End index in the campaigns array (exclusive)","startIndex":"Start index in the campaigns array"},"returns":{"campaignIds":"Array of campaign IDs that are inactive","details":"Array of campaign details corresponding to the IDs"}},"modifyCampaign(uint256,uint256,uint256,uint256,address,bytes,address,address)":{"params":{"campaignId":"ID of the campaign to modify","endDate":"Campaign end date (0 for no end date)","maxRewards":"Maximum number of rewards (0 for unlimited)","minBurnAmount":"Minimum tokens required to burn","recipientAddress":"Where tokens go (address(0) means burn)","targetCalldata":"Calldata for external call","targetContract":"Contract to call (address(0) for no call)","tokenAddress":"Token to be spent (address(0) means use rewardToken)"}},"owner()":{"details":"Returns the address of the current owner."},"paused()":{"details":"Returns true if the contract is paused, and false otherwise."},"recoverTokens(address,address,uint256)":{"details":"Allows the owner to recover any ERC20 tokens mistakenly sent to the contract.","params":{"amount":"The amount of tokens to recover.","to":"The address to send the recovered tokens to.","tokenAddress":"The address of the ERC20 token to recover."}},"renounceOwnership()":{"details":"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner."},"setRewardToken(address)":{"params":{"_newRewardToken":"Address of the new reward token"}},"transferOwnership(address)":{"details":"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."},"triggerReward(uint256,uint256)":{"params":{"burnAmount":"Amount of tokens to burn","campaignId":"ID of the campaign"}}},"title":"RewardsMarket","version":1},"userdoc":{"kind":"user","methods":{"createCampaign(uint256,uint256,uint256,address,bytes,address,address)":{"notice":"Creates a new reward campaign"},"deactivateCampaign(uint256)":{"notice":"Deactivates a campaign"},"getActiveCampaigns(uint256,uint256)":{"notice":"Returns all active campaigns within the specified range"},"getCampaign(uint256)":{"notice":"Returns campaign details"},"getCampaignIds(uint256,uint256)":{"notice":"Returns an array of campaign IDs within the specified range"},"getInactiveCampaigns(uint256,uint256)":{"notice":"Returns all inactive campaigns within the specified range"},"getTotalCampaigns()":{"notice":"Returns total number of campaigns ever created"},"getUserParticipationCount(address,uint256)":{"notice":"Returns number of times a user has participated in a campaign"},"modifyCampaign(uint256,uint256,uint256,uint256,address,bytes,address,address)":{"notice":"Modifies an existing campaign"},"pause()":{"notice":"Emergency pause"},"recoverTokens(address,address,uint256)":{"notice":"Only callable by the contract owner."},"setRewardToken(address)":{"notice":"Updates the reward token address"},"triggerReward(uint256,uint256)":{"notice":"Triggers a reward by burning tokens"},"unpause()":{"notice":"Unpause the contract"}},"notice":"Manages reward campaigns where users can burn tokens to trigger rewards","version":1}},"settings":{"compilationTarget":{"contracts/RewardsMarket.sol":"RewardsMarket"},"evmVersion":"paris","libraries":{},"metadata":{"bytecodeHash":"ipfs","useLiteralContent":true},"optimizer":{"enabled":true,"runs":200},"remappings":[]},"sources":{"@openzeppelin/contracts/access/Ownable.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.0.0) (access/Ownable.sol)\\n\\npragma solidity ^0.8.20;\\n\\nimport {Context} from \\"../utils/Context.sol\\";\\n\\n/**\\n * @dev Contract module which provides a basic access control mechanism, where\\n * there is an account (an owner) that can be granted exclusive access to\\n * specific functions.\\n *\\n * The initial owner is set to the address provided by the deployer. This can\\n * later be changed with {transferOwnership}.\\n *\\n * This module is used through inheritance. It will make available the modifier\\n * `onlyOwner`, which can be applied to your functions to restrict their use to\\n * the owner.\\n */\\nabstract contract Ownable is Context {\\n    address private _owner;\\n\\n    /**\\n     * @dev The caller account is not authorized to perform an operation.\\n     */\\n    error OwnableUnauthorizedAccount(address account);\\n\\n    /**\\n     * @dev The owner is not a valid owner account. (eg. `address(0)`)\\n     */\\n    error OwnableInvalidOwner(address owner);\\n\\n    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\\n\\n    /**\\n     * @dev Initializes the contract setting the address provided by the deployer as the initial owner.\\n     */\\n    constructor(address initialOwner) {\\n        if (initialOwner == address(0)) {\\n            revert OwnableInvalidOwner(address(0));\\n        }\\n        _transferOwnership(initialOwner);\\n    }\\n\\n    /**\\n     * @dev Throws if called by any account other than the owner.\\n     */\\n    modifier onlyOwner() {\\n        _checkOwner();\\n        _;\\n    }\\n\\n    /**\\n     * @dev Returns the address of the current owner.\\n     */\\n    function owner() public view virtual returns (address) {\\n        return _owner;\\n    }\\n\\n    /**\\n     * @dev Throws if the sender is not the owner.\\n     */\\n    function _checkOwner() internal view virtual {\\n        if (owner() != _msgSender()) {\\n            revert OwnableUnauthorizedAccount(_msgSender());\\n        }\\n    }\\n\\n    /**\\n     * @dev Leaves the contract without owner. It will not be possible to call\\n     * `onlyOwner` functions. Can only be called by the current owner.\\n     *\\n     * NOTE: Renouncing ownership will leave the contract without an owner,\\n     * thereby disabling any functionality that is only available to the owner.\\n     */\\n    function renounceOwnership() public virtual onlyOwner {\\n        _transferOwnership(address(0));\\n    }\\n\\n    /**\\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\\n     * Can only be called by the current owner.\\n     */\\n    function transferOwnership(address newOwner) public virtual onlyOwner {\\n        if (newOwner == address(0)) {\\n            revert OwnableInvalidOwner(address(0));\\n        }\\n        _transferOwnership(newOwner);\\n    }\\n\\n    /**\\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\\n     * Internal function without access restriction.\\n     */\\n    function _transferOwnership(address newOwner) internal virtual {\\n        address oldOwner = _owner;\\n        _owner = newOwner;\\n        emit OwnershipTransferred(oldOwner, newOwner);\\n    }\\n}\\n","keccak256":"0xff6d0bb2e285473e5311d9d3caacb525ae3538a80758c10649a4d61029b017bb","license":"MIT"},"@openzeppelin/contracts/interfaces/IERC1363.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.1.0) (interfaces/IERC1363.sol)\\n\\npragma solidity ^0.8.20;\\n\\nimport {IERC20} from \\"./IERC20.sol\\";\\nimport {IERC165} from \\"./IERC165.sol\\";\\n\\n/**\\n * @title IERC1363\\n * @dev Interface of the ERC-1363 standard as defined in the https://eips.ethereum.org/EIPS/eip-1363[ERC-1363].\\n *\\n * Defines an extension interface for ERC-20 tokens that supports executing code on a recipient contract\\n * after `transfer` or `transferFrom`, or code on a spender contract after `approve`, in a single transaction.\\n */\\ninterface IERC1363 is IERC20, IERC165 {\\n    /*\\n     * Note: the ERC-165 identifier for this interface is 0xb0202a11.\\n     * 0xb0202a11 ===\\n     *   bytes4(keccak256(\'transferAndCall(address,uint256)\')) ^\\n     *   bytes4(keccak256(\'transferAndCall(address,uint256,bytes)\')) ^\\n     *   bytes4(keccak256(\'transferFromAndCall(address,address,uint256)\')) ^\\n     *   bytes4(keccak256(\'transferFromAndCall(address,address,uint256,bytes)\')) ^\\n     *   bytes4(keccak256(\'approveAndCall(address,uint256)\')) ^\\n     *   bytes4(keccak256(\'approveAndCall(address,uint256,bytes)\'))\\n     */\\n\\n    /**\\n     * @dev Moves a `value` amount of tokens from the caller\'s account to `to`\\n     * and then calls {IERC1363Receiver-onTransferReceived} on `to`.\\n     * @param to The address which you want to transfer to.\\n     * @param value The amount of tokens to be transferred.\\n     * @return A boolean value indicating whether the operation succeeded unless throwing.\\n     */\\n    function transferAndCall(address to, uint256 value) external returns (bool);\\n\\n    /**\\n     * @dev Moves a `value` amount of tokens from the caller\'s account to `to`\\n     * and then calls {IERC1363Receiver-onTransferReceived} on `to`.\\n     * @param to The address which you want to transfer to.\\n     * @param value The amount of tokens to be transferred.\\n     * @param data Additional data with no specified format, sent in call to `to`.\\n     * @return A boolean value indicating whether the operation succeeded unless throwing.\\n     */\\n    function transferAndCall(address to, uint256 value, bytes calldata data) external returns (bool);\\n\\n    /**\\n     * @dev Moves a `value` amount of tokens from `from` to `to` using the allowance mechanism\\n     * and then calls {IERC1363Receiver-onTransferReceived} on `to`.\\n     * @param from The address which you want to send tokens from.\\n     * @param to The address which you want to transfer to.\\n     * @param value The amount of tokens to be transferred.\\n     * @return A boolean value indicating whether the operation succeeded unless throwing.\\n     */\\n    function transferFromAndCall(address from, address to, uint256 value) external returns (bool);\\n\\n    /**\\n     * @dev Moves a `value` amount of tokens from `from` to `to` using the allowance mechanism\\n     * and then calls {IERC1363Receiver-onTransferReceived} on `to`.\\n     * @param from The address which you want to send tokens from.\\n     * @param to The address which you want to transfer to.\\n     * @param value The amount of tokens to be transferred.\\n     * @param data Additional data with no specified format, sent in call to `to`.\\n     * @return A boolean value indicating whether the operation succeeded unless throwing.\\n     */\\n    function transferFromAndCall(address from, address to, uint256 value, bytes calldata data) external returns (bool);\\n\\n    /**\\n     * @dev Sets a `value` amount of tokens as the allowance of `spender` over the\\n     * caller\'s tokens and then calls {IERC1363Spender-onApprovalReceived} on `spender`.\\n     * @param spender The address which will spend the funds.\\n     * @param value The amount of tokens to be spent.\\n     * @return A boolean value indicating whether the operation succeeded unless throwing.\\n     */\\n    function approveAndCall(address spender, uint256 value) external returns (bool);\\n\\n    /**\\n     * @dev Sets a `value` amount of tokens as the allowance of `spender` over the\\n     * caller\'s tokens and then calls {IERC1363Spender-onApprovalReceived} on `spender`.\\n     * @param spender The address which will spend the funds.\\n     * @param value The amount of tokens to be spent.\\n     * @param data Additional data with no specified format, sent in call to `spender`.\\n     * @return A boolean value indicating whether the operation succeeded unless throwing.\\n     */\\n    function approveAndCall(address spender, uint256 value, bytes calldata data) external returns (bool);\\n}\\n","keccak256":"0x9b6b3e7803bc5f2f8cd7ad57db8ac1def61a9930a5a3107df4882e028a9605d7","license":"MIT"},"@openzeppelin/contracts/interfaces/IERC165.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.0.0) (interfaces/IERC165.sol)\\n\\npragma solidity ^0.8.20;\\n\\nimport {IERC165} from \\"../utils/introspection/IERC165.sol\\";\\n","keccak256":"0xde7e9fd9aee8d4f40772f96bb3b58836cbc6dfc0227014a061947f8821ea9724","license":"MIT"},"@openzeppelin/contracts/interfaces/IERC20.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.0.0) (interfaces/IERC20.sol)\\n\\npragma solidity ^0.8.20;\\n\\nimport {IERC20} from \\"../token/ERC20/IERC20.sol\\";\\n","keccak256":"0xce41876e78d1badc0512229b4d14e4daf83bc1003d7f83978d18e0e56f965b9c","license":"MIT"},"@openzeppelin/contracts/interfaces/draft-IERC6093.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.1.0) (interfaces/draft-IERC6093.sol)\\npragma solidity ^0.8.20;\\n\\n/**\\n * @dev Standard ERC-20 Errors\\n * Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC-20 tokens.\\n */\\ninterface IERC20Errors {\\n    /**\\n     * @dev Indicates an error related to the current `balance` of a `sender`. Used in transfers.\\n     * @param sender Address whose tokens are being transferred.\\n     * @param balance Current balance for the interacting account.\\n     * @param needed Minimum amount required to perform a transfer.\\n     */\\n    error ERC20InsufficientBalance(address sender, uint256 balance, uint256 needed);\\n\\n    /**\\n     * @dev Indicates a failure with the token `sender`. Used in transfers.\\n     * @param sender Address whose tokens are being transferred.\\n     */\\n    error ERC20InvalidSender(address sender);\\n\\n    /**\\n     * @dev Indicates a failure with the token `receiver`. Used in transfers.\\n     * @param receiver Address to which tokens are being transferred.\\n     */\\n    error ERC20InvalidReceiver(address receiver);\\n\\n    /**\\n     * @dev Indicates a failure with the `spender`\\u2019s `allowance`. Used in transfers.\\n     * @param spender Address that may be allowed to operate on tokens without being their owner.\\n     * @param allowance Amount of tokens a `spender` is allowed to operate with.\\n     * @param needed Minimum amount required to perform a transfer.\\n     */\\n    error ERC20InsufficientAllowance(address spender, uint256 allowance, uint256 needed);\\n\\n    /**\\n     * @dev Indicates a failure with the `approver` of a token to be approved. Used in approvals.\\n     * @param approver Address initiating an approval operation.\\n     */\\n    error ERC20InvalidApprover(address approver);\\n\\n    /**\\n     * @dev Indicates a failure with the `spender` to be approved. Used in approvals.\\n     * @param spender Address that may be allowed to operate on tokens without being their owner.\\n     */\\n    error ERC20InvalidSpender(address spender);\\n}\\n\\n/**\\n * @dev Standard ERC-721 Errors\\n * Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC-721 tokens.\\n */\\ninterface IERC721Errors {\\n    /**\\n     * @dev Indicates that an address can\'t be an owner. For example, `address(0)` is a forbidden owner in ERC-20.\\n     * Used in balance queries.\\n     * @param owner Address of the current owner of a token.\\n     */\\n    error ERC721InvalidOwner(address owner);\\n\\n    /**\\n     * @dev Indicates a `tokenId` whose `owner` is the zero address.\\n     * @param tokenId Identifier number of a token.\\n     */\\n    error ERC721NonexistentToken(uint256 tokenId);\\n\\n    /**\\n     * @dev Indicates an error related to the ownership over a particular token. Used in transfers.\\n     * @param sender Address whose tokens are being transferred.\\n     * @param tokenId Identifier number of a token.\\n     * @param owner Address of the current owner of a token.\\n     */\\n    error ERC721IncorrectOwner(address sender, uint256 tokenId, address owner);\\n\\n    /**\\n     * @dev Indicates a failure with the token `sender`. Used in transfers.\\n     * @param sender Address whose tokens are being transferred.\\n     */\\n    error ERC721InvalidSender(address sender);\\n\\n    /**\\n     * @dev Indicates a failure with the token `receiver`. Used in transfers.\\n     * @param receiver Address to which tokens are being transferred.\\n     */\\n    error ERC721InvalidReceiver(address receiver);\\n\\n    /**\\n     * @dev Indicates a failure with the `operator`\\u2019s approval. Used in transfers.\\n     * @param operator Address that may be allowed to operate on tokens without being their owner.\\n     * @param tokenId Identifier number of a token.\\n     */\\n    error ERC721InsufficientApproval(address operator, uint256 tokenId);\\n\\n    /**\\n     * @dev Indicates a failure with the `approver` of a token to be approved. Used in approvals.\\n     * @param approver Address initiating an approval operation.\\n     */\\n    error ERC721InvalidApprover(address approver);\\n\\n    /**\\n     * @dev Indicates a failure with the `operator` to be approved. Used in approvals.\\n     * @param operator Address that may be allowed to operate on tokens without being their owner.\\n     */\\n    error ERC721InvalidOperator(address operator);\\n}\\n\\n/**\\n * @dev Standard ERC-1155 Errors\\n * Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC-1155 tokens.\\n */\\ninterface IERC1155Errors {\\n    /**\\n     * @dev Indicates an error related to the current `balance` of a `sender`. Used in transfers.\\n     * @param sender Address whose tokens are being transferred.\\n     * @param balance Current balance for the interacting account.\\n     * @param needed Minimum amount required to perform a transfer.\\n     * @param tokenId Identifier number of a token.\\n     */\\n    error ERC1155InsufficientBalance(address sender, uint256 balance, uint256 needed, uint256 tokenId);\\n\\n    /**\\n     * @dev Indicates a failure with the token `sender`. Used in transfers.\\n     * @param sender Address whose tokens are being transferred.\\n     */\\n    error ERC1155InvalidSender(address sender);\\n\\n    /**\\n     * @dev Indicates a failure with the token `receiver`. Used in transfers.\\n     * @param receiver Address to which tokens are being transferred.\\n     */\\n    error ERC1155InvalidReceiver(address receiver);\\n\\n    /**\\n     * @dev Indicates a failure with the `operator`\\u2019s approval. Used in transfers.\\n     * @param operator Address that may be allowed to operate on tokens without being their owner.\\n     * @param owner Address of the current owner of a token.\\n     */\\n    error ERC1155MissingApprovalForAll(address operator, address owner);\\n\\n    /**\\n     * @dev Indicates a failure with the `approver` of a token to be approved. Used in approvals.\\n     * @param approver Address initiating an approval operation.\\n     */\\n    error ERC1155InvalidApprover(address approver);\\n\\n    /**\\n     * @dev Indicates a failure with the `operator` to be approved. Used in approvals.\\n     * @param operator Address that may be allowed to operate on tokens without being their owner.\\n     */\\n    error ERC1155InvalidOperator(address operator);\\n\\n    /**\\n     * @dev Indicates an array length mismatch between ids and values in a safeBatchTransferFrom operation.\\n     * Used in batch transfers.\\n     * @param idsLength Length of the array of token identifiers\\n     * @param valuesLength Length of the array of token amounts\\n     */\\n    error ERC1155InvalidArrayLength(uint256 idsLength, uint256 valuesLength);\\n}\\n","keccak256":"0x880da465c203cec76b10d72dbd87c80f387df4102274f23eea1f9c9b0918792b","license":"MIT"},"@openzeppelin/contracts/token/ERC20/ERC20.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.1.0) (token/ERC20/ERC20.sol)\\n\\npragma solidity ^0.8.20;\\n\\nimport {IERC20} from \\"./IERC20.sol\\";\\nimport {IERC20Metadata} from \\"./extensions/IERC20Metadata.sol\\";\\nimport {Context} from \\"../../utils/Context.sol\\";\\nimport {IERC20Errors} from \\"../../interfaces/draft-IERC6093.sol\\";\\n\\n/**\\n * @dev Implementation of the {IERC20} interface.\\n *\\n * This implementation is agnostic to the way tokens are created. This means\\n * that a supply mechanism has to be added in a derived contract using {_mint}.\\n *\\n * TIP: For a detailed writeup see our guide\\n * https://forum.openzeppelin.com/t/how-to-implement-erc20-supply-mechanisms/226[How\\n * to implement supply mechanisms].\\n *\\n * The default value of {decimals} is 18. To change this, you should override\\n * this function so it returns a different value.\\n *\\n * We have followed general OpenZeppelin Contracts guidelines: functions revert\\n * instead returning `false` on failure. This behavior is nonetheless\\n * conventional and does not conflict with the expectations of ERC-20\\n * applications.\\n */\\nabstract contract ERC20 is Context, IERC20, IERC20Metadata, IERC20Errors {\\n    mapping(address account => uint256) private _balances;\\n\\n    mapping(address account => mapping(address spender => uint256)) private _allowances;\\n\\n    uint256 private _totalSupply;\\n\\n    string private _name;\\n    string private _symbol;\\n\\n    /**\\n     * @dev Sets the values for {name} and {symbol}.\\n     *\\n     * All two of these values are immutable: they can only be set once during\\n     * construction.\\n     */\\n    constructor(string memory name_, string memory symbol_) {\\n        _name = name_;\\n        _symbol = symbol_;\\n    }\\n\\n    /**\\n     * @dev Returns the name of the token.\\n     */\\n    function name() public view virtual returns (string memory) {\\n        return _name;\\n    }\\n\\n    /**\\n     * @dev Returns the symbol of the token, usually a shorter version of the\\n     * name.\\n     */\\n    function symbol() public view virtual returns (string memory) {\\n        return _symbol;\\n    }\\n\\n    /**\\n     * @dev Returns the number of decimals used to get its user representation.\\n     * For example, if `decimals` equals `2`, a balance of `505` tokens should\\n     * be displayed to a user as `5.05` (`505 / 10 ** 2`).\\n     *\\n     * Tokens usually opt for a value of 18, imitating the relationship between\\n     * Ether and Wei. This is the default value returned by this function, unless\\n     * it\'s overridden.\\n     *\\n     * NOTE: This information is only used for _display_ purposes: it in\\n     * no way affects any of the arithmetic of the contract, including\\n     * {IERC20-balanceOf} and {IERC20-transfer}.\\n     */\\n    function decimals() public view virtual returns (uint8) {\\n        return 18;\\n    }\\n\\n    /**\\n     * @dev See {IERC20-totalSupply}.\\n     */\\n    function totalSupply() public view virtual returns (uint256) {\\n        return _totalSupply;\\n    }\\n\\n    /**\\n     * @dev See {IERC20-balanceOf}.\\n     */\\n    function balanceOf(address account) public view virtual returns (uint256) {\\n        return _balances[account];\\n    }\\n\\n    /**\\n     * @dev See {IERC20-transfer}.\\n     *\\n     * Requirements:\\n     *\\n     * - `to` cannot be the zero address.\\n     * - the caller must have a balance of at least `value`.\\n     */\\n    function transfer(address to, uint256 value) public virtual returns (bool) {\\n        address owner = _msgSender();\\n        _transfer(owner, to, value);\\n        return true;\\n    }\\n\\n    /**\\n     * @dev See {IERC20-allowance}.\\n     */\\n    function allowance(address owner, address spender) public view virtual returns (uint256) {\\n        return _allowances[owner][spender];\\n    }\\n\\n    /**\\n     * @dev See {IERC20-approve}.\\n     *\\n     * NOTE: If `value` is the maximum `uint256`, the allowance is not updated on\\n     * `transferFrom`. This is semantically equivalent to an infinite approval.\\n     *\\n     * Requirements:\\n     *\\n     * - `spender` cannot be the zero address.\\n     */\\n    function approve(address spender, uint256 value) public virtual returns (bool) {\\n        address owner = _msgSender();\\n        _approve(owner, spender, value);\\n        return true;\\n    }\\n\\n    /**\\n     * @dev See {IERC20-transferFrom}.\\n     *\\n     * Skips emitting an {Approval} event indicating an allowance update. This is not\\n     * required by the ERC. See {xref-ERC20-_approve-address-address-uint256-bool-}[_approve].\\n     *\\n     * NOTE: Does not update the allowance if the current allowance\\n     * is the maximum `uint256`.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` and `to` cannot be the zero address.\\n     * - `from` must have a balance of at least `value`.\\n     * - the caller must have allowance for ``from``\'s tokens of at least\\n     * `value`.\\n     */\\n    function transferFrom(address from, address to, uint256 value) public virtual returns (bool) {\\n        address spender = _msgSender();\\n        _spendAllowance(from, spender, value);\\n        _transfer(from, to, value);\\n        return true;\\n    }\\n\\n    /**\\n     * @dev Moves a `value` amount of tokens from `from` to `to`.\\n     *\\n     * This internal function is equivalent to {transfer}, and can be used to\\n     * e.g. implement automatic token fees, slashing mechanisms, etc.\\n     *\\n     * Emits a {Transfer} event.\\n     *\\n     * NOTE: This function is not virtual, {_update} should be overridden instead.\\n     */\\n    function _transfer(address from, address to, uint256 value) internal {\\n        if (from == address(0)) {\\n            revert ERC20InvalidSender(address(0));\\n        }\\n        if (to == address(0)) {\\n            revert ERC20InvalidReceiver(address(0));\\n        }\\n        _update(from, to, value);\\n    }\\n\\n    /**\\n     * @dev Transfers a `value` amount of tokens from `from` to `to`, or alternatively mints (or burns) if `from`\\n     * (or `to`) is the zero address. All customizations to transfers, mints, and burns should be done by overriding\\n     * this function.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function _update(address from, address to, uint256 value) internal virtual {\\n        if (from == address(0)) {\\n            // Overflow check required: The rest of the code assumes that totalSupply never overflows\\n            _totalSupply += value;\\n        } else {\\n            uint256 fromBalance = _balances[from];\\n            if (fromBalance < value) {\\n                revert ERC20InsufficientBalance(from, fromBalance, value);\\n            }\\n            unchecked {\\n                // Overflow not possible: value <= fromBalance <= totalSupply.\\n                _balances[from] = fromBalance - value;\\n            }\\n        }\\n\\n        if (to == address(0)) {\\n            unchecked {\\n                // Overflow not possible: value <= totalSupply or value <= fromBalance <= totalSupply.\\n                _totalSupply -= value;\\n            }\\n        } else {\\n            unchecked {\\n                // Overflow not possible: balance + value is at most totalSupply, which we know fits into a uint256.\\n                _balances[to] += value;\\n            }\\n        }\\n\\n        emit Transfer(from, to, value);\\n    }\\n\\n    /**\\n     * @dev Creates a `value` amount of tokens and assigns them to `account`, by transferring it from address(0).\\n     * Relies on the `_update` mechanism\\n     *\\n     * Emits a {Transfer} event with `from` set to the zero address.\\n     *\\n     * NOTE: This function is not virtual, {_update} should be overridden instead.\\n     */\\n    function _mint(address account, uint256 value) internal {\\n        if (account == address(0)) {\\n            revert ERC20InvalidReceiver(address(0));\\n        }\\n        _update(address(0), account, value);\\n    }\\n\\n    /**\\n     * @dev Destroys a `value` amount of tokens from `account`, lowering the total supply.\\n     * Relies on the `_update` mechanism.\\n     *\\n     * Emits a {Transfer} event with `to` set to the zero address.\\n     *\\n     * NOTE: This function is not virtual, {_update} should be overridden instead\\n     */\\n    function _burn(address account, uint256 value) internal {\\n        if (account == address(0)) {\\n            revert ERC20InvalidSender(address(0));\\n        }\\n        _update(account, address(0), value);\\n    }\\n\\n    /**\\n     * @dev Sets `value` as the allowance of `spender` over the `owner` s tokens.\\n     *\\n     * This internal function is equivalent to `approve`, and can be used to\\n     * e.g. set automatic allowances for certain subsystems, etc.\\n     *\\n     * Emits an {Approval} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `owner` cannot be the zero address.\\n     * - `spender` cannot be the zero address.\\n     *\\n     * Overrides to this logic should be done to the variant with an additional `bool emitEvent` argument.\\n     */\\n    function _approve(address owner, address spender, uint256 value) internal {\\n        _approve(owner, spender, value, true);\\n    }\\n\\n    /**\\n     * @dev Variant of {_approve} with an optional flag to enable or disable the {Approval} event.\\n     *\\n     * By default (when calling {_approve}) the flag is set to true. On the other hand, approval changes made by\\n     * `_spendAllowance` during the `transferFrom` operation set the flag to false. This saves gas by not emitting any\\n     * `Approval` event during `transferFrom` operations.\\n     *\\n     * Anyone who wishes to continue emitting `Approval` events on the`transferFrom` operation can force the flag to\\n     * true using the following override:\\n     *\\n     * ```solidity\\n     * function _approve(address owner, address spender, uint256 value, bool) internal virtual override {\\n     *     super._approve(owner, spender, value, true);\\n     * }\\n     * ```\\n     *\\n     * Requirements are the same as {_approve}.\\n     */\\n    function _approve(address owner, address spender, uint256 value, bool emitEvent) internal virtual {\\n        if (owner == address(0)) {\\n            revert ERC20InvalidApprover(address(0));\\n        }\\n        if (spender == address(0)) {\\n            revert ERC20InvalidSpender(address(0));\\n        }\\n        _allowances[owner][spender] = value;\\n        if (emitEvent) {\\n            emit Approval(owner, spender, value);\\n        }\\n    }\\n\\n    /**\\n     * @dev Updates `owner` s allowance for `spender` based on spent `value`.\\n     *\\n     * Does not update the allowance value in case of infinite allowance.\\n     * Revert if not enough allowance is available.\\n     *\\n     * Does not emit an {Approval} event.\\n     */\\n    function _spendAllowance(address owner, address spender, uint256 value) internal virtual {\\n        uint256 currentAllowance = allowance(owner, spender);\\n        if (currentAllowance != type(uint256).max) {\\n            if (currentAllowance < value) {\\n                revert ERC20InsufficientAllowance(spender, currentAllowance, value);\\n            }\\n            unchecked {\\n                _approve(owner, spender, currentAllowance - value, false);\\n            }\\n        }\\n    }\\n}\\n","keccak256":"0xbf61ab2ae1d575a17ea58fbb99ca232baddcc4e0eeea180e84cbc74b0c348b31","license":"MIT"},"@openzeppelin/contracts/token/ERC20/IERC20.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.1.0) (token/ERC20/IERC20.sol)\\n\\npragma solidity ^0.8.20;\\n\\n/**\\n * @dev Interface of the ERC-20 standard as defined in the ERC.\\n */\\ninterface IERC20 {\\n    /**\\n     * @dev Emitted when `value` tokens are moved from one account (`from`) to\\n     * another (`to`).\\n     *\\n     * Note that `value` may be zero.\\n     */\\n    event Transfer(address indexed from, address indexed to, uint256 value);\\n\\n    /**\\n     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\\n     * a call to {approve}. `value` is the new allowance.\\n     */\\n    event Approval(address indexed owner, address indexed spender, uint256 value);\\n\\n    /**\\n     * @dev Returns the value of tokens in existence.\\n     */\\n    function totalSupply() external view returns (uint256);\\n\\n    /**\\n     * @dev Returns the value of tokens owned by `account`.\\n     */\\n    function balanceOf(address account) external view returns (uint256);\\n\\n    /**\\n     * @dev Moves a `value` amount of tokens from the caller\'s account to `to`.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transfer(address to, uint256 value) external returns (bool);\\n\\n    /**\\n     * @dev Returns the remaining number of tokens that `spender` will be\\n     * allowed to spend on behalf of `owner` through {transferFrom}. This is\\n     * zero by default.\\n     *\\n     * This value changes when {approve} or {transferFrom} are called.\\n     */\\n    function allowance(address owner, address spender) external view returns (uint256);\\n\\n    /**\\n     * @dev Sets a `value` amount of tokens as the allowance of `spender` over the\\n     * caller\'s tokens.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\\n     * that someone may use both the old and the new allowance by unfortunate\\n     * transaction ordering. One possible solution to mitigate this race\\n     * condition is to first reduce the spender\'s allowance to 0 and set the\\n     * desired value afterwards:\\n     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\\n     *\\n     * Emits an {Approval} event.\\n     */\\n    function approve(address spender, uint256 value) external returns (bool);\\n\\n    /**\\n     * @dev Moves a `value` amount of tokens from `from` to `to` using the\\n     * allowance mechanism. `value` is then deducted from the caller\'s\\n     * allowance.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transferFrom(address from, address to, uint256 value) external returns (bool);\\n}\\n","keccak256":"0xe06a3f08a987af6ad2e1c1e774405d4fe08f1694b67517438b467cecf0da0ef7","license":"MIT"},"@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.1.0) (token/ERC20/extensions/IERC20Metadata.sol)\\n\\npragma solidity ^0.8.20;\\n\\nimport {IERC20} from \\"../IERC20.sol\\";\\n\\n/**\\n * @dev Interface for the optional metadata functions from the ERC-20 standard.\\n */\\ninterface IERC20Metadata is IERC20 {\\n    /**\\n     * @dev Returns the name of the token.\\n     */\\n    function name() external view returns (string memory);\\n\\n    /**\\n     * @dev Returns the symbol of the token.\\n     */\\n    function symbol() external view returns (string memory);\\n\\n    /**\\n     * @dev Returns the decimals places of the token.\\n     */\\n    function decimals() external view returns (uint8);\\n}\\n","keccak256":"0x70f2f713b13b7ce4610bcd0ac9fec0f3cc43693b043abcb8dc40a42a726eb330","license":"MIT"},"@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.1.0) (token/ERC20/utils/SafeERC20.sol)\\n\\npragma solidity ^0.8.20;\\n\\nimport {IERC20} from \\"../IERC20.sol\\";\\nimport {IERC1363} from \\"../../../interfaces/IERC1363.sol\\";\\nimport {Address} from \\"../../../utils/Address.sol\\";\\n\\n/**\\n * @title SafeERC20\\n * @dev Wrappers around ERC-20 operations that throw on failure (when the token\\n * contract returns false). Tokens that return no value (and instead revert or\\n * throw on failure) are also supported, non-reverting calls are assumed to be\\n * successful.\\n * To use this library you can add a `using SafeERC20 for IERC20;` statement to your contract,\\n * which allows you to call the safe operations as `token.safeTransfer(...)`, etc.\\n */\\nlibrary SafeERC20 {\\n    /**\\n     * @dev An operation with an ERC-20 token failed.\\n     */\\n    error SafeERC20FailedOperation(address token);\\n\\n    /**\\n     * @dev Indicates a failed `decreaseAllowance` request.\\n     */\\n    error SafeERC20FailedDecreaseAllowance(address spender, uint256 currentAllowance, uint256 requestedDecrease);\\n\\n    /**\\n     * @dev Transfer `value` amount of `token` from the calling contract to `to`. If `token` returns no value,\\n     * non-reverting calls are assumed to be successful.\\n     */\\n    function safeTransfer(IERC20 token, address to, uint256 value) internal {\\n        _callOptionalReturn(token, abi.encodeCall(token.transfer, (to, value)));\\n    }\\n\\n    /**\\n     * @dev Transfer `value` amount of `token` from `from` to `to`, spending the approval given by `from` to the\\n     * calling contract. If `token` returns no value, non-reverting calls are assumed to be successful.\\n     */\\n    function safeTransferFrom(IERC20 token, address from, address to, uint256 value) internal {\\n        _callOptionalReturn(token, abi.encodeCall(token.transferFrom, (from, to, value)));\\n    }\\n\\n    /**\\n     * @dev Increase the calling contract\'s allowance toward `spender` by `value`. If `token` returns no value,\\n     * non-reverting calls are assumed to be successful.\\n     *\\n     * IMPORTANT: If the token implements ERC-7674 (ERC-20 with temporary allowance), and if the \\"client\\"\\n     * smart contract uses ERC-7674 to set temporary allowances, then the \\"client\\" smart contract should avoid using\\n     * this function. Performing a {safeIncreaseAllowance} or {safeDecreaseAllowance} operation on a token contract\\n     * that has a non-zero temporary allowance (for that particular owner-spender) will result in unexpected behavior.\\n     */\\n    function safeIncreaseAllowance(IERC20 token, address spender, uint256 value) internal {\\n        uint256 oldAllowance = token.allowance(address(this), spender);\\n        forceApprove(token, spender, oldAllowance + value);\\n    }\\n\\n    /**\\n     * @dev Decrease the calling contract\'s allowance toward `spender` by `requestedDecrease`. If `token` returns no\\n     * value, non-reverting calls are assumed to be successful.\\n     *\\n     * IMPORTANT: If the token implements ERC-7674 (ERC-20 with temporary allowance), and if the \\"client\\"\\n     * smart contract uses ERC-7674 to set temporary allowances, then the \\"client\\" smart contract should avoid using\\n     * this function. Performing a {safeIncreaseAllowance} or {safeDecreaseAllowance} operation on a token contract\\n     * that has a non-zero temporary allowance (for that particular owner-spender) will result in unexpected behavior.\\n     */\\n    function safeDecreaseAllowance(IERC20 token, address spender, uint256 requestedDecrease) internal {\\n        unchecked {\\n            uint256 currentAllowance = token.allowance(address(this), spender);\\n            if (currentAllowance < requestedDecrease) {\\n                revert SafeERC20FailedDecreaseAllowance(spender, currentAllowance, requestedDecrease);\\n            }\\n            forceApprove(token, spender, currentAllowance - requestedDecrease);\\n        }\\n    }\\n\\n    /**\\n     * @dev Set the calling contract\'s allowance toward `spender` to `value`. If `token` returns no value,\\n     * non-reverting calls are assumed to be successful. Meant to be used with tokens that require the approval\\n     * to be set to zero before setting it to a non-zero value, such as USDT.\\n     *\\n     * NOTE: If the token implements ERC-7674, this function will not modify any temporary allowance. This function\\n     * only sets the \\"standard\\" allowance. Any temporary allowance will remain active, in addition to the value being\\n     * set here.\\n     */\\n    function forceApprove(IERC20 token, address spender, uint256 value) internal {\\n        bytes memory approvalCall = abi.encodeCall(token.approve, (spender, value));\\n\\n        if (!_callOptionalReturnBool(token, approvalCall)) {\\n            _callOptionalReturn(token, abi.encodeCall(token.approve, (spender, 0)));\\n            _callOptionalReturn(token, approvalCall);\\n        }\\n    }\\n\\n    /**\\n     * @dev Performs an {ERC1363} transferAndCall, with a fallback to the simple {ERC20} transfer if the target has no\\n     * code. This can be used to implement an {ERC721}-like safe transfer that rely on {ERC1363} checks when\\n     * targeting contracts.\\n     *\\n     * Reverts if the returned value is other than `true`.\\n     */\\n    function transferAndCallRelaxed(IERC1363 token, address to, uint256 value, bytes memory data) internal {\\n        if (to.code.length == 0) {\\n            safeTransfer(token, to, value);\\n        } else if (!token.transferAndCall(to, value, data)) {\\n            revert SafeERC20FailedOperation(address(token));\\n        }\\n    }\\n\\n    /**\\n     * @dev Performs an {ERC1363} transferFromAndCall, with a fallback to the simple {ERC20} transferFrom if the target\\n     * has no code. This can be used to implement an {ERC721}-like safe transfer that rely on {ERC1363} checks when\\n     * targeting contracts.\\n     *\\n     * Reverts if the returned value is other than `true`.\\n     */\\n    function transferFromAndCallRelaxed(\\n        IERC1363 token,\\n        address from,\\n        address to,\\n        uint256 value,\\n        bytes memory data\\n    ) internal {\\n        if (to.code.length == 0) {\\n            safeTransferFrom(token, from, to, value);\\n        } else if (!token.transferFromAndCall(from, to, value, data)) {\\n            revert SafeERC20FailedOperation(address(token));\\n        }\\n    }\\n\\n    /**\\n     * @dev Performs an {ERC1363} approveAndCall, with a fallback to the simple {ERC20} approve if the target has no\\n     * code. This can be used to implement an {ERC721}-like safe transfer that rely on {ERC1363} checks when\\n     * targeting contracts.\\n     *\\n     * NOTE: When the recipient address (`to`) has no code (i.e. is an EOA), this function behaves as {forceApprove}.\\n     * Opposedly, when the recipient address (`to`) has code, this function only attempts to call {ERC1363-approveAndCall}\\n     * once without retrying, and relies on the returned value to be true.\\n     *\\n     * Reverts if the returned value is other than `true`.\\n     */\\n    function approveAndCallRelaxed(IERC1363 token, address to, uint256 value, bytes memory data) internal {\\n        if (to.code.length == 0) {\\n            forceApprove(token, to, value);\\n        } else if (!token.approveAndCall(to, value, data)) {\\n            revert SafeERC20FailedOperation(address(token));\\n        }\\n    }\\n\\n    /**\\n     * @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement\\n     * on the return value: the return value is optional (but if data is returned, it must not be false).\\n     * @param token The token targeted by the call.\\n     * @param data The call data (encoded using abi.encode or one of its variants).\\n     *\\n     * This is a variant of {_callOptionalReturnBool} that reverts if call fails to meet the requirements.\\n     */\\n    function _callOptionalReturn(IERC20 token, bytes memory data) private {\\n        uint256 returnSize;\\n        uint256 returnValue;\\n        assembly (\\"memory-safe\\") {\\n            let success := call(gas(), token, 0, add(data, 0x20), mload(data), 0, 0x20)\\n            // bubble errors\\n            if iszero(success) {\\n                let ptr := mload(0x40)\\n                returndatacopy(ptr, 0, returndatasize())\\n                revert(ptr, returndatasize())\\n            }\\n            returnSize := returndatasize()\\n            returnValue := mload(0)\\n        }\\n\\n        if (returnSize == 0 ? address(token).code.length == 0 : returnValue != 1) {\\n            revert SafeERC20FailedOperation(address(token));\\n        }\\n    }\\n\\n    /**\\n     * @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement\\n     * on the return value: the return value is optional (but if data is returned, it must not be false).\\n     * @param token The token targeted by the call.\\n     * @param data The call data (encoded using abi.encode or one of its variants).\\n     *\\n     * This is a variant of {_callOptionalReturn} that silently catches all reverts and returns a bool instead.\\n     */\\n    function _callOptionalReturnBool(IERC20 token, bytes memory data) private returns (bool) {\\n        bool success;\\n        uint256 returnSize;\\n        uint256 returnValue;\\n        assembly (\\"memory-safe\\") {\\n            success := call(gas(), token, 0, add(data, 0x20), mload(data), 0, 0x20)\\n            returnSize := returndatasize()\\n            returnValue := mload(0)\\n        }\\n        return success && (returnSize == 0 ? address(token).code.length > 0 : returnValue == 1);\\n    }\\n}\\n","keccak256":"0xca2ae13e0610f6a99238dd00b97bd786bc92732dae6d6b9d61f573ec51018310","license":"MIT"},"@openzeppelin/contracts/utils/Address.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.1.0) (utils/Address.sol)\\n\\npragma solidity ^0.8.20;\\n\\nimport {Errors} from \\"./Errors.sol\\";\\n\\n/**\\n * @dev Collection of functions related to the address type\\n */\\nlibrary Address {\\n    /**\\n     * @dev There\'s no code at `target` (it is not a contract).\\n     */\\n    error AddressEmptyCode(address target);\\n\\n    /**\\n     * @dev Replacement for Solidity\'s `transfer`: sends `amount` wei to\\n     * `recipient`, forwarding all available gas and reverting on errors.\\n     *\\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\\n     * imposed by `transfer`, making them unable to receive funds via\\n     * `transfer`. {sendValue} removes this limitation.\\n     *\\n     * https://consensys.net/diligence/blog/2019/09/stop-using-soliditys-transfer-now/[Learn more].\\n     *\\n     * IMPORTANT: because control is transferred to `recipient`, care must be\\n     * taken to not create reentrancy vulnerabilities. Consider using\\n     * {ReentrancyGuard} or the\\n     * https://solidity.readthedocs.io/en/v0.8.20/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\\n     */\\n    function sendValue(address payable recipient, uint256 amount) internal {\\n        if (address(this).balance < amount) {\\n            revert Errors.InsufficientBalance(address(this).balance, amount);\\n        }\\n\\n        (bool success, ) = recipient.call{value: amount}(\\"\\");\\n        if (!success) {\\n            revert Errors.FailedCall();\\n        }\\n    }\\n\\n    /**\\n     * @dev Performs a Solidity function call using a low level `call`. A\\n     * plain `call` is an unsafe replacement for a function call: use this\\n     * function instead.\\n     *\\n     * If `target` reverts with a revert reason or custom error, it is bubbled\\n     * up by this function (like regular Solidity function calls). However, if\\n     * the call reverted with no returned reason, this function reverts with a\\n     * {Errors.FailedCall} error.\\n     *\\n     * Returns the raw returned data. To convert to the expected return value,\\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\\n     *\\n     * Requirements:\\n     *\\n     * - `target` must be a contract.\\n     * - calling `target` with `data` must not revert.\\n     */\\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, 0);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but also transferring `value` wei to `target`.\\n     *\\n     * Requirements:\\n     *\\n     * - the calling contract must have an ETH balance of at least `value`.\\n     * - the called Solidity function must be `payable`.\\n     */\\n    function functionCallWithValue(address target, bytes memory data, uint256 value) internal returns (bytes memory) {\\n        if (address(this).balance < value) {\\n            revert Errors.InsufficientBalance(address(this).balance, value);\\n        }\\n        (bool success, bytes memory returndata) = target.call{value: value}(data);\\n        return verifyCallResultFromTarget(target, success, returndata);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a static call.\\n     */\\n    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\\n        (bool success, bytes memory returndata) = target.staticcall(data);\\n        return verifyCallResultFromTarget(target, success, returndata);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a delegate call.\\n     */\\n    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {\\n        (bool success, bytes memory returndata) = target.delegatecall(data);\\n        return verifyCallResultFromTarget(target, success, returndata);\\n    }\\n\\n    /**\\n     * @dev Tool to verify that a low level call to smart-contract was successful, and reverts if the target\\n     * was not a contract or bubbling up the revert reason (falling back to {Errors.FailedCall}) in case\\n     * of an unsuccessful call.\\n     */\\n    function verifyCallResultFromTarget(\\n        address target,\\n        bool success,\\n        bytes memory returndata\\n    ) internal view returns (bytes memory) {\\n        if (!success) {\\n            _revert(returndata);\\n        } else {\\n            // only check if target is a contract if the call was successful and the return data is empty\\n            // otherwise we already know that it was a contract\\n            if (returndata.length == 0 && target.code.length == 0) {\\n                revert AddressEmptyCode(target);\\n            }\\n            return returndata;\\n        }\\n    }\\n\\n    /**\\n     * @dev Tool to verify that a low level call was successful, and reverts if it wasn\'t, either by bubbling the\\n     * revert reason or with a default {Errors.FailedCall} error.\\n     */\\n    function verifyCallResult(bool success, bytes memory returndata) internal pure returns (bytes memory) {\\n        if (!success) {\\n            _revert(returndata);\\n        } else {\\n            return returndata;\\n        }\\n    }\\n\\n    /**\\n     * @dev Reverts with returndata if present. Otherwise reverts with {Errors.FailedCall}.\\n     */\\n    function _revert(bytes memory returndata) private pure {\\n        // Look for revert reason and bubble it up if present\\n        if (returndata.length > 0) {\\n            // The easiest way to bubble the revert reason is using memory via assembly\\n            assembly (\\"memory-safe\\") {\\n                let returndata_size := mload(returndata)\\n                revert(add(32, returndata), returndata_size)\\n            }\\n        } else {\\n            revert Errors.FailedCall();\\n        }\\n    }\\n}\\n","keccak256":"0x9d8da059267bac779a2dbbb9a26c2acf00ca83085e105d62d5d4ef96054a47f5","license":"MIT"},"@openzeppelin/contracts/utils/Context.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.0.1) (utils/Context.sol)\\n\\npragma solidity ^0.8.20;\\n\\n/**\\n * @dev Provides information about the current execution context, including the\\n * sender of the transaction and its data. While these are generally available\\n * via msg.sender and msg.data, they should not be accessed in such a direct\\n * manner, since when dealing with meta-transactions the account sending and\\n * paying for execution may not be the actual sender (as far as an application\\n * is concerned).\\n *\\n * This contract is only required for intermediate, library-like contracts.\\n */\\nabstract contract Context {\\n    function _msgSender() internal view virtual returns (address) {\\n        return msg.sender;\\n    }\\n\\n    function _msgData() internal view virtual returns (bytes calldata) {\\n        return msg.data;\\n    }\\n\\n    function _contextSuffixLength() internal view virtual returns (uint256) {\\n        return 0;\\n    }\\n}\\n","keccak256":"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2","license":"MIT"},"@openzeppelin/contracts/utils/Errors.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.1.0) (utils/Errors.sol)\\n\\npragma solidity ^0.8.20;\\n\\n/**\\n * @dev Collection of common custom errors used in multiple contracts\\n *\\n * IMPORTANT: Backwards compatibility is not guaranteed in future versions of the library.\\n * It is recommended to avoid relying on the error API for critical functionality.\\n *\\n * _Available since v5.1._\\n */\\nlibrary Errors {\\n    /**\\n     * @dev The ETH balance of the account is not enough to perform the operation.\\n     */\\n    error InsufficientBalance(uint256 balance, uint256 needed);\\n\\n    /**\\n     * @dev A call to an address target failed. The target may have reverted.\\n     */\\n    error FailedCall();\\n\\n    /**\\n     * @dev The deployment failed.\\n     */\\n    error FailedDeployment();\\n\\n    /**\\n     * @dev A necessary precompile is missing.\\n     */\\n    error MissingPrecompile(address);\\n}\\n","keccak256":"0x6afa713bfd42cf0f7656efa91201007ac465e42049d7de1d50753a373648c123","license":"MIT"},"@openzeppelin/contracts/utils/Pausable.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.0.0) (utils/Pausable.sol)\\n\\npragma solidity ^0.8.20;\\n\\nimport {Context} from \\"../utils/Context.sol\\";\\n\\n/**\\n * @dev Contract module which allows children to implement an emergency stop\\n * mechanism that can be triggered by an authorized account.\\n *\\n * This module is used through inheritance. It will make available the\\n * modifiers `whenNotPaused` and `whenPaused`, which can be applied to\\n * the functions of your contract. Note that they will not be pausable by\\n * simply including this module, only once the modifiers are put in place.\\n */\\nabstract contract Pausable is Context {\\n    bool private _paused;\\n\\n    /**\\n     * @dev Emitted when the pause is triggered by `account`.\\n     */\\n    event Paused(address account);\\n\\n    /**\\n     * @dev Emitted when the pause is lifted by `account`.\\n     */\\n    event Unpaused(address account);\\n\\n    /**\\n     * @dev The operation failed because the contract is paused.\\n     */\\n    error EnforcedPause();\\n\\n    /**\\n     * @dev The operation failed because the contract is not paused.\\n     */\\n    error ExpectedPause();\\n\\n    /**\\n     * @dev Initializes the contract in unpaused state.\\n     */\\n    constructor() {\\n        _paused = false;\\n    }\\n\\n    /**\\n     * @dev Modifier to make a function callable only when the contract is not paused.\\n     *\\n     * Requirements:\\n     *\\n     * - The contract must not be paused.\\n     */\\n    modifier whenNotPaused() {\\n        _requireNotPaused();\\n        _;\\n    }\\n\\n    /**\\n     * @dev Modifier to make a function callable only when the contract is paused.\\n     *\\n     * Requirements:\\n     *\\n     * - The contract must be paused.\\n     */\\n    modifier whenPaused() {\\n        _requirePaused();\\n        _;\\n    }\\n\\n    /**\\n     * @dev Returns true if the contract is paused, and false otherwise.\\n     */\\n    function paused() public view virtual returns (bool) {\\n        return _paused;\\n    }\\n\\n    /**\\n     * @dev Throws if the contract is paused.\\n     */\\n    function _requireNotPaused() internal view virtual {\\n        if (paused()) {\\n            revert EnforcedPause();\\n        }\\n    }\\n\\n    /**\\n     * @dev Throws if the contract is not paused.\\n     */\\n    function _requirePaused() internal view virtual {\\n        if (!paused()) {\\n            revert ExpectedPause();\\n        }\\n    }\\n\\n    /**\\n     * @dev Triggers stopped state.\\n     *\\n     * Requirements:\\n     *\\n     * - The contract must not be paused.\\n     */\\n    function _pause() internal virtual whenNotPaused {\\n        _paused = true;\\n        emit Paused(_msgSender());\\n    }\\n\\n    /**\\n     * @dev Returns to normal state.\\n     *\\n     * Requirements:\\n     *\\n     * - The contract must be paused.\\n     */\\n    function _unpause() internal virtual whenPaused {\\n        _paused = false;\\n        emit Unpaused(_msgSender());\\n    }\\n}\\n","keccak256":"0xb2e5f50762c27fb4b123e3619c3c02bdcba5e515309382e5bfb6f7d6486510bd","license":"MIT"},"@openzeppelin/contracts/utils/ReentrancyGuard.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.1.0) (utils/ReentrancyGuard.sol)\\n\\npragma solidity ^0.8.20;\\n\\n/**\\n * @dev Contract module that helps prevent reentrant calls to a function.\\n *\\n * Inheriting from `ReentrancyGuard` will make the {nonReentrant} modifier\\n * available, which can be applied to functions to make sure there are no nested\\n * (reentrant) calls to them.\\n *\\n * Note that because there is a single `nonReentrant` guard, functions marked as\\n * `nonReentrant` may not call one another. This can be worked around by making\\n * those functions `private`, and then adding `external` `nonReentrant` entry\\n * points to them.\\n *\\n * TIP: If EIP-1153 (transient storage) is available on the chain you\'re deploying at,\\n * consider using {ReentrancyGuardTransient} instead.\\n *\\n * TIP: If you would like to learn more about reentrancy and alternative ways\\n * to protect against it, check out our blog post\\n * https://blog.openzeppelin.com/reentrancy-after-istanbul/[Reentrancy After Istanbul].\\n */\\nabstract contract ReentrancyGuard {\\n    // Booleans are more expensive than uint256 or any type that takes up a full\\n    // word because each write operation emits an extra SLOAD to first read the\\n    // slot\'s contents, replace the bits taken up by the boolean, and then write\\n    // back. This is the compiler\'s defense against contract upgrades and\\n    // pointer aliasing, and it cannot be disabled.\\n\\n    // The values being non-zero value makes deployment a bit more expensive,\\n    // but in exchange the refund on every call to nonReentrant will be lower in\\n    // amount. Since refunds are capped to a percentage of the total\\n    // transaction\'s gas, it is best to keep them low in cases like this one, to\\n    // increase the likelihood of the full refund coming into effect.\\n    uint256 private constant NOT_ENTERED = 1;\\n    uint256 private constant ENTERED = 2;\\n\\n    uint256 private _status;\\n\\n    /**\\n     * @dev Unauthorized reentrant call.\\n     */\\n    error ReentrancyGuardReentrantCall();\\n\\n    constructor() {\\n        _status = NOT_ENTERED;\\n    }\\n\\n    /**\\n     * @dev Prevents a contract from calling itself, directly or indirectly.\\n     * Calling a `nonReentrant` function from another `nonReentrant`\\n     * function is not supported. It is possible to prevent this from happening\\n     * by making the `nonReentrant` function external, and making it call a\\n     * `private` function that does the actual work.\\n     */\\n    modifier nonReentrant() {\\n        _nonReentrantBefore();\\n        _;\\n        _nonReentrantAfter();\\n    }\\n\\n    function _nonReentrantBefore() private {\\n        // On the first call to nonReentrant, _status will be NOT_ENTERED\\n        if (_status == ENTERED) {\\n            revert ReentrancyGuardReentrantCall();\\n        }\\n\\n        // Any calls to nonReentrant after this point will fail\\n        _status = ENTERED;\\n    }\\n\\n    function _nonReentrantAfter() private {\\n        // By storing the original value once again, a refund is triggered (see\\n        // https://eips.ethereum.org/EIPS/eip-2200)\\n        _status = NOT_ENTERED;\\n    }\\n\\n    /**\\n     * @dev Returns true if the reentrancy guard is currently set to \\"entered\\", which indicates there is a\\n     * `nonReentrant` function in the call stack.\\n     */\\n    function _reentrancyGuardEntered() internal view returns (bool) {\\n        return _status == ENTERED;\\n    }\\n}\\n","keccak256":"0x11a5a79827df29e915a12740caf62fe21ebe27c08c9ae3e09abe9ee3ba3866d3","license":"MIT"},"@openzeppelin/contracts/utils/introspection/IERC165.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v5.1.0) (utils/introspection/IERC165.sol)\\n\\npragma solidity ^0.8.20;\\n\\n/**\\n * @dev Interface of the ERC-165 standard, as defined in the\\n * https://eips.ethereum.org/EIPS/eip-165[ERC].\\n *\\n * Implementers can declare support of contract interfaces, which can then be\\n * queried by others ({ERC165Checker}).\\n *\\n * For an implementation, see {ERC165}.\\n */\\ninterface IERC165 {\\n    /**\\n     * @dev Returns true if this contract implements the interface defined by\\n     * `interfaceId`. See the corresponding\\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[ERC section]\\n     * to learn more about how these ids are created.\\n     *\\n     * This function call must use less than 30 000 gas.\\n     */\\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\\n}\\n","keccak256":"0x79796192ec90263f21b464d5bc90b777a525971d3de8232be80d9c4f9fb353b8","license":"MIT"},"contracts/RewardToken.sol":{"content":"// SPDX-License-Identifier: MIT\\r\\npragma solidity ^0.8.22;\\r\\n\\r\\nimport \\"@openzeppelin/contracts/token/ERC20/ERC20.sol\\";\\r\\nimport \\"@openzeppelin/contracts/access/Ownable.sol\\";\\r\\n\\r\\ncontract RewardToken is ERC20, Ownable {\\r\\n\\tevent TokensMinted(address indexed to, uint256 amount);\\r\\n\\tevent TokensBurned(address indexed from, uint256 amount);\\r\\n\\r\\n\\t/**\\r\\n\\t * @dev Constructor to initialize the token with a name and symbol.\\r\\n\\t */\\r\\n\\tconstructor() ERC20(\\"DRUGS\\", \\"DRUGS\\") Ownable(msg.sender) {}\\r\\n\\r\\n\\t/**\\r\\n\\t * @dev Mints new tokens to a specified address.\\r\\n\\t * @param to The address to mint tokens to.\\r\\n\\t * @param amount The amount of tokens to mint.\\r\\n\\t * @notice Only callable by the contract owner.\\r\\n\\t * @custom:events Emits TokensMinted event.\\r\\n\\t */\\r\\n\\tfunction mint(address to, uint256 amount) external onlyOwner {\\r\\n\\t\\trequire(to != address(0), \\"Cannot mint to zero address\\");\\r\\n\\t\\t_mint(to, amount);\\r\\n\\t\\temit TokensMinted(to, amount);\\r\\n\\t}\\r\\n\\r\\n\\t/**\\r\\n\\t * @dev Burns a specified amount of tokens from the caller\'s account.\\r\\n\\t * @param amount The amount of tokens to burn.\\r\\n\\t * @custom:events Emits TokensBurned event.\\r\\n\\t */\\r\\n\\tfunction burn(uint256 amount) external {\\r\\n\\t\\t_burn(msg.sender, amount);\\r\\n\\t\\temit TokensBurned(msg.sender, amount);\\r\\n\\t}\\r\\n\\r\\n\\t/**\\r\\n\\t * @dev Burns a specified amount of tokens from a specified account.\\r\\n\\t * @param account The account to burn tokens from.\\r\\n\\t * @param amount The amount of tokens to burn.\\r\\n\\t * @notice The caller must have allowance for the account\'s tokens.\\r\\n\\t * @custom:events Emits TokensBurned event.\\r\\n\\t */\\r\\n\\tfunction burnFrom(address account, uint256 amount) external {\\r\\n\\t\\trequire(account != address(0), \\"Cannot burn from zero address\\");\\r\\n\\t\\tuint256 currentAllowance = allowance(account, msg.sender);\\r\\n\\t\\trequire(\\r\\n\\t\\t\\tcurrentAllowance >= amount,\\r\\n\\t\\t\\t\\"ERC20: burn amount exceeds allowance\\"\\r\\n\\t\\t);\\r\\n\\t\\t_approve(account, msg.sender, currentAllowance - amount);\\r\\n\\t\\t_burn(account, amount);\\r\\n\\t\\temit TokensBurned(account, amount);\\r\\n\\t}\\r\\n}\\r\\n","keccak256":"0xf488afdaccdc6d8cc77fa970385b715b07508574a88f37927b6370339c00d785","license":"MIT"},"contracts/RewardsMarket.sol":{"content":"// SPDX-License-Identifier: MIT\\r\\npragma solidity ^0.8.22;\\r\\n\\r\\nimport \\"@openzeppelin/contracts/access/Ownable.sol\\";\\r\\nimport \\"@openzeppelin/contracts/token/ERC20/IERC20.sol\\";\\r\\nimport \\"@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol\\";\\r\\nimport \\"@openzeppelin/contracts/utils/ReentrancyGuard.sol\\";\\r\\nimport \\"@openzeppelin/contracts/utils/Pausable.sol\\";\\r\\nimport \\"./RewardToken.sol\\";\\r\\n\\r\\n/**\\r\\n * @title RewardsMarket\\r\\n * @notice Manages reward campaigns where users can burn tokens to trigger rewards\\r\\n * @dev Uses ReentrancyGuard to prevent reentrancy attacks and Pausable for emergency stops\\r\\n */\\r\\ncontract RewardsMarket is Ownable, ReentrancyGuard, Pausable {\\r\\n\\tusing SafeERC20 for IERC20;\\r\\n\\r\\n\\tstruct Campaign {\\r\\n\\t\\tuint256 minBurnAmount; // Minimum amount of tokens to burn\\r\\n\\t\\tuint256 endDate; // 0 means no end date\\r\\n\\t\\tuint256 maxRewards; // 0 means unlimited\\r\\n\\t\\tuint256 rewardsIssued; // Counter for issued rewards\\r\\n\\t\\taddress targetContract; // Contract to call when reward is triggered\\r\\n\\t\\tbytes targetCalldata; // Calldata for the external call\\r\\n\\t\\tbool isActive; // Whether the campaign is currently active\\r\\n\\t\\tuint256 createdAt; // Timestamp when campaign was created\\r\\n\\t\\taddress tokenAddress; // Token to be spent (address(0) means use rewardToken)\\r\\n\\t\\taddress recipientAddress; // Where tokens go (address(0) means burn)\\r\\n\\t}\\r\\n\\r\\n\\tRewardToken public rewardToken;\\r\\n\\r\\n\\t// Campaign ID => Campaign details\\r\\n\\tmapping(uint256 => Campaign) public campaigns;\\r\\n\\tuint256 public nextCampaignId;\\r\\n\\r\\n\\t// User address => Campaign ID => Number of times participated\\r\\n\\tmapping(address => mapping(uint256 => uint256)) public userParticipation;\\r\\n\\r\\n\\t// Add this after the existing mappings\\r\\n\\tuint256[] public allCampaignIds;\\r\\n\\tmapping(uint256 => uint256) public campaignIdToArrayIndex;\\r\\n\\r\\n\\tevent CampaignCreated(\\r\\n\\t\\tuint256 indexed campaignId,\\r\\n\\t\\tuint256 minBurnAmount,\\r\\n\\t\\tuint256 endDate,\\r\\n\\t\\taddress tokenAddress,\\r\\n\\t\\taddress recipientAddress\\r\\n\\t);\\r\\n\\tevent CampaignModified(uint256 indexed campaignId);\\r\\n\\tevent CampaignDeactivated(uint256 indexed campaignId);\\r\\n\\tevent RewardTriggered(\\r\\n\\t\\tuint256 indexed campaignId,\\r\\n\\t\\taddress indexed user,\\r\\n\\t\\tuint256 burnAmount,\\r\\n\\t\\tbool externalCallSuccess\\r\\n\\t);\\r\\n\\tevent TokensRecovered(address indexed token, uint256 amount);\\r\\n\\tevent RewardTokenUpdated(\\r\\n\\t\\taddress indexed oldToken,\\r\\n\\t\\taddress indexed newToken\\r\\n\\t);\\r\\n\\r\\n\\terror CampaignNotActive();\\r\\n\\terror CampaignExpired();\\r\\n\\terror MaxRewardsReached();\\r\\n\\terror InsufficientBurnAmount();\\r\\n\\terror ExternalCallFailed();\\r\\n\\r\\n\\tconstructor(address _rewardToken) Ownable(msg.sender) {\\r\\n\\t\\tif (_rewardToken != address(0)) {\\r\\n\\t\\t\\trewardToken = RewardToken(_rewardToken);\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\t/**\\r\\n\\t * @notice Creates a new reward campaign\\r\\n\\t * @param minBurnAmount Minimum tokens required to burn\\r\\n\\t * @param endDate Campaign end date (0 for no end date)\\r\\n\\t * @param maxRewards Maximum number of rewards (0 for unlimited)\\r\\n\\t * @param targetContract Contract to call (address(0) for no call)\\r\\n\\t * @param targetCalldata Calldata for external call\\r\\n\\t * @param tokenAddress Token to be spent (address(0) means use rewardToken)\\r\\n\\t * @param recipientAddress Where tokens go (address(0) means burn)\\r\\n\\t */\\r\\n\\tfunction createCampaign(\\r\\n\\t\\tuint256 minBurnAmount,\\r\\n\\t\\tuint256 endDate,\\r\\n\\t\\tuint256 maxRewards,\\r\\n\\t\\taddress targetContract,\\r\\n\\t\\tbytes calldata targetCalldata,\\r\\n\\t\\taddress tokenAddress,\\r\\n\\t\\taddress recipientAddress\\r\\n\\t) external onlyOwner whenNotPaused {\\r\\n\\t\\tuint256 campaignId = nextCampaignId++;\\r\\n\\r\\n\\t\\tcampaigns[campaignId] = Campaign({\\r\\n\\t\\t\\tminBurnAmount: minBurnAmount,\\r\\n\\t\\t\\tendDate: endDate,\\r\\n\\t\\t\\tmaxRewards: maxRewards,\\r\\n\\t\\t\\trewardsIssued: 0,\\r\\n\\t\\t\\ttargetContract: targetContract,\\r\\n\\t\\t\\ttargetCalldata: targetCalldata,\\r\\n\\t\\t\\tisActive: true,\\r\\n\\t\\t\\tcreatedAt: block.timestamp,\\r\\n\\t\\t\\ttokenAddress: tokenAddress,\\r\\n\\t\\t\\trecipientAddress: recipientAddress\\r\\n\\t\\t});\\r\\n\\r\\n\\t\\t// Add to the array of campaign IDs\\r\\n\\t\\tcampaignIdToArrayIndex[campaignId] = allCampaignIds.length;\\r\\n\\t\\tallCampaignIds.push(campaignId);\\r\\n\\r\\n\\t\\temit CampaignCreated(\\r\\n\\t\\t\\tcampaignId,\\r\\n\\t\\t\\tminBurnAmount,\\r\\n\\t\\t\\tendDate,\\r\\n\\t\\t\\ttokenAddress,\\r\\n\\t\\t\\trecipientAddress\\r\\n\\t\\t);\\r\\n\\t}\\r\\n\\r\\n\\t/**\\r\\n\\t * @notice Modifies an existing campaign\\r\\n\\t * @param campaignId ID of the campaign to modify\\r\\n\\t * @param minBurnAmount Minimum tokens required to burn\\r\\n\\t * @param endDate Campaign end date (0 for no end date)\\r\\n\\t * @param maxRewards Maximum number of rewards (0 for unlimited)\\r\\n\\t * @param targetContract Contract to call (address(0) for no call)\\r\\n\\t * @param targetCalldata Calldata for external call\\r\\n\\t * @param tokenAddress Token to be spent (address(0) means use rewardToken)\\r\\n\\t * @param recipientAddress Where tokens go (address(0) means burn)\\r\\n\\t */\\r\\n\\tfunction modifyCampaign(\\r\\n\\t\\tuint256 campaignId,\\r\\n\\t\\tuint256 minBurnAmount,\\r\\n\\t\\tuint256 endDate,\\r\\n\\t\\tuint256 maxRewards,\\r\\n\\t\\taddress targetContract,\\r\\n\\t\\tbytes calldata targetCalldata,\\r\\n\\t\\taddress tokenAddress,\\r\\n\\t\\taddress recipientAddress\\r\\n\\t) external onlyOwner {\\r\\n\\t\\tCampaign storage campaign = campaigns[campaignId];\\r\\n\\t\\trequire(campaign.isActive, \\"Campaign does not exist\\");\\r\\n\\r\\n\\t\\tcampaign.minBurnAmount = minBurnAmount;\\r\\n\\t\\tcampaign.endDate = endDate;\\r\\n\\t\\tcampaign.maxRewards = maxRewards;\\r\\n\\t\\tcampaign.targetContract = targetContract;\\r\\n\\t\\tcampaign.targetCalldata = targetCalldata;\\r\\n\\t\\tcampaign.tokenAddress = tokenAddress;\\r\\n\\t\\tcampaign.recipientAddress = recipientAddress;\\r\\n\\r\\n\\t\\temit CampaignModified(campaignId);\\r\\n\\t}\\r\\n\\r\\n\\t/**\\r\\n\\t * @notice Deactivates a campaign\\r\\n\\t * @param campaignId ID of the campaign to deactivate\\r\\n\\t */\\r\\n\\tfunction deactivateCampaign(uint256 campaignId) external onlyOwner {\\r\\n\\t\\trequire(campaigns[campaignId].isActive, \\"Campaign not active\\");\\r\\n\\t\\tcampaigns[campaignId].isActive = false;\\r\\n\\t\\temit CampaignDeactivated(campaignId);\\r\\n\\t}\\r\\n\\r\\n\\t/**\\r\\n\\t * @notice Triggers a reward by burning tokens\\r\\n\\t * @param campaignId ID of the campaign\\r\\n\\t * @param burnAmount Amount of tokens to burn\\r\\n\\t */\\r\\n\\tfunction triggerReward(\\r\\n\\t\\tuint256 campaignId,\\r\\n\\t\\tuint256 burnAmount\\r\\n\\t) external nonReentrant whenNotPaused {\\r\\n\\t\\tCampaign storage campaign = campaigns[campaignId];\\r\\n\\r\\n\\t\\tif (!campaign.isActive) revert CampaignNotActive();\\r\\n\\t\\tif (campaign.endDate != 0 && block.timestamp > campaign.endDate)\\r\\n\\t\\t\\trevert CampaignExpired();\\r\\n\\t\\tif (\\r\\n\\t\\t\\tcampaign.maxRewards != 0 &&\\r\\n\\t\\t\\tcampaign.rewardsIssued >= campaign.maxRewards\\r\\n\\t\\t) revert MaxRewardsReached();\\r\\n\\t\\tif (burnAmount < campaign.minBurnAmount)\\r\\n\\t\\t\\trevert InsufficientBurnAmount();\\r\\n\\r\\n\\t\\t// Update state before external calls\\r\\n\\t\\tcampaign.rewardsIssued++;\\r\\n\\t\\tuserParticipation[msg.sender][campaignId]++;\\r\\n\\r\\n\\t\\t// Handle token transfer/burn\\r\\n\\t\\tif (campaign.tokenAddress == address(0)) {\\r\\n\\t\\t\\t// Use rewardToken and burn\\r\\n\\t\\t\\trequire(address(rewardToken) != address(0), \\"Reward token not set\\");\\r\\n\\t\\t\\trewardToken.burnFrom(msg.sender, burnAmount);\\r\\n\\t\\t} else {\\r\\n\\t\\t\\t// Use custom token and transfer to recipient\\r\\n\\t\\t\\trequire(\\r\\n\\t\\t\\t\\tcampaign.recipientAddress != address(0),\\r\\n\\t\\t\\t\\t\\"Recipient not set for custom token\\"\\r\\n\\t\\t\\t);\\r\\n\\t\\t\\tIERC20(campaign.tokenAddress).safeTransferFrom(\\r\\n\\t\\t\\t\\tmsg.sender,\\r\\n\\t\\t\\t\\tcampaign.recipientAddress,\\r\\n\\t\\t\\t\\tburnAmount\\r\\n\\t\\t\\t);\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\t// Execute external call if configured\\r\\n\\t\\tbool callSuccess = true;\\r\\n\\t\\tif (campaign.targetContract != address(0)) {\\r\\n\\t\\t\\t(callSuccess, ) = campaign.targetContract.call(\\r\\n\\t\\t\\t\\tcampaign.targetCalldata\\r\\n\\t\\t\\t);\\r\\n\\t\\t\\tif (!callSuccess) revert ExternalCallFailed();\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\temit RewardTriggered(campaignId, msg.sender, burnAmount, callSuccess);\\r\\n\\t}\\r\\n\\r\\n\\t/**\\r\\n\\t * @dev Allows the owner to recover any ERC20 tokens mistakenly sent to the contract.\\r\\n\\t * @param tokenAddress The address of the ERC20 token to recover.\\r\\n\\t * @param to The address to send the recovered tokens to.\\r\\n\\t * @param amount The amount of tokens to recover.\\r\\n\\t * @notice Only callable by the contract owner.\\r\\n\\t */\\r\\n\\tfunction recoverTokens(\\r\\n\\t\\tIERC20 tokenAddress,\\r\\n\\t\\taddress to,\\r\\n\\t\\tuint256 amount\\r\\n\\t) external onlyOwner {\\r\\n\\t\\trequire(to != address(0), \\"Cannot recover to zero address\\");\\r\\n\\t\\ttokenAddress.safeTransfer(to, amount);\\r\\n\\t}\\r\\n\\r\\n\\t/**\\r\\n\\t * @notice Emergency pause\\r\\n\\t */\\r\\n\\tfunction pause() external onlyOwner {\\r\\n\\t\\t_pause();\\r\\n\\t}\\r\\n\\r\\n\\t/**\\r\\n\\t * @notice Unpause the contract\\r\\n\\t */\\r\\n\\tfunction unpause() external onlyOwner {\\r\\n\\t\\t_unpause();\\r\\n\\t}\\r\\n\\r\\n\\t/**\\r\\n\\t * @notice Returns campaign details\\r\\n\\t * @param campaignId Campaign ID to query\\r\\n\\t */\\r\\n\\tfunction getCampaign(\\r\\n\\t\\tuint256 campaignId\\r\\n\\t)\\r\\n\\t\\texternal\\r\\n\\t\\tview\\r\\n\\t\\treturns (\\r\\n\\t\\t\\tuint256 minBurnAmount,\\r\\n\\t\\t\\tuint256 endDate,\\r\\n\\t\\t\\tuint256 maxRewards,\\r\\n\\t\\t\\tuint256 rewardsIssued,\\r\\n\\t\\t\\taddress targetContract,\\r\\n\\t\\t\\tbytes memory targetCalldata,\\r\\n\\t\\t\\tbool isActive,\\r\\n\\t\\t\\tuint256 createdAt,\\r\\n\\t\\t\\taddress tokenAddress,\\r\\n\\t\\t\\taddress recipientAddress\\r\\n\\t\\t)\\r\\n\\t{\\r\\n\\t\\tCampaign storage campaign = campaigns[campaignId];\\r\\n\\t\\treturn (\\r\\n\\t\\t\\tcampaign.minBurnAmount,\\r\\n\\t\\t\\tcampaign.endDate,\\r\\n\\t\\t\\tcampaign.maxRewards,\\r\\n\\t\\t\\tcampaign.rewardsIssued,\\r\\n\\t\\t\\tcampaign.targetContract,\\r\\n\\t\\t\\tcampaign.targetCalldata,\\r\\n\\t\\t\\tcampaign.isActive,\\r\\n\\t\\t\\tcampaign.createdAt,\\r\\n\\t\\t\\tcampaign.tokenAddress,\\r\\n\\t\\t\\tcampaign.recipientAddress\\r\\n\\t\\t);\\r\\n\\t}\\r\\n\\r\\n\\t/**\\r\\n\\t * @notice Returns number of times a user has participated in a campaign\\r\\n\\t */\\r\\n\\tfunction getUserParticipationCount(\\r\\n\\t\\taddress user,\\r\\n\\t\\tuint256 campaignId\\r\\n\\t) external view returns (uint256) {\\r\\n\\t\\treturn userParticipation[user][campaignId];\\r\\n\\t}\\r\\n\\r\\n\\t/**\\r\\n\\t * @notice Returns total number of campaigns ever created\\r\\n\\t */\\r\\n\\tfunction getTotalCampaigns() external view returns (uint256) {\\r\\n\\t\\treturn allCampaignIds.length;\\r\\n\\t}\\r\\n\\r\\n\\t/**\\r\\n\\t * @notice Returns an array of campaign IDs within the specified range\\r\\n\\t * @param startIndex Start index in the campaigns array\\r\\n\\t * @param endIndex End index in the campaigns array (exclusive)\\r\\n\\t * @return Array of campaign IDs\\r\\n\\t */\\r\\n\\tfunction getCampaignIds(\\r\\n\\t\\tuint256 startIndex,\\r\\n\\t\\tuint256 endIndex\\r\\n\\t) external view returns (uint256[] memory) {\\r\\n\\t\\trequire(startIndex < endIndex, \\"Invalid range\\");\\r\\n\\t\\trequire(endIndex <= allCampaignIds.length, \\"End index out of bounds\\");\\r\\n\\r\\n\\t\\tuint256 length = endIndex - startIndex;\\r\\n\\t\\tuint256[] memory ids = new uint256[](length);\\r\\n\\r\\n\\t\\tfor (uint256 i = 0; i < length; i++) {\\r\\n\\t\\t\\tids[i] = allCampaignIds[startIndex + i];\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\treturn ids;\\r\\n\\t}\\r\\n\\r\\n\\t/**\\r\\n\\t * @notice Returns all active campaigns within the specified range\\r\\n\\t * @param startIndex Start index in the campaigns array\\r\\n\\t * @param endIndex End index in the campaigns array (exclusive)\\r\\n\\t * @return campaignIds Array of campaign IDs that are active\\r\\n\\t * @return details Array of campaign details corresponding to the IDs\\r\\n\\t */\\r\\n\\tfunction getActiveCampaigns(\\r\\n\\t\\tuint256 startIndex,\\r\\n\\t\\tuint256 endIndex\\r\\n\\t)\\r\\n\\t\\texternal\\r\\n\\t\\tview\\r\\n\\t\\treturns (uint256[] memory campaignIds, Campaign[] memory details)\\r\\n\\t{\\r\\n\\t\\trequire(startIndex < endIndex, \\"Invalid range\\");\\r\\n\\t\\trequire(endIndex <= allCampaignIds.length, \\"End index out of bounds\\");\\r\\n\\r\\n\\t\\tuint256 length = endIndex - startIndex;\\r\\n\\r\\n\\t\\t// First pass: count active campaigns\\r\\n\\t\\tuint256 activeCount = 0;\\r\\n\\t\\tfor (uint256 i = 0; i < length; i++) {\\r\\n\\t\\t\\tuint256 campaignId = allCampaignIds[startIndex + i];\\r\\n\\t\\t\\tif (\\r\\n\\t\\t\\t\\tcampaigns[campaignId].isActive &&\\r\\n\\t\\t\\t\\t(campaigns[campaignId].endDate == 0 ||\\r\\n\\t\\t\\t\\t\\tcampaigns[campaignId].endDate > block.timestamp)\\r\\n\\t\\t\\t) {\\r\\n\\t\\t\\t\\tactiveCount++;\\r\\n\\t\\t\\t}\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\t// Second pass: populate arrays\\r\\n\\t\\tcampaignIds = new uint256[](activeCount);\\r\\n\\t\\tdetails = new Campaign[](activeCount);\\r\\n\\t\\tuint256 activeIndex = 0;\\r\\n\\r\\n\\t\\tfor (uint256 i = 0; i < length; i++) {\\r\\n\\t\\t\\tuint256 campaignId = allCampaignIds[startIndex + i];\\r\\n\\t\\t\\tCampaign storage campaign = campaigns[campaignId];\\r\\n\\r\\n\\t\\t\\tif (\\r\\n\\t\\t\\t\\tcampaign.isActive &&\\r\\n\\t\\t\\t\\t(campaign.endDate == 0 || campaign.endDate > block.timestamp)\\r\\n\\t\\t\\t) {\\r\\n\\t\\t\\t\\tcampaignIds[activeIndex] = campaignId;\\r\\n\\t\\t\\t\\tdetails[activeIndex] = campaign;\\r\\n\\t\\t\\t\\tactiveIndex++;\\r\\n\\t\\t\\t}\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\t/**\\r\\n\\t * @notice Returns all inactive campaigns within the specified range\\r\\n\\t * @param startIndex Start index in the campaigns array\\r\\n\\t * @param endIndex End index in the campaigns array (exclusive)\\r\\n\\t * @return campaignIds Array of campaign IDs that are inactive\\r\\n\\t * @return details Array of campaign details corresponding to the IDs\\r\\n\\t */\\r\\n\\tfunction getInactiveCampaigns(\\r\\n\\t\\tuint256 startIndex,\\r\\n\\t\\tuint256 endIndex\\r\\n\\t)\\r\\n\\t\\texternal\\r\\n\\t\\tview\\r\\n\\t\\treturns (uint256[] memory campaignIds, Campaign[] memory details)\\r\\n\\t{\\r\\n\\t\\trequire(startIndex < endIndex, \\"Invalid range\\");\\r\\n\\t\\trequire(endIndex <= allCampaignIds.length, \\"End index out of bounds\\");\\r\\n\\r\\n\\t\\tuint256 length = endIndex - startIndex;\\r\\n\\r\\n\\t\\t// First pass: count inactive campaigns\\r\\n\\t\\tuint256 inactiveCount = 0;\\r\\n\\t\\tfor (uint256 i = 0; i < length; i++) {\\r\\n\\t\\t\\tuint256 campaignId = allCampaignIds[startIndex + i];\\r\\n\\t\\t\\tif (\\r\\n\\t\\t\\t\\t!campaigns[campaignId].isActive ||\\r\\n\\t\\t\\t\\t(campaigns[campaignId].endDate != 0 &&\\r\\n\\t\\t\\t\\t\\tcampaigns[campaignId].endDate <= block.timestamp)\\r\\n\\t\\t\\t) {\\r\\n\\t\\t\\t\\tinactiveCount++;\\r\\n\\t\\t\\t}\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\t// Second pass: populate arrays\\r\\n\\t\\tcampaignIds = new uint256[](inactiveCount);\\r\\n\\t\\tdetails = new Campaign[](inactiveCount);\\r\\n\\t\\tuint256 inactiveIndex = 0;\\r\\n\\r\\n\\t\\tfor (uint256 i = 0; i < length; i++) {\\r\\n\\t\\t\\tuint256 campaignId = allCampaignIds[startIndex + i];\\r\\n\\t\\t\\tCampaign storage campaign = campaigns[campaignId];\\r\\n\\r\\n\\t\\t\\tif (\\r\\n\\t\\t\\t\\t!campaign.isActive ||\\r\\n\\t\\t\\t\\t(campaign.endDate != 0 && campaign.endDate <= block.timestamp)\\r\\n\\t\\t\\t) {\\r\\n\\t\\t\\t\\tcampaignIds[inactiveIndex] = campaignId;\\r\\n\\t\\t\\t\\tdetails[inactiveIndex] = campaign;\\r\\n\\t\\t\\t\\tinactiveIndex++;\\r\\n\\t\\t\\t}\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\t/**\\r\\n\\t * @notice Updates the reward token address\\r\\n\\t * @param _newRewardToken Address of the new reward token\\r\\n\\t */\\r\\n\\tfunction setRewardToken(address _newRewardToken) external onlyOwner {\\r\\n\\t\\taddress oldToken = address(rewardToken);\\r\\n\\t\\trewardToken = RewardToken(_newRewardToken);\\r\\n\\t\\temit RewardTokenUpdated(oldToken, _newRewardToken);\\r\\n\\t}\\r\\n}\\r\\n","keccak256":"0x22233c2439f8bc92ed6ee6cad4db2aef2b44d106766278cd1bbb7ff82c5d8f60","license":"MIT"}},"version":1}',
      bytecode:
        "0x60806040523480156200001157600080fd5b5060405162002274380380620022748339810160408190526200003491620000fd565b33806200005b57604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b6200006681620000ad565b50600180556002805460ff191690556001600160a01b03811615620000a65760028054610100600160a81b0319166101006001600160a01b038416021790555b506200012f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156200011057600080fd5b81516001600160a01b03811681146200012857600080fd5b9392505050565b612135806200013f6000396000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c80638aee8127116100c3578063d34562781161007c578063d3456278146102f0578063d729f77b14610303578063efa78b3314610316578063f2fde38b14610329578063f31b3c4f1461033c578063f7c618c11461035c57600080fd5b80638aee8127146102395780638da5cb5b1461024c57806397f7f17414610271578063ade401d814610284578063b6531458146102a4578063c707ea3f146102c557600080fd5b80635f3e849f116101155780635f3e849f146101e75780636a870be6146101fa578063715018a61461020d5780637903a756146102155780637eca30fe1461021e5780638456cb591461023157600080fd5b8063141961bc1461015d57806316f43dd41461018f57806331c3bbb1146101a15780633f4ba83a146101b65780635598f8cc146101be5780635c975abb146101d1575b600080fd5b61017061016b36600461193a565b610374565b6040516101869a99989796959493929190611999565b60405180910390f35b6006545b604051908152602001610186565b6101b46101af366004611a61565b61046a565b005b6101b4610582565b6101706101cc36600461193a565b610594565b60025460ff166040519015158152602001610186565b6101b46101f5366004611b04565b6106b5565b6101b4610208366004611b45565b61072c565b6101b4610a86565b61019360045481565b6101b461022c36600461193a565b610a98565b6101b4610b3a565b6101b4610247366004611b67565b610b4a565b6000546001600160a01b03165b6040516001600160a01b039091168152602001610186565b61019361027f366004611b8b565b610bac565b610297610292366004611b45565b610bd7565b6040516101869190611bf3565b6102b76102b2366004611b45565b610ccf565b604051610186929190611c06565b6101936102d3366004611b8b565b600560209081526000928352604080842090915290825290205481565b6101936102fe36600461193a565b611047565b6101b4610311366004611d06565b611068565b6102b7610324366004611b45565b61128d565b6101b4610337366004611b67565b611600565b61019361034a36600461193a565b60076020526000908152604090205481565b6002546102599061010090046001600160a01b031681565b600360208190526000918252604090912080546001820154600283015493830154600484015460058501805494969395939492936001600160a01b03909216926103bd90611d9f565b80601f01602080910402602001604051908101604052809291908181526020018280546103e990611d9f565b80156104365780601f1061040b57610100808354040283529160200191610436565b820191906000526020600020905b81548152906001019060200180831161041957829003601f168201915b505050600684015460078501546008860154600990960154949560ff909216949093506001600160a01b039182169250168a565b61047261163e565b6000898152600360205260409020600681015460ff166104d95760405162461bcd60e51b815260206004820152601760248201527f43616d706169676e20646f6573206e6f7420657869737400000000000000000060448201526064015b60405180910390fd5b88815560018101889055600281018790556004810180546001600160a01b0319166001600160a01b03881617905560058101610516858783611e3f565b506008810180546001600160a01b038086166001600160a01b031992831617909255600983018054928516929091169190911790556040518a907f5b7669af918ca3f4bd3cbd26646bae0964c718ded8c46169bd586dd6fd9f277e90600090a250505050505050505050565b61058a61163e565b61059261166b565b565b6000818152600360208190526040822080546001820154600283015493830154600484015460068501546007860154600887015460098801546005890180548c9b8c9b8c9b8c9b60609b8d9b8c9b8c9b8c9b969a9599949893966001600160a01b039384169660ff909316949193908116921690859061061390611d9f565b80601f016020809104026020016040519081016040528092919081815260200182805461063f90611d9f565b801561068c5780601f106106615761010080835404028352916020019161068c565b820191906000526020600020905b81548152906001019060200180831161066f57829003601f168201915b505050505094509a509a509a509a509a509a509a509a509a509a50509193959799509193959799565b6106bd61163e565b6001600160a01b0382166107135760405162461bcd60e51b815260206004820152601e60248201527f43616e6e6f74207265636f76657220746f207a65726f2061646472657373000060448201526064016104d0565b6107276001600160a01b03841683836116bd565b505050565b61073461171c565b61073c611746565b6000828152600360205260409020600681015460ff1661076f5760405163219a945b60e11b815260040160405180910390fd5b6001810154158015906107855750806001015442115b156107a357604051638320b48360e01b815260040160405180910390fd5b6002810154158015906107be57508060020154816003015410155b156107dc57604051635681f00560e01b815260040160405180910390fd5b80548210156107fe5760405163f4c41e4760e01b815260040160405180910390fd5b60038101805490600061081083611f16565b9091555050336000908152600560209081526040808320868452909152812080549161083b83611f16565b909155505060088101546001600160a01b03166109135760025461010090046001600160a01b03166108a65760405162461bcd60e51b815260206004820152601460248201527314995dd85c99081d1bdad95b881b9bdd081cd95d60621b60448201526064016104d0565b60025460405163079cc67960e41b8152336004820152602481018490526101009091046001600160a01b0316906379cc679090604401600060405180830381600087803b1580156108f657600080fd5b505af115801561090a573d6000803e3d6000fd5b5050505061099b565b60098101546001600160a01b03166109785760405162461bcd60e51b815260206004820152602260248201527f526563697069656e74206e6f742073657420666f7220637573746f6d20746f6b60448201526132b760f11b60648201526084016104d0565b6009810154600882015461099b916001600160a01b03918216913391168561176a565b60048101546001906001600160a01b031615610a395760048201546040516001600160a01b03909116906109d3906005850190611f2f565b6000604051808303816000865af19150503d8060008114610a10576040519150601f19603f3d011682016040523d82523d6000602084013e610a15565b606091505b50508091505080610a395760405163350c20f160e01b815260040160405180910390fd5b604080518481528215156020820152339186917fcc92375c9d8a567195e0f4a6268691b2b90e0e66f989088e0b7b2f5f3508a95f910160405180910390a35050610a8260018055565b5050565b610a8e61163e565b61059260006117a9565b610aa061163e565b60008181526003602052604090206006015460ff16610af75760405162461bcd60e51b815260206004820152601360248201527243616d706169676e206e6f742061637469766560681b60448201526064016104d0565b600081815260036020526040808220600601805460ff191690555182917fa8ad368de07a46b4c9632fee456e1227f02e971f82939d68bd4696b2e378dfa791a250565b610b4261163e565b6105926117f9565b610b5261163e565b600280546001600160a01b03838116610100818102610100600160a81b031985161790945560405193909204169182907f906ff2422a6ffa134f2d7ccaffd446bc0c583a5cb6615749b4b2836942a5fea890600090a35050565b6001600160a01b03821660009081526005602090815260408083208484529091529020545b92915050565b6060818310610bf85760405162461bcd60e51b81526004016104d090611fa5565b600654821115610c1a5760405162461bcd60e51b81526004016104d090611fcc565b6000610c268484612003565b905060008167ffffffffffffffff811115610c4357610c43611dd9565b604051908082528060200260200182016040528015610c6c578160200160208202803683370190505b50905060005b82811015610cc6576006610c868288612016565b81548110610c9657610c96612029565b9060005260206000200154828281518110610cb357610cb3612029565b6020908102919091010152600101610c72565b50949350505050565b606080828410610cf15760405162461bcd60e51b81526004016104d090611fa5565b600654831115610d135760405162461bcd60e51b81526004016104d090611fcc565b6000610d1f8585612003565b90506000805b82811015610dc15760006006610d3b838a612016565b81548110610d4b57610d4b612029565b6000918252602080832090910154808352600390915260409091206006015490915060ff168015610da557506000818152600360205260409020600101541580610da5575060008181526003602052604090206001015442105b15610db85782610db481611f16565b9350505b50600101610d25565b508067ffffffffffffffff811115610ddb57610ddb611dd9565b604051908082528060200260200182016040528015610e04578160200160208202803683370190505b5093508067ffffffffffffffff811115610e2057610e20611dd9565b604051908082528060200260200182016040528015610e5957816020015b610e466118ca565b815260200190600190039081610e3e5790505b5092506000805b8381101561103c5760006006610e76838b612016565b81548110610e8657610e86612029565b60009182526020808320909101548083526003909152604090912060068101549192509060ff168015610ec8575060018101541580610ec85750428160010154115b156110325781888581518110610ee057610ee0612029565b6020908102919091018101919091526040805161014081018252835481526001840154928101929092526002830154908201526003820154606082015260048201546001600160a01b03166080820152600582018054839160a0840191610f4690611d9f565b80601f0160208091040260200160405190810160405280929190818152602001828054610f7290611d9f565b8015610fbf5780601f10610f9457610100808354040283529160200191610fbf565b820191906000526020600020905b815481529060010190602001808311610fa257829003601f168201915b5050509183525050600682015460ff16151560208201526007820154604082015260088201546001600160a01b039081166060830152600990920154909116608090910152875188908690811061101857611018612029565b6020026020010181905250838061102e90611f16565b9450505b5050600101610e60565b505050509250929050565b6006818154811061105757600080fd5b600091825260209091200154905081565b61107061163e565b611078611746565b600480546000918261108983611f16565b9190505590506040518061014001604052808a815260200189815260200188815260200160008152602001876001600160a01b0316815260200186868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250938552505060016020808501829052426040808701919091526001600160a01b038a81166060808901919091528a82166080988901528987526003808552968390208951815593890151948401949094559087015160028301559186015193810193909355928401516004830180546001600160a01b031916919094161790925560a0830151909150600582019061118d908261203f565b5060c08201516006828101805460ff19169215159290921790915560e08301516007808401919091556101008401516008840180546001600160a01b03199081166001600160a01b039384161790915561012090950151600990940180549095169381169390931790935580546000858152602094855260408082208390556001830184559290527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f0184905580518c81529283018b9052858216908301528316606082015281907f37323758a33aed97b5367a7bf83f761fe5a60c1af1dea93eb27fef67265413189060800160405180910390a2505050505050505050565b6060808284106112af5760405162461bcd60e51b81526004016104d090611fa5565b6006548311156112d15760405162461bcd60e51b81526004016104d090611fcc565b60006112dd8585612003565b90506000805b8281101561138257600060066112f9838a612016565b8154811061130957611309612029565b6000918252602080832090910154808352600390915260409091206006015490915060ff16158061136657506000818152600360205260409020600101541580159061136657506000818152600360205260409020600101544210155b15611379578261137581611f16565b9350505b506001016112e3565b508067ffffffffffffffff81111561139c5761139c611dd9565b6040519080825280602002602001820160405280156113c5578160200160208202803683370190505b5093508067ffffffffffffffff8111156113e1576113e1611dd9565b60405190808252806020026020018201604052801561141a57816020015b6114076118ca565b8152602001906001900390816113ff5790505b5092506000805b8381101561103c5760006006611437838b612016565b8154811061144757611447612029565b60009182526020808320909101548083526003909152604090912060068101549192509060ff16158061148c575060018101541580159061148c575042816001015411155b156115f657818885815181106114a4576114a4612029565b6020908102919091018101919091526040805161014081018252835481526001840154928101929092526002830154908201526003820154606082015260048201546001600160a01b03166080820152600582018054839160a084019161150a90611d9f565b80601f016020809104026020016040519081016040528092919081815260200182805461153690611d9f565b80156115835780601f1061155857610100808354040283529160200191611583565b820191906000526020600020905b81548152906001019060200180831161156657829003601f168201915b5050509183525050600682015460ff16151560208201526007820154604082015260088201546001600160a01b03908116606083015260099092015490911660809091015287518890869081106115dc576115dc612029565b602002602001018190525083806115f290611f16565b9450505b5050600101611421565b61160861163e565b6001600160a01b03811661163257604051631e4fbdf760e01b8152600060048201526024016104d0565b61163b816117a9565b50565b6000546001600160a01b031633146105925760405163118cdaa760e01b81523360048201526024016104d0565b611673611836565b6002805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6040516001600160a01b0383811660248301526044820183905261072791859182169063a9059cbb906064015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050611859565b60026001540361173f57604051633ee5aeb560e01b815260040160405180910390fd5b6002600155565b60025460ff16156105925760405163d93c066560e01b815260040160405180910390fd5b6040516001600160a01b0384811660248301528381166044830152606482018390526117a39186918216906323b872dd906084016116ea565b50505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b611801611746565b6002805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586116a03390565b60025460ff1661059257604051638dfc202b60e01b815260040160405180910390fd5b600080602060008451602086016000885af18061187c576040513d6000823e3d81fd5b50506000513d915081156118945780600114156118a1565b6001600160a01b0384163b155b156117a357604051635274afe760e01b81526001600160a01b03851660048201526024016104d0565b6040518061014001604052806000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001606081526020016000151581526020016000815260200160006001600160a01b0316815260200160006001600160a01b031681525090565b60006020828403121561194c57600080fd5b5035919050565b6000815180845260005b818110156119795760208185018101518683018201520161195d565b506000602082860101526020601f19601f83011685010191505092915050565b60006101408c83528b60208401528a604084015289606084015260018060a01b03808a1660808501528160a08501526119d48285018a611953565b97151560c085015260e08401969096525050918316610100830152909116610120909101529695505050505050565b6001600160a01b038116811461163b57600080fd5b60008083601f840112611a2a57600080fd5b50813567ffffffffffffffff811115611a4257600080fd5b602083019150836020828501011115611a5a57600080fd5b9250929050565b60008060008060008060008060006101008a8c031215611a8057600080fd5b8935985060208a0135975060408a0135965060608a0135955060808a0135611aa781611a03565b945060a08a013567ffffffffffffffff811115611ac357600080fd5b611acf8c828d01611a18565b90955093505060c08a0135611ae381611a03565b915060e08a0135611af381611a03565b809150509295985092959850929598565b600080600060608486031215611b1957600080fd5b8335611b2481611a03565b92506020840135611b3481611a03565b929592945050506040919091013590565b60008060408385031215611b5857600080fd5b50508035926020909101359150565b600060208284031215611b7957600080fd5b8135611b8481611a03565b9392505050565b60008060408385031215611b9e57600080fd5b8235611ba981611a03565b946020939093013593505050565b60008151808452602080850194506020840160005b83811015611be857815187529582019590820190600101611bcc565b509495945050505050565b602081526000611b846020830184611bb7565b60006040808352611c1a6040840186611bb7565b6020848203818601528186518084528284019150828160051b85010183890160005b83811015611cf657601f1987840301855281518051845286810151878501528881015189850152606080820151908501526080808201516001600160a01b03169085015260a0808201516101408287018190529190611c9d83880182611953565b9250505060c080830151611cb48288018215159052565b505060e08281015190860152610100808301516001600160a01b0390811691870191909152610120928301511691909401529385019390850190600101611c3c565b50909a9950505050505050505050565b60008060008060008060008060e0898b031215611d2257600080fd5b8835975060208901359650604089013595506060890135611d4281611a03565b9450608089013567ffffffffffffffff811115611d5e57600080fd5b611d6a8b828c01611a18565b90955093505060a0890135611d7e81611a03565b915060c0890135611d8e81611a03565b809150509295985092959890939650565b600181811c90821680611db357607f821691505b602082108103611dd357634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b601f821115610727576000816000526020600020601f850160051c81016020861015611e185750805b601f850160051c820191505b81811015611e3757828155600101611e24565b505050505050565b67ffffffffffffffff831115611e5757611e57611dd9565b611e6b83611e658354611d9f565b83611def565b6000601f841160018114611e9f5760008515611e875750838201355b600019600387901b1c1916600186901b178355611ef9565b600083815260209020601f19861690835b82811015611ed05786850135825560209485019460019092019101611eb0565b5086821015611eed5760001960f88860031b161c19848701351681555b505060018560011b0183555b5050505050565b634e487b7160e01b600052601160045260246000fd5b600060018201611f2857611f28611f00565b5060010190565b6000808354611f3d81611d9f565b60018281168015611f555760018114611f6a57611f99565b60ff1984168752821515830287019450611f99565b8760005260208060002060005b85811015611f905781548a820152908401908201611f77565b50505082870194505b50929695505050505050565b6020808252600d908201526c496e76616c69642072616e676560981b604082015260600190565b60208082526017908201527f456e6420696e646578206f7574206f6620626f756e6473000000000000000000604082015260600190565b81810381811115610bd157610bd1611f00565b80820180821115610bd157610bd1611f00565b634e487b7160e01b600052603260045260246000fd5b815167ffffffffffffffff81111561205957612059611dd9565b61206d816120678454611d9f565b84611def565b602080601f8311600181146120a2576000841561208a5750858301515b600019600386901b1c1916600185901b178555611e37565b600085815260208120601f198616915b828110156120d1578886015182559484019460019091019084016120b2565b50858210156120ef5787850151600019600388901b60f8161c191681555b5050505050600190811b0190555056fea2646970667358221220be22e31bc263231d07bab3e90a755022ec5f9a220d95f69b530f3fff91262dc364736f6c63430008160033",
      deployedBytecode:
        "0x608060405234801561001057600080fd5b50600436106101585760003560e01c80638aee8127116100c3578063d34562781161007c578063d3456278146102f0578063d729f77b14610303578063efa78b3314610316578063f2fde38b14610329578063f31b3c4f1461033c578063f7c618c11461035c57600080fd5b80638aee8127146102395780638da5cb5b1461024c57806397f7f17414610271578063ade401d814610284578063b6531458146102a4578063c707ea3f146102c557600080fd5b80635f3e849f116101155780635f3e849f146101e75780636a870be6146101fa578063715018a61461020d5780637903a756146102155780637eca30fe1461021e5780638456cb591461023157600080fd5b8063141961bc1461015d57806316f43dd41461018f57806331c3bbb1146101a15780633f4ba83a146101b65780635598f8cc146101be5780635c975abb146101d1575b600080fd5b61017061016b36600461193a565b610374565b6040516101869a99989796959493929190611999565b60405180910390f35b6006545b604051908152602001610186565b6101b46101af366004611a61565b61046a565b005b6101b4610582565b6101706101cc36600461193a565b610594565b60025460ff166040519015158152602001610186565b6101b46101f5366004611b04565b6106b5565b6101b4610208366004611b45565b61072c565b6101b4610a86565b61019360045481565b6101b461022c36600461193a565b610a98565b6101b4610b3a565b6101b4610247366004611b67565b610b4a565b6000546001600160a01b03165b6040516001600160a01b039091168152602001610186565b61019361027f366004611b8b565b610bac565b610297610292366004611b45565b610bd7565b6040516101869190611bf3565b6102b76102b2366004611b45565b610ccf565b604051610186929190611c06565b6101936102d3366004611b8b565b600560209081526000928352604080842090915290825290205481565b6101936102fe36600461193a565b611047565b6101b4610311366004611d06565b611068565b6102b7610324366004611b45565b61128d565b6101b4610337366004611b67565b611600565b61019361034a36600461193a565b60076020526000908152604090205481565b6002546102599061010090046001600160a01b031681565b600360208190526000918252604090912080546001820154600283015493830154600484015460058501805494969395939492936001600160a01b03909216926103bd90611d9f565b80601f01602080910402602001604051908101604052809291908181526020018280546103e990611d9f565b80156104365780601f1061040b57610100808354040283529160200191610436565b820191906000526020600020905b81548152906001019060200180831161041957829003601f168201915b505050600684015460078501546008860154600990960154949560ff909216949093506001600160a01b039182169250168a565b61047261163e565b6000898152600360205260409020600681015460ff166104d95760405162461bcd60e51b815260206004820152601760248201527f43616d706169676e20646f6573206e6f7420657869737400000000000000000060448201526064015b60405180910390fd5b88815560018101889055600281018790556004810180546001600160a01b0319166001600160a01b03881617905560058101610516858783611e3f565b506008810180546001600160a01b038086166001600160a01b031992831617909255600983018054928516929091169190911790556040518a907f5b7669af918ca3f4bd3cbd26646bae0964c718ded8c46169bd586dd6fd9f277e90600090a250505050505050505050565b61058a61163e565b61059261166b565b565b6000818152600360208190526040822080546001820154600283015493830154600484015460068501546007860154600887015460098801546005890180548c9b8c9b8c9b8c9b60609b8d9b8c9b8c9b8c9b969a9599949893966001600160a01b039384169660ff909316949193908116921690859061061390611d9f565b80601f016020809104026020016040519081016040528092919081815260200182805461063f90611d9f565b801561068c5780601f106106615761010080835404028352916020019161068c565b820191906000526020600020905b81548152906001019060200180831161066f57829003601f168201915b505050505094509a509a509a509a509a509a509a509a509a509a50509193959799509193959799565b6106bd61163e565b6001600160a01b0382166107135760405162461bcd60e51b815260206004820152601e60248201527f43616e6e6f74207265636f76657220746f207a65726f2061646472657373000060448201526064016104d0565b6107276001600160a01b03841683836116bd565b505050565b61073461171c565b61073c611746565b6000828152600360205260409020600681015460ff1661076f5760405163219a945b60e11b815260040160405180910390fd5b6001810154158015906107855750806001015442115b156107a357604051638320b48360e01b815260040160405180910390fd5b6002810154158015906107be57508060020154816003015410155b156107dc57604051635681f00560e01b815260040160405180910390fd5b80548210156107fe5760405163f4c41e4760e01b815260040160405180910390fd5b60038101805490600061081083611f16565b9091555050336000908152600560209081526040808320868452909152812080549161083b83611f16565b909155505060088101546001600160a01b03166109135760025461010090046001600160a01b03166108a65760405162461bcd60e51b815260206004820152601460248201527314995dd85c99081d1bdad95b881b9bdd081cd95d60621b60448201526064016104d0565b60025460405163079cc67960e41b8152336004820152602481018490526101009091046001600160a01b0316906379cc679090604401600060405180830381600087803b1580156108f657600080fd5b505af115801561090a573d6000803e3d6000fd5b5050505061099b565b60098101546001600160a01b03166109785760405162461bcd60e51b815260206004820152602260248201527f526563697069656e74206e6f742073657420666f7220637573746f6d20746f6b60448201526132b760f11b60648201526084016104d0565b6009810154600882015461099b916001600160a01b03918216913391168561176a565b60048101546001906001600160a01b031615610a395760048201546040516001600160a01b03909116906109d3906005850190611f2f565b6000604051808303816000865af19150503d8060008114610a10576040519150601f19603f3d011682016040523d82523d6000602084013e610a15565b606091505b50508091505080610a395760405163350c20f160e01b815260040160405180910390fd5b604080518481528215156020820152339186917fcc92375c9d8a567195e0f4a6268691b2b90e0e66f989088e0b7b2f5f3508a95f910160405180910390a35050610a8260018055565b5050565b610a8e61163e565b61059260006117a9565b610aa061163e565b60008181526003602052604090206006015460ff16610af75760405162461bcd60e51b815260206004820152601360248201527243616d706169676e206e6f742061637469766560681b60448201526064016104d0565b600081815260036020526040808220600601805460ff191690555182917fa8ad368de07a46b4c9632fee456e1227f02e971f82939d68bd4696b2e378dfa791a250565b610b4261163e565b6105926117f9565b610b5261163e565b600280546001600160a01b03838116610100818102610100600160a81b031985161790945560405193909204169182907f906ff2422a6ffa134f2d7ccaffd446bc0c583a5cb6615749b4b2836942a5fea890600090a35050565b6001600160a01b03821660009081526005602090815260408083208484529091529020545b92915050565b6060818310610bf85760405162461bcd60e51b81526004016104d090611fa5565b600654821115610c1a5760405162461bcd60e51b81526004016104d090611fcc565b6000610c268484612003565b905060008167ffffffffffffffff811115610c4357610c43611dd9565b604051908082528060200260200182016040528015610c6c578160200160208202803683370190505b50905060005b82811015610cc6576006610c868288612016565b81548110610c9657610c96612029565b9060005260206000200154828281518110610cb357610cb3612029565b6020908102919091010152600101610c72565b50949350505050565b606080828410610cf15760405162461bcd60e51b81526004016104d090611fa5565b600654831115610d135760405162461bcd60e51b81526004016104d090611fcc565b6000610d1f8585612003565b90506000805b82811015610dc15760006006610d3b838a612016565b81548110610d4b57610d4b612029565b6000918252602080832090910154808352600390915260409091206006015490915060ff168015610da557506000818152600360205260409020600101541580610da5575060008181526003602052604090206001015442105b15610db85782610db481611f16565b9350505b50600101610d25565b508067ffffffffffffffff811115610ddb57610ddb611dd9565b604051908082528060200260200182016040528015610e04578160200160208202803683370190505b5093508067ffffffffffffffff811115610e2057610e20611dd9565b604051908082528060200260200182016040528015610e5957816020015b610e466118ca565b815260200190600190039081610e3e5790505b5092506000805b8381101561103c5760006006610e76838b612016565b81548110610e8657610e86612029565b60009182526020808320909101548083526003909152604090912060068101549192509060ff168015610ec8575060018101541580610ec85750428160010154115b156110325781888581518110610ee057610ee0612029565b6020908102919091018101919091526040805161014081018252835481526001840154928101929092526002830154908201526003820154606082015260048201546001600160a01b03166080820152600582018054839160a0840191610f4690611d9f565b80601f0160208091040260200160405190810160405280929190818152602001828054610f7290611d9f565b8015610fbf5780601f10610f9457610100808354040283529160200191610fbf565b820191906000526020600020905b815481529060010190602001808311610fa257829003601f168201915b5050509183525050600682015460ff16151560208201526007820154604082015260088201546001600160a01b039081166060830152600990920154909116608090910152875188908690811061101857611018612029565b6020026020010181905250838061102e90611f16565b9450505b5050600101610e60565b505050509250929050565b6006818154811061105757600080fd5b600091825260209091200154905081565b61107061163e565b611078611746565b600480546000918261108983611f16565b9190505590506040518061014001604052808a815260200189815260200188815260200160008152602001876001600160a01b0316815260200186868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250938552505060016020808501829052426040808701919091526001600160a01b038a81166060808901919091528a82166080988901528987526003808552968390208951815593890151948401949094559087015160028301559186015193810193909355928401516004830180546001600160a01b031916919094161790925560a0830151909150600582019061118d908261203f565b5060c08201516006828101805460ff19169215159290921790915560e08301516007808401919091556101008401516008840180546001600160a01b03199081166001600160a01b039384161790915561012090950151600990940180549095169381169390931790935580546000858152602094855260408082208390556001830184559290527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f0184905580518c81529283018b9052858216908301528316606082015281907f37323758a33aed97b5367a7bf83f761fe5a60c1af1dea93eb27fef67265413189060800160405180910390a2505050505050505050565b6060808284106112af5760405162461bcd60e51b81526004016104d090611fa5565b6006548311156112d15760405162461bcd60e51b81526004016104d090611fcc565b60006112dd8585612003565b90506000805b8281101561138257600060066112f9838a612016565b8154811061130957611309612029565b6000918252602080832090910154808352600390915260409091206006015490915060ff16158061136657506000818152600360205260409020600101541580159061136657506000818152600360205260409020600101544210155b15611379578261137581611f16565b9350505b506001016112e3565b508067ffffffffffffffff81111561139c5761139c611dd9565b6040519080825280602002602001820160405280156113c5578160200160208202803683370190505b5093508067ffffffffffffffff8111156113e1576113e1611dd9565b60405190808252806020026020018201604052801561141a57816020015b6114076118ca565b8152602001906001900390816113ff5790505b5092506000805b8381101561103c5760006006611437838b612016565b8154811061144757611447612029565b60009182526020808320909101548083526003909152604090912060068101549192509060ff16158061148c575060018101541580159061148c575042816001015411155b156115f657818885815181106114a4576114a4612029565b6020908102919091018101919091526040805161014081018252835481526001840154928101929092526002830154908201526003820154606082015260048201546001600160a01b03166080820152600582018054839160a084019161150a90611d9f565b80601f016020809104026020016040519081016040528092919081815260200182805461153690611d9f565b80156115835780601f1061155857610100808354040283529160200191611583565b820191906000526020600020905b81548152906001019060200180831161156657829003601f168201915b5050509183525050600682015460ff16151560208201526007820154604082015260088201546001600160a01b03908116606083015260099092015490911660809091015287518890869081106115dc576115dc612029565b602002602001018190525083806115f290611f16565b9450505b5050600101611421565b61160861163e565b6001600160a01b03811661163257604051631e4fbdf760e01b8152600060048201526024016104d0565b61163b816117a9565b50565b6000546001600160a01b031633146105925760405163118cdaa760e01b81523360048201526024016104d0565b611673611836565b6002805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6040516001600160a01b0383811660248301526044820183905261072791859182169063a9059cbb906064015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050611859565b60026001540361173f57604051633ee5aeb560e01b815260040160405180910390fd5b6002600155565b60025460ff16156105925760405163d93c066560e01b815260040160405180910390fd5b6040516001600160a01b0384811660248301528381166044830152606482018390526117a39186918216906323b872dd906084016116ea565b50505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b611801611746565b6002805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586116a03390565b60025460ff1661059257604051638dfc202b60e01b815260040160405180910390fd5b600080602060008451602086016000885af18061187c576040513d6000823e3d81fd5b50506000513d915081156118945780600114156118a1565b6001600160a01b0384163b155b156117a357604051635274afe760e01b81526001600160a01b03851660048201526024016104d0565b6040518061014001604052806000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001606081526020016000151581526020016000815260200160006001600160a01b0316815260200160006001600160a01b031681525090565b60006020828403121561194c57600080fd5b5035919050565b6000815180845260005b818110156119795760208185018101518683018201520161195d565b506000602082860101526020601f19601f83011685010191505092915050565b60006101408c83528b60208401528a604084015289606084015260018060a01b03808a1660808501528160a08501526119d48285018a611953565b97151560c085015260e08401969096525050918316610100830152909116610120909101529695505050505050565b6001600160a01b038116811461163b57600080fd5b60008083601f840112611a2a57600080fd5b50813567ffffffffffffffff811115611a4257600080fd5b602083019150836020828501011115611a5a57600080fd5b9250929050565b60008060008060008060008060006101008a8c031215611a8057600080fd5b8935985060208a0135975060408a0135965060608a0135955060808a0135611aa781611a03565b945060a08a013567ffffffffffffffff811115611ac357600080fd5b611acf8c828d01611a18565b90955093505060c08a0135611ae381611a03565b915060e08a0135611af381611a03565b809150509295985092959850929598565b600080600060608486031215611b1957600080fd5b8335611b2481611a03565b92506020840135611b3481611a03565b929592945050506040919091013590565b60008060408385031215611b5857600080fd5b50508035926020909101359150565b600060208284031215611b7957600080fd5b8135611b8481611a03565b9392505050565b60008060408385031215611b9e57600080fd5b8235611ba981611a03565b946020939093013593505050565b60008151808452602080850194506020840160005b83811015611be857815187529582019590820190600101611bcc565b509495945050505050565b602081526000611b846020830184611bb7565b60006040808352611c1a6040840186611bb7565b6020848203818601528186518084528284019150828160051b85010183890160005b83811015611cf657601f1987840301855281518051845286810151878501528881015189850152606080820151908501526080808201516001600160a01b03169085015260a0808201516101408287018190529190611c9d83880182611953565b9250505060c080830151611cb48288018215159052565b505060e08281015190860152610100808301516001600160a01b0390811691870191909152610120928301511691909401529385019390850190600101611c3c565b50909a9950505050505050505050565b60008060008060008060008060e0898b031215611d2257600080fd5b8835975060208901359650604089013595506060890135611d4281611a03565b9450608089013567ffffffffffffffff811115611d5e57600080fd5b611d6a8b828c01611a18565b90955093505060a0890135611d7e81611a03565b915060c0890135611d8e81611a03565b809150509295985092959890939650565b600181811c90821680611db357607f821691505b602082108103611dd357634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b601f821115610727576000816000526020600020601f850160051c81016020861015611e185750805b601f850160051c820191505b81811015611e3757828155600101611e24565b505050505050565b67ffffffffffffffff831115611e5757611e57611dd9565b611e6b83611e658354611d9f565b83611def565b6000601f841160018114611e9f5760008515611e875750838201355b600019600387901b1c1916600186901b178355611ef9565b600083815260209020601f19861690835b82811015611ed05786850135825560209485019460019092019101611eb0565b5086821015611eed5760001960f88860031b161c19848701351681555b505060018560011b0183555b5050505050565b634e487b7160e01b600052601160045260246000fd5b600060018201611f2857611f28611f00565b5060010190565b6000808354611f3d81611d9f565b60018281168015611f555760018114611f6a57611f99565b60ff1984168752821515830287019450611f99565b8760005260208060002060005b85811015611f905781548a820152908401908201611f77565b50505082870194505b50929695505050505050565b6020808252600d908201526c496e76616c69642072616e676560981b604082015260600190565b60208082526017908201527f456e6420696e646578206f7574206f6620626f756e6473000000000000000000604082015260600190565b81810381811115610bd157610bd1611f00565b80820180821115610bd157610bd1611f00565b634e487b7160e01b600052603260045260246000fd5b815167ffffffffffffffff81111561205957612059611dd9565b61206d816120678454611d9f565b84611def565b602080601f8311600181146120a2576000841561208a5750858301515b600019600386901b1c1916600185901b178555611e37565b600085815260208120601f198616915b828110156120d1578886015182559484019460019091019084016120b2565b50858210156120ef5787850151600019600388901b60f8161c191681555b5050505050600190811b0190555056fea2646970667358221220be22e31bc263231d07bab3e90a755022ec5f9a220d95f69b530f3fff91262dc364736f6c63430008160033",
      devdoc: {
        details: "Uses ReentrancyGuard to prevent reentrancy attacks and Pausable for emergency stops",
        errors: {
          "EnforcedPause()": [
            {
              details: "The operation failed because the contract is paused.",
            },
          ],
          "ExpectedPause()": [
            {
              details: "The operation failed because the contract is not paused.",
            },
          ],
          "OwnableInvalidOwner(address)": [
            {
              details: "The owner is not a valid owner account. (eg. `address(0)`)",
            },
          ],
          "OwnableUnauthorizedAccount(address)": [
            {
              details: "The caller account is not authorized to perform an operation.",
            },
          ],
          "ReentrancyGuardReentrantCall()": [
            {
              details: "Unauthorized reentrant call.",
            },
          ],
          "SafeERC20FailedOperation(address)": [
            {
              details: "An operation with an ERC-20 token failed.",
            },
          ],
        },
        events: {
          "Paused(address)": {
            details: "Emitted when the pause is triggered by `account`.",
          },
          "Unpaused(address)": {
            details: "Emitted when the pause is lifted by `account`.",
          },
        },
        kind: "dev",
        methods: {
          "createCampaign(uint256,uint256,uint256,address,bytes,address,address)": {
            params: {
              endDate: "Campaign end date (0 for no end date)",
              maxRewards: "Maximum number of rewards (0 for unlimited)",
              minBurnAmount: "Minimum tokens required to burn",
              recipientAddress: "Where tokens go (address(0) means burn)",
              targetCalldata: "Calldata for external call",
              targetContract: "Contract to call (address(0) for no call)",
              tokenAddress: "Token to be spent (address(0) means use rewardToken)",
            },
          },
          "deactivateCampaign(uint256)": {
            params: {
              campaignId: "ID of the campaign to deactivate",
            },
          },
          "getActiveCampaigns(uint256,uint256)": {
            params: {
              endIndex: "End index in the campaigns array (exclusive)",
              startIndex: "Start index in the campaigns array",
            },
            returns: {
              campaignIds: "Array of campaign IDs that are active",
              details: "Array of campaign details corresponding to the IDs",
            },
          },
          "getCampaign(uint256)": {
            params: {
              campaignId: "Campaign ID to query",
            },
          },
          "getCampaignIds(uint256,uint256)": {
            params: {
              endIndex: "End index in the campaigns array (exclusive)",
              startIndex: "Start index in the campaigns array",
            },
            returns: {
              _0: "Array of campaign IDs",
            },
          },
          "getInactiveCampaigns(uint256,uint256)": {
            params: {
              endIndex: "End index in the campaigns array (exclusive)",
              startIndex: "Start index in the campaigns array",
            },
            returns: {
              campaignIds: "Array of campaign IDs that are inactive",
              details: "Array of campaign details corresponding to the IDs",
            },
          },
          "modifyCampaign(uint256,uint256,uint256,uint256,address,bytes,address,address)": {
            params: {
              campaignId: "ID of the campaign to modify",
              endDate: "Campaign end date (0 for no end date)",
              maxRewards: "Maximum number of rewards (0 for unlimited)",
              minBurnAmount: "Minimum tokens required to burn",
              recipientAddress: "Where tokens go (address(0) means burn)",
              targetCalldata: "Calldata for external call",
              targetContract: "Contract to call (address(0) for no call)",
              tokenAddress: "Token to be spent (address(0) means use rewardToken)",
            },
          },
          "owner()": {
            details: "Returns the address of the current owner.",
          },
          "paused()": {
            details: "Returns true if the contract is paused, and false otherwise.",
          },
          "recoverTokens(address,address,uint256)": {
            details: "Allows the owner to recover any ERC20 tokens mistakenly sent to the contract.",
            params: {
              amount: "The amount of tokens to recover.",
              to: "The address to send the recovered tokens to.",
              tokenAddress: "The address of the ERC20 token to recover.",
            },
          },
          "renounceOwnership()": {
            details:
              "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.",
          },
          "setRewardToken(address)": {
            params: {
              _newRewardToken: "Address of the new reward token",
            },
          },
          "transferOwnership(address)": {
            details:
              "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.",
          },
          "triggerReward(uint256,uint256)": {
            params: {
              burnAmount: "Amount of tokens to burn",
              campaignId: "ID of the campaign",
            },
          },
        },
        title: "RewardsMarket",
        version: 1,
      },
      userdoc: {
        kind: "user",
        methods: {
          "createCampaign(uint256,uint256,uint256,address,bytes,address,address)": {
            notice: "Creates a new reward campaign",
          },
          "deactivateCampaign(uint256)": {
            notice: "Deactivates a campaign",
          },
          "getActiveCampaigns(uint256,uint256)": {
            notice: "Returns all active campaigns within the specified range",
          },
          "getCampaign(uint256)": {
            notice: "Returns campaign details",
          },
          "getCampaignIds(uint256,uint256)": {
            notice: "Returns an array of campaign IDs within the specified range",
          },
          "getInactiveCampaigns(uint256,uint256)": {
            notice: "Returns all inactive campaigns within the specified range",
          },
          "getTotalCampaigns()": {
            notice: "Returns total number of campaigns ever created",
          },
          "getUserParticipationCount(address,uint256)": {
            notice: "Returns number of times a user has participated in a campaign",
          },
          "modifyCampaign(uint256,uint256,uint256,uint256,address,bytes,address,address)": {
            notice: "Modifies an existing campaign",
          },
          "pause()": {
            notice: "Emergency pause",
          },
          "recoverTokens(address,address,uint256)": {
            notice: "Only callable by the contract owner.",
          },
          "setRewardToken(address)": {
            notice: "Updates the reward token address",
          },
          "triggerReward(uint256,uint256)": {
            notice: "Triggers a reward by burning tokens",
          },
          "unpause()": {
            notice: "Unpause the contract",
          },
        },
        notice: "Manages reward campaigns where users can burn tokens to trigger rewards",
        version: 1,
      },
      storageLayout: {
        storage: [
          {
            astId: 3128,
            contract: "contracts/RewardsMarket.sol:RewardsMarket",
            label: "_owner",
            offset: 0,
            slot: "0",
            type: "t_address",
          },
          {
            astId: 5185,
            contract: "contracts/RewardsMarket.sol:RewardsMarket",
            label: "_status",
            offset: 0,
            slot: "1",
            type: "t_uint256",
          },
          {
            astId: 5066,
            contract: "contracts/RewardsMarket.sol:RewardsMarket",
            label: "_paused",
            offset: 0,
            slot: "2",
            type: "t_bool",
          },
          {
            astId: 11730,
            contract: "contracts/RewardsMarket.sol:RewardsMarket",
            label: "rewardToken",
            offset: 1,
            slot: "2",
            type: "t_contract(RewardToken)11687",
          },
          {
            astId: 11735,
            contract: "contracts/RewardsMarket.sol:RewardsMarket",
            label: "campaigns",
            offset: 0,
            slot: "3",
            type: "t_mapping(t_uint256,t_struct(Campaign)11727_storage)",
          },
          {
            astId: 11737,
            contract: "contracts/RewardsMarket.sol:RewardsMarket",
            label: "nextCampaignId",
            offset: 0,
            slot: "4",
            type: "t_uint256",
          },
          {
            astId: 11743,
            contract: "contracts/RewardsMarket.sol:RewardsMarket",
            label: "userParticipation",
            offset: 0,
            slot: "5",
            type: "t_mapping(t_address,t_mapping(t_uint256,t_uint256))",
          },
          {
            astId: 11746,
            contract: "contracts/RewardsMarket.sol:RewardsMarket",
            label: "allCampaignIds",
            offset: 0,
            slot: "6",
            type: "t_array(t_uint256)dyn_storage",
          },
          {
            astId: 11750,
            contract: "contracts/RewardsMarket.sol:RewardsMarket",
            label: "campaignIdToArrayIndex",
            offset: 0,
            slot: "7",
            type: "t_mapping(t_uint256,t_uint256)",
          },
        ],
        types: {
          t_address: {
            encoding: "inplace",
            label: "address",
            numberOfBytes: "20",
          },
          "t_array(t_uint256)dyn_storage": {
            base: "t_uint256",
            encoding: "dynamic_array",
            label: "uint256[]",
            numberOfBytes: "32",
          },
          t_bool: {
            encoding: "inplace",
            label: "bool",
            numberOfBytes: "1",
          },
          t_bytes_storage: {
            encoding: "bytes",
            label: "bytes",
            numberOfBytes: "32",
          },
          "t_contract(RewardToken)11687": {
            encoding: "inplace",
            label: "contract RewardToken",
            numberOfBytes: "20",
          },
          "t_mapping(t_address,t_mapping(t_uint256,t_uint256))": {
            encoding: "mapping",
            key: "t_address",
            label: "mapping(address => mapping(uint256 => uint256))",
            numberOfBytes: "32",
            value: "t_mapping(t_uint256,t_uint256)",
          },
          "t_mapping(t_uint256,t_struct(Campaign)11727_storage)": {
            encoding: "mapping",
            key: "t_uint256",
            label: "mapping(uint256 => struct RewardsMarket.Campaign)",
            numberOfBytes: "32",
            value: "t_struct(Campaign)11727_storage",
          },
          "t_mapping(t_uint256,t_uint256)": {
            encoding: "mapping",
            key: "t_uint256",
            label: "mapping(uint256 => uint256)",
            numberOfBytes: "32",
            value: "t_uint256",
          },
          "t_struct(Campaign)11727_storage": {
            encoding: "inplace",
            label: "struct RewardsMarket.Campaign",
            members: [
              {
                astId: 11708,
                contract: "contracts/RewardsMarket.sol:RewardsMarket",
                label: "minBurnAmount",
                offset: 0,
                slot: "0",
                type: "t_uint256",
              },
              {
                astId: 11710,
                contract: "contracts/RewardsMarket.sol:RewardsMarket",
                label: "endDate",
                offset: 0,
                slot: "1",
                type: "t_uint256",
              },
              {
                astId: 11712,
                contract: "contracts/RewardsMarket.sol:RewardsMarket",
                label: "maxRewards",
                offset: 0,
                slot: "2",
                type: "t_uint256",
              },
              {
                astId: 11714,
                contract: "contracts/RewardsMarket.sol:RewardsMarket",
                label: "rewardsIssued",
                offset: 0,
                slot: "3",
                type: "t_uint256",
              },
              {
                astId: 11716,
                contract: "contracts/RewardsMarket.sol:RewardsMarket",
                label: "targetContract",
                offset: 0,
                slot: "4",
                type: "t_address",
              },
              {
                astId: 11718,
                contract: "contracts/RewardsMarket.sol:RewardsMarket",
                label: "targetCalldata",
                offset: 0,
                slot: "5",
                type: "t_bytes_storage",
              },
              {
                astId: 11720,
                contract: "contracts/RewardsMarket.sol:RewardsMarket",
                label: "isActive",
                offset: 0,
                slot: "6",
                type: "t_bool",
              },
              {
                astId: 11722,
                contract: "contracts/RewardsMarket.sol:RewardsMarket",
                label: "createdAt",
                offset: 0,
                slot: "7",
                type: "t_uint256",
              },
              {
                astId: 11724,
                contract: "contracts/RewardsMarket.sol:RewardsMarket",
                label: "tokenAddress",
                offset: 0,
                slot: "8",
                type: "t_address",
              },
              {
                astId: 11726,
                contract: "contracts/RewardsMarket.sol:RewardsMarket",
                label: "recipientAddress",
                offset: 0,
                slot: "9",
                type: "t_address",
              },
            ],
            numberOfBytes: "320",
          },
          t_uint256: {
            encoding: "inplace",
            label: "uint256",
            numberOfBytes: "32",
          },
        },
      },
    },
  },
} as const;

export default externalContracts satisfies GenericContractsDeclaration;
