import "dotenv/config";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`, // Replace with an RPC URL
      accounts: [`0x${process.env.PRIVATE_KEY}`], // Replace with your wallet private key
    },
  },
  etherscan: {
    apiKey: `${process.env.ETHERSCAN_API_KEY}`, // Get this from etherscan.io
  },
};

export default config;

