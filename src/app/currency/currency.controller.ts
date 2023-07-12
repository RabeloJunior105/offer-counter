import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { ApiKeyAuthGuard } from '../auth/auth.guard';

@Controller('currency')
export class CurrencyController {
    constructor(
        private readonly CurrencyService: CurrencyService
    ) { }

    @UseGuards(ApiKeyAuthGuard)
    @Get('/:id')
    async findId(@Param() { id }) {
        return await this.CurrencyService.findId(id)
    }
}
