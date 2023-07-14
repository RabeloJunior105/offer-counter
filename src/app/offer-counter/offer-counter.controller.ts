import { Body, Controller, Delete, Get, Post, Query, UseGuards } from '@nestjs/common'
import { IPagination } from 'src/shared/Pagination/IPagination.interface'
import { OfferCounterService } from './offer-counter.service'
import { ICreateDTO } from './dto/create/create.interface'
import { IDeleteDTO } from './dto/delete/delete.interface'

@Controller('offer-counter')
export class OfferCounterController {
    constructor(private readonly OfferCounterService: OfferCounterService) { }

    @Get()
    async findAll(@Query() { take, page }: IPagination) {
        return this.OfferCounterService.findAll({ take, page })
    }
    @Post()
    async create(@Body() { amount, currency_id, wallet_id }: ICreateDTO, @Query() { user_id }) {

        return await this.OfferCounterService.create({ amount, currency_id, wallet_id }, user_id)
    }

    @Delete()
    async delete(@Query() { id, user_id }: IDeleteDTO) {
        return await this.OfferCounterService.delete({ id, user_id })
    }
}
