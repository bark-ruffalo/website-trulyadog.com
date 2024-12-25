# 🏗 Bark Ruffalo

[On GitHub](https://github.com/bark-ruffalo), we've open-sourced our **contracts, our scripts, and the UI (website)**. Any other crypto or AI agent project may use them; we just ask you to consider airdropping our DAO address (`0xc638FB83d2bad5dD73d4C7c7deC0445d46a0716F`) or our stakers (we can provide a list of addresses, or you can use `getLockedUsersByPool()` on [our staking contract](https://basescan.org/address/0xA6FaCD417faf801107bF19F4a24062Ff15AE9C61#readContract)). We'll help you get started if you need help with the code (@nebu_human and @BatataKawaii on Telegram, or @TrulyADog on X).

🧪 Project description

⚙️ Built using NextJS, RainbowKit, Foundry/Hardhat, Wagmi, Viem, and Typescript.

- 🪝 **[Custom hooks](https://docs.scaffoldeth.io/hooks/)**: Collection of React hooks wrapper around [wagmi](https://wagmi.sh/) to simplify interactions with smart contracts with typescript autocompletion.
- 🧱 [**Components**](https://docs.scaffoldeth.io/components/): Collection of common web3 components to quickly build your frontend.
- 🔥 **Burner Wallet & Local Faucet**: Quickly test your application with a burner wallet and local faucet.
- 🔐 **Integration with Wallet Providers**: Connect to different wallet providers and interact with the Ethereum network.

![Debug Contracts tab](https://github.com/scaffold-eth/scaffold-eth-2/assets/55535804/b237af0c-5027-4849-a5c1-2e31495cccb1)
![image](https://github.com/user-attachments/assets/e33ad02b-79d3-4cd2-a9c9-cab36d38e133)

## Requirements

Before you begin, you need to install the following tools:

- [Node (>= v18.18)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with Scaffold-ETH 2, follow the steps below:

1. Install the necessary packages

```
yarn install
```

This command will install all the necessary packages and dependencies, so it might take a while.

> [!NOTE]
> You can also initialize your project with one of our extensions to add specific features or starter-kits. Learn more in our [extensions documentation](https://docs.scaffoldeth.io/extensions/).

2. Start your NextJS app:

```
yarn start
```

## Interacting with staking contracts.

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the `Debug Contracts` page.

If you're contract owner, then you can perform following actions.

1. Add pools

   Currently our staking platform has 3 pools. First 2 pools are for $PAWSY and $LP tokens and last one is for Test token.
   PAWSY and LP tokens are not deployed on baseSepolia yet, so TestnetToken is only available to lock now.

2. Pause/Unpause
3. Set reward token
4. Transfer ownership
5. Update reward rates
6. Emergency unlock
7. Recover tokens

**What's next**:

- Update deployed smart contracts

  To update the smart contracts, you just need to modify `contracts/deployeContracts.ts` file.

- Edit the app config

  You can tweak the app config in `packages/nextjs/scaffold.config.ts`.
  In the app config, you can set `targetNetwork` where your contract deployed. Current config has been set to `baseSepolia`.
  Customize the app config to add or update your app config settings and global variables.

## Documentation

Visit our [docs](https://docs.scaffoldeth.io) to learn all the technical details and guides of Scaffold-ETH 2.

To know more about its features, check out our [website](https://scaffoldeth.io).
