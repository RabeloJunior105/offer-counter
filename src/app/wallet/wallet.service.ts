import { Injectable } from '@nestjs/common';
import { WalletRepository } from './wallet.repository';
import { AppError } from 'src/shared/Error/AppError.shared';

@Injectable()
export class WalletService {
    constructor(
        private readonly WalletRepository: WalletRepository
    ) { }

    async findId(id: string) {
        return await this.WalletRepository.findId(id)
    }
    async findByWalletAndUser(id: string, user_id: string) {
        const walletByUser = await this.WalletRepository.findByUser(id, user_id)
        if (!walletByUser)
            throw new AppError("Wallet not found", 404)
            
        return walletByUser
    }
}
