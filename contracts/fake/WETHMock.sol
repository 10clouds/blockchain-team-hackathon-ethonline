// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract WETHMock is ERC20 {
    constructor() ERC20("WETH Mock", "WETHM") {
        _mint(msg.sender, 100_000 * 10**18);
    }

    function withdraw(uint256) external {}

    function deposit() external payable {}
    
    function mint(uint256 amount) external {}
}
