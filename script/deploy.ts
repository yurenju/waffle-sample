import dotenv from "dotenv";
import { getDefaultProvider, Wallet } from "ethers";
import { deployContract } from "ethereum-waffle";
import SKETokenArtifact from "../build/SKEToken.json";
import { SKEToken } from "../types/ethers-contracts/SKEToken";

dotenv.config();

async function deploy() {
  const mnemonic = process.env["MNEMONIC"] || "";
  const provider = getDefaultProvider("ropsten");
  const wallet = Wallet.fromMnemonic(mnemonic).connect(provider);
  const token = (await deployContract(wallet, SKETokenArtifact, [
    "100000"
  ])) as SKEToken;
  console.log("deployed, address: " + token.address);
}

deploy();
