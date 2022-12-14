// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;
import "hardhat/console.sol";
import { IPoolAddressesProvider } from "@aave/core-v3/contracts/interfaces/IPoolAddressesProvider.sol";
import { IRewardsController } from "@aave/periphery-v3/contracts/rewards/interfaces/IRewardsController.sol";
import { AaveProtocolDataProvider } from "@aave/core-v3/contracts/misc/AaveProtocolDataProvider.sol";
import { IPool } from "@aave/core-v3/contracts/interfaces/IPool.sol";
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Vault {
    address public owner;
    IERC20 public immutable weth;
    IPool public immutable pool;
    AaveProtocolDataProvider public immutable poolDataProvider;
    IRewardsController public immutable rewardController;
    address[] public aVTokens;

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    constructor(
        IERC20 _weth,
        IPoolAddressesProvider _poolAddressProvider,
        IRewardsController _rewardController
    ) {
        weth = _weth;
        pool = IPool(_poolAddressProvider.getPool());
        poolDataProvider = AaveProtocolDataProvider(_poolAddressProvider.getPoolDataProvider());
        rewardController = _rewardController;
    }

    /// @notice initiates the owner of the vault
    /// @notice and weth reserve address
    /// @param _owner set up as padlock
    function init(address _owner) external {
        require(owner == address(0));
        owner = _owner;
        (address aVToken,,) = poolDataProvider.getReserveTokensAddresses(address(weth));
        aVTokens.push(aVToken);
    }

    /// @notice pulling funds from padlock
    /// @notice and deposit them to aave protocol
    function depositToAave(uint256 _amount) external onlyOwner {
        weth.transferFrom(owner, address(this), _amount);
        weth.approve(address(pool), _amount);
        pool.deposit(address(weth), _amount, address(this), 0);
    }

    /// @notice withdraw funds from aave protocol
    /// @param _amount of funds to withdraw
    function withdraw(uint256 _amount) public onlyOwner {
        pool.withdraw(address(weth), _amount, address(this));
        weth.transfer(owner, _amount);
    }

    /// @notice withdraw all funds from aave protocol
    function withdrawAll() external onlyOwner returns (uint256 _deposit, uint256 _incentives) {
        (_deposit, , , , , , , , ) = poolDataProvider.getUserReserveData(address(weth), address(this));
        withdraw(_deposit);
        _incentives = claimIncentives();
    }

    /// @notice claim all incentive rewards
    function claimIncentives() internal onlyOwner returns (uint256 _amount) {    
        (, uint256[] memory amounts)= rewardController.claimAllRewards(aVTokens, owner);
        for(uint i; i < amounts.length; i++) {
            _amount += amounts[i];
        }
    }
}
