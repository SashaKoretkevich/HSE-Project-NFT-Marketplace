/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const { API_URL, PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;

module.exports = {
  solidity: "0.8.27",
  defaultNetwork: "sepolia",
   networks:
   {
      hardhat: {},
      sepolia:
      {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
   etherscan:
   {
      apiKey: ETHERSCAN_API_KEY
   },
   sourcify:
   {
      enabled: false
   },
};
