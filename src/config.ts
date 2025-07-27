import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, zksync, anvil, sepolia } from "wagmi/chains";
import { http } from "wagmi";

const config = getDefaultConfig({
  appName: "Simple Bank Foundry UI",
  projectId: "YOUR_PROJECT_ID",
  chains: [mainnet, zksync, anvil, sepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
  //TODO: when deploying to production, you can add your RPC URLs here
  // transports: {
  //   [mainnet.id]: http("https://eth-mainnet.g.alchemy.com/v2/..."),
  //   [sepolia.id]: http("https://eth-sepolia.g.alchemy.com/v2/..."),
  // },
});

export default config;
