import { Injectable, NotFoundException } from '@nestjs/common';
import { CurrencyEntity } from './currency.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CurrencyRepository {
    constructor(
        @InjectRepository(CurrencyEntity)
        private readonly Currency: Repository<CurrencyEntity>
    ) { }

    async findId(id: string): Promise<CurrencyEntity> {
        try {
            const findId = await this.Currency.findOneOrFail({
                where: {
                    id
                }
            })
            return findId
        } catch (error) {
            throw new NotFoundException(error.message)
        }
    }
}
