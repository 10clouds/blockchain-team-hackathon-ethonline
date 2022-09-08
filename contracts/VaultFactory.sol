// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

import "@aave/core-v3/contracts/interfaces/IPoolAddressesProvider.sol";
import "@aave/core-v3/contracts/interfaces/IPool.sol";
import "./interfaces/IWETH.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Vault.sol";

contract VaultFactory {

    address public immutable padlock;
    IPool public immutable pool;
    IWETH public immutable weth;

    constructor(address _padlock, IPoolAddressesProvider _poolAddressProvider, IWETH _weth) {
        padlock = _padlock;
        pool = IPool(_poolAddressProvider.getPool());
        weth = _weth;
    }

    function create() external returns (Vault) {
        Vault vault = new Vault(weth, pool);
        vault.transferOwnership(padlock);
        return vault;
    }
}