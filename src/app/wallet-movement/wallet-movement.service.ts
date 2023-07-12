import { Injectable } from '@nestjs/common';
import { WalletMovementRepository } from './wallet-movement.repository';

@Injectable()
export class WalletMovementService {
    constructor(
        private readonly WalletMovementRepository: WalletMovementRepository
    ) { }
    async findBalance(wallet_id: String, currency_id: String) {
        
    }
}
