import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { WalletEntity } from '../wallet/wallet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CurrencyEntity } from '../currency/currency.entity';

@Injectable()
export class WalletMovementRepository {
    constructor(
        @InjectRepository(WalletEntity)
        private readonly walletMovement: Repository<WalletEntity>
    ) { }

    async findBalance(wallet: WalletEntity, currency: CurrencyEntity) {

    }

}
