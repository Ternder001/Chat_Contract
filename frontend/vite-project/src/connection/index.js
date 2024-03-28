export const SUPPORTED_CHAIN = 11155111;

const sepolia = {
  chainId: SUPPORTED_CHAIN,
  name: "Sepolia",
  currency: "ETH",
  explorerUrl: "https://sepolia.etherscan.io",
  rpcUrl: import.meta.env.VITE_rpc_url,
};

const metadata = {
  name: "My Website",
  description: "My Website description",
  url: "https://mywebsite.com", // origin must match your domain & subdomain
  icons: ["https://avatars.mywebsite.com/"],
};
