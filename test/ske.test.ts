import { use, expect } from "chai";
import { solidity, MockProvider, deployContract } from "ethereum-waffle";
import SKETokenArtifact from "../build/SKEToken.json";
import { SKEToken } from "../types/ethers-contracts/SKEToken";

use(solidity);

describe("Counter smart contract", () => {
  const provider = new MockProvider();
  const [wallet] = provider.getWallets();

  async function deployToken(initialValue: string) {
    const token = (await deployContract(wallet, SKETokenArtifact, [
      initialValue
    ])) as SKEToken;
    return token;
  }

  it("sets initial balance in the constructor", async () => {
    const token = await deployToken("10000");
    expect(await token.balanceOf(wallet.address)).to.equal("10000");
  });
});
