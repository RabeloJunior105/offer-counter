import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { WalletMovementService } from './wallet-movement.service';
import { ApiKeyAuthGuard } from '../auth/auth.guard';

@Controller('wallet-movement')
export class WalletMovementController {
    constructor(private readonly WalletMovementService: WalletMovementService) { }

    @UseGuards(ApiKeyAuthGuard)
    @Get('balance')
    async findBalance(@Query() { currency_id, wallet_id }) {
        return await this.WalletMovementService.findBalance(wallet_id, currency_id);
    }
}
