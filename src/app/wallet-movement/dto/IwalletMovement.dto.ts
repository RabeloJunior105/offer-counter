import { WalletEntity } from "src/app/wallet/wallet.entity"
import { WalletMovementEntity } from "../wallet-movement.entity"

export interface IWalletMovement {
    id: string
    withdraw: number
    deposit: number
    currency: WalletMovementEntity[]
    wallet: WalletEntity[]
    createdAt: string
    updatedAt: string
}