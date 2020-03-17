const { use, expect } = require("chai");
const { solidity, MockProvider, deployContract } = require("ethereum-waffle");
const Token = require("../build/SKEToken.json");

use(solidity);

describe("Counter smart contract", () => {
  const provider = new MockProvider();
  const [wallet] = provider.getWallets();

  async function deployToken(initialValue: string) {
    const token = await deployContract(wallet, Token, [initialValue]);
    return token;
  }

  it("sets initial balance in the constructor", async () => {
    const token = await deployToken("10000");
    expect(await token.balanceOf(wallet.address)).to.equal("10000");
  });
});
