import { Injectable } from '@nestjs/common';
import { CurrencyRepository } from './currency.repository';
import { CurrencyEntity } from './currency.entity';

@Injectable()
export class CurrencyService {
    constructor(
        private readonly currencyRepository: CurrencyRepository
    ) { }

    async findId(id: string): Promise<CurrencyEntity> {
        return await this.currencyRepository.findId(id)
    }
}
