async function main()
{
    const NFT_Fox = await ethers.deployContract("NFT_Fox");
    const NFT_Bear = await ethers.deployContract("NFT_Bear");
    const contractAddress_NFT_Fox = await NFT_Fox.getAddress();
    const contractAddress_NFT_Bear = await NFT_Bear.getAddress();
    console.log("Contract NFT_Fox deployed to address:", contractAddress_NFT_Fox);
    console.log("Contract NFT_Bear deployed to address:", contractAddress_NFT_Bear);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });