import { Injectable } from '@nestjs/common';
import { WalletMovementRepository } from './wallet-movement.repository';
import { IBalance } from './dto/Ibalance.dto';
import { CurrencyService } from '../currency/currency.service';
import { WalletService } from '../wallet/wallet.service';
import { AppError } from 'src/shared/Error/AppError.shared';
import { ICreateWalletMovement } from './dto/create/create.interface';
import { CreateWalletMovement } from './dto/create/create.dto';

@Injectable()
export class WalletMovementService {
    constructor(
        private readonly WalletMovementRepository: WalletMovementRepository,
        private readonly CurrencyService: CurrencyService,
        private readonly WalletService: WalletService,
    ) { }

    async findTotal(wallet_id: string, currency_id: string): Promise<IBalance> {
        const movement = await this.WalletMovementRepository.findWalletMovement(wallet_id, currency_id)
        var total = 0

        for (const mov of movement) {
            total = total + (mov.deposit - mov.withdraw)
        }
        return { total }
    }
    async createMovement({ withdraw, deposit, currency_id, wallet_id, user_id }: ICreateWalletMovement) {
        const findCurrency = await this.CurrencyService.findId(currency_id)
        const findWallet = await this.WalletService.findByWalletAndUser(wallet_id, user_id)
        if (!findWallet)
            throw new AppError("you are not allowed to use this wallet", 401)

        const balanceTotal = await this.findTotal(wallet_id, currency_id)

        if (withdraw > 0 && withdraw > balanceTotal.total)
            throw new AppError("You have no balance to make this offer")


        const createMovement = new CreateWalletMovement();
        createMovement.withdraw = withdraw;
        createMovement.deposit = deposit
        createMovement.currency = findCurrency;
        createMovement.wallet = findWallet;

        return await this.WalletMovementRepository.create(createMovement)

    }
}
