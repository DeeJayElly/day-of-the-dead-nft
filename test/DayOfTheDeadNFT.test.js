const NFT = artifacts.require("./DayOfTheDeadNFT.sol");

require("chai").use(require("chai-as-promised")).should();

contract("DayOfTheDeadNFT", (accounts) => {
  let nft;

  before(async () => {
    nft = await NFT.deployed();
  });

  describe("DayOfTheDeadNFT deployment", async () => {
    it("deploys successfully", async () => {
      const address = await nft.address;
      assert.notEqual(address, 0x0);
      assert.notEqual(address, "");
    });

    it("has correct name", async () => {
      const name = await nft.name();
      assert.equal(name, "DayOfTheDeadNFT");
    });
  });
});
