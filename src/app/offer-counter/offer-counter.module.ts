import { Module } from '@nestjs/common';
import { OfferCounterController } from './offer-counter.controller';
import { OfferCounterService } from './offer-counter.service';
import { OfferCounterRepository } from './offer-counter.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OfferCounterEntity } from './offer-counter.entity';
import { WalletMovementModule } from '../wallet-movement/wallet-movement.module';
import { WalletModule } from '../wallet/wallet.module';
import { UsersModule } from '../users/users.module';
import { CurrencyModule } from '../currency/currency.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([OfferCounterEntity]),
    WalletMovementModule,
    WalletModule,
    UsersModule,
    CurrencyModule
  ],
  controllers: [OfferCounterController],
  providers: [OfferCounterService,OfferCounterRepository]
})
export class OfferCounterModule { }
