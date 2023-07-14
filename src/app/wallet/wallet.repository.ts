import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, Repository } from 'typeorm';
import { WalletEntity } from './wallet.entity';

@Injectable()
export class WalletRepository {
    constructor(
        @InjectRepository(WalletEntity)
        private readonly Wallet: Repository<WalletEntity>
    ) { }

    async findId(id: string) {
        try {
            const findId = await this.Wallet.findOneOrFail({
                where: {
                    id
                }
            })
            return findId
        } catch (error) {
            throw new NotFoundException(error.message)
        }
    }

    async findByUser(id: string, user_id: string) {
        try {
            const findId = await this.Wallet.findOne({
                where: {
                    id,
                    user: {
                        id: user_id
                    }
                },
            })
            return findId
        } catch (error) {
            throw new NotFoundException(error.message)
        }
    }
}
