import { IWalletMovement } from "./IwalletMovement.dto";
import { IBalance } from "./Ibalance.dto";

export interface IBalanceWithMovement {
    WalletMovement: IWalletMovement[];
    balance: IBalance;
}