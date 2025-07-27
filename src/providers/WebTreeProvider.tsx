"use client";

import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import config from "@/config";

// Create a QueryClient instance with default options
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1_000 * 60 * 60 * 24, // 24 hours
      refetchOnWindowFocus: false,
      retry: 2, // Retry failed queries twice
      staleTime: 1_000 * 60 * 5, // 5 minutes
    },
  },
});

const WebTreeProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default WebTreeProvider;
