import { Injectable } from '@nestjs/common';
import { CurrencyRepository } from './currency.repository';
import { CurrencyEntity } from './currency.entity';
import { AppError } from 'src/shared/Error/AppError.shared';

@Injectable()
export class CurrencyService {
    constructor(
        private readonly currencyRepository: CurrencyRepository
    ) { }

    async findId(id: string): Promise<CurrencyEntity> {
        const findId = await this.currencyRepository.findId(id)

        if(!findId)
            throw new AppError("currency not exists")

        return findId
    }
}
