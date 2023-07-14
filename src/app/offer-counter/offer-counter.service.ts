import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { IPagination } from 'src/shared/Pagination/IPagination.interface';
import { OfferCounterRepository } from './offer-counter.repository';
import { WalletMovementService } from '../wallet-movement/wallet-movement.service';
import { WalletService } from '../wallet/wallet.service';
import { UsersService } from '../users/users.service';
import { AppError } from 'src/shared/Error/AppError.shared';
import { CurrencyService } from '../currency/currency.service';
import { ICreateDTO } from './dto/create/create.interface';
import { Between } from 'typeorm';
import { endOfDay, startOfDay } from 'date-fns';
import { CreateOffCounterDTO } from './dto/create/create.dto';
import { IDeleteDTO } from './dto/delete/delete.interface';
import { paginateResponse } from 'src/shared/Pagination/paginate.service';

@Injectable()
export class OfferCounterService {
    constructor(
        private readonly OfferCounterRepository: OfferCounterRepository,
        private readonly WalletMovementService: WalletMovementService,
        private readonly CurrencyService: CurrencyService,
        private readonly WalletService: WalletService,
        private readonly UsersService: UsersService,
    ) { }

    async findAll({ take, page }: IPagination) {
        const data = await this.OfferCounterRepository.findAll({ take, page })
        return paginateResponse(data, page, take)
    }

    async create({ amount, currency_id, wallet_id }: ICreateDTO, user_id: string) {
        const findUser = await this.UsersService.findId(user_id);
        if (!findUser)
            throw new AppError("this user not exists", 404)

        const totalOffers = await this.OfferCounterRepository.findBetween(user_id, new Date(Date.now()))

        if (totalOffers.length > 5) {
            throw new AppError("you have reached the offer limit", 400)
        }
        const walletByUser = await this.WalletService.findByWalletAndUser(wallet_id, user_id)
        if (!walletByUser)
            throw new AppError("you are not allowed to use this wallet", 401)

        const currencyById = await this.CurrencyService.findId(currency_id)

        const balanceWallet = await this.WalletMovementService.findTotal(wallet_id, currency_id)

        if (amount > balanceWallet.total)
            throw new AppError("You have no balance to make this offer")

        const offer = new CreateOffCounterDTO()
        offer.amount = amount
        offer.currency = currencyById
        offer.users = findUser
        offer.wallet = walletByUser

        const createOffers = await this.OfferCounterRepository.create(offer)

        if (createOffers) {
            await this.WalletMovementService.createMovement({
                withdraw: offer.amount,
                deposit: 0.00,
                user_id: offer.users?.id,
                wallet_id: offer.wallet?.id,
                currency_id: offer.currency?.id
            })
        }

        return createOffers
    }

    async delete({ id, user_id }: IDeleteDTO) {
        const findOfferCounter = await this.OfferCounterRepository.findByIdAndUser(id, user_id)

        if (findOfferCounter.deletedAt)
            throw new AppError("this offer does not exist", 404)
        findOfferCounter.deletedAt = new Date(Date.now())

        return await this.OfferCounterRepository.delete(findOfferCounter)
    }
}
