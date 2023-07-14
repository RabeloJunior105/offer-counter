
import { } from 'class-validator';
import { CurrencyEntity } from 'src/app/currency/currency.entity';
import { UsersEntity } from 'src/app/users/users.entity';
import { WalletEntity } from 'src/app/wallet/wallet.entity';

export class DeleteOffCounterDTO {
    id: string
    amount: number
    users: UsersEntity
    wallet: WalletEntity
    currency: CurrencyEntity
    deletedAt ?: Date
}