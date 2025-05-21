const web3 = require("@solana/web3.js");
const { Connection, Keypair, clusterApiUrl } = require("@solana/web3.js");
const fs = require("fs");
const { BN } = require("bn.js");

const config = {
  SOLANA_NODE: "https://api.devnet.solana.com",
  SOLANA_NODE_MAINNET: "https://api.mainnet-beta.solana.com/",
  CALL_SOLANA_SAMPLE_CONTRACT: "0x776E4abe7d73Fed007099518F3aA02C8dDa9baA0",
  CALL_SOLANA_SAMPLE_CONTRACT_MAINNET:
    "0x5BAB7cAb78D378bBf325705C51ec4649200A311b",
  
};
module.exports = { config };