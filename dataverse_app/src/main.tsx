import React from "react";
import ReactDOM from "react-dom/client";
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  connectorsForWallets
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
  polygonMumbai
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import {
  // dataverseWallet,
  injectedDataverseWallet,
} from "@dataverse/wallet-adapter";

import { DataverseContextProvider } from "@dataverse/hooks";

import App from "./App";

import "./index.css";
const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora,polygonMumbai],
  [
    
    publicProvider()
  ]
);

const { wallets } = getDefaultWallets({
  appName: 'Gating Communities',
  projectId: '3d4df573423308d09acc9c00bff0cc58',
  chains
});

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "Other",
    wallets: [
      
      injectedDataverseWallet({ chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <WagmiConfig config={wagmiConfig}>
  <RainbowKitProvider chains={chains}>
  <DataverseContextProvider>
  <App />
</DataverseContextProvider>
</RainbowKitProvider>
    </WagmiConfig>

);
