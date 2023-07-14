import { CurrencyEntity } from 'src/app/currency/currency.entity';
import { WalletEntity } from 'src/app/wallet/wallet.entity';

export class CreateWalletMovement {
    withdraw: number;
    deposit: number;
    currency: CurrencyEntity;
    wallet: WalletEntity
}

