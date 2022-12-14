// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract IncentivesMock is ERC20 {
    constructor() ERC20("Incentives Mock", "INCM") {
        _mint(msg.sender, 100_000 * 10**18);
    }
}
