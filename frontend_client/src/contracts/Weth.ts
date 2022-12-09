import { addresses } from "./addresses";
import { Contract, utils } from "ethers";
import PadLockArtifacts from "../artifacts/@openzeppelin/contracts/token/ERC20/IERC20.sol/IERC20.json";

const wethInterface = new utils.Interface(PadLockArtifacts.abi);
export const Weth = new Contract(addresses.WETH, wethInterface);
