import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { ApiKeyAuthGuard } from '../auth/auth.guard';

@Controller('wallet')
export class WalletController {
    constructor(
        private readonly WalletService: WalletService
    ) { }

    @UseGuards(ApiKeyAuthGuard)
    @Get()
    async findId(@Query() { wallet_id }) {
        return await this.WalletService.findId(wallet_id)
    }
    @UseGuards(ApiKeyAuthGuard)
    @Get('user')
    async findUserId(@Query() { user_id }) {
        return await this.WalletService.findByUser(user_id)
    }
}
