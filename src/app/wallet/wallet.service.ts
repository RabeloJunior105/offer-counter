import { Injectable } from '@nestjs/common';
import { WalletRepository } from './wallet.repository';

@Injectable()
export class WalletService {
    constructor(
        private readonly WalletRepository: WalletRepository
    ) { }

    async findId(id: string) {
        return await this.WalletRepository.findId(id)
    }
    async findByUser(user_id: string) {
        return await this.WalletRepository.findByUser(user_id)
    }
}
