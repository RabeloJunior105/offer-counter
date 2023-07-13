import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { WalletEntity } from '../wallet/wallet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CurrencyEntity } from '../currency/currency.entity';
import { WalletMovementEntity } from './wallet-movement.entity';

@Injectable()
export class WalletMovementRepository {
    constructor(
        @InjectRepository(WalletMovementEntity)
        private readonly walletMovement: Repository<WalletMovementEntity>
    ) { }

    async findWalletMovement(wallet_id: string, curency_id: string) {
        return await this.walletMovement.find({
            where: {
                wallet: {
                    id: wallet_id
                },
            },
            relations: {
                currency: true,
                wallet: true,
            }
        })
    }

}
