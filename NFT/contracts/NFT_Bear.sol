// SPDX-License-Identifier: MIT
pragma solidity 0.8.27;

import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFT_Bear is ERC1155URIStorage, Ownable
{
    constructor() ERC1155("https://gateway.pinata.cloud/ipfs/Qmbosv9JaWHNeFqDoPTUtqcoJpYKpKtYTC8MBAA276rUYD") Ownable(msg.sender)
    {}
    string public name = "Mishka";

    function mint (address _to, uint256 _tokenId, uint256 _amount) external onlyOwner
    {
        _mint(_to, _tokenId, _amount, "");
    }
}