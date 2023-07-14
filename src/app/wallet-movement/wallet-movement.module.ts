import { Module } from '@nestjs/common';
import { WalletMovementService } from './wallet-movement.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletEntity } from '../wallet/wallet.entity';
import { CurrencyEntity } from '../currency/currency.entity';
import { WalletMovementRepository } from './wallet-movement.repository';
import { WalletMovementEntity } from './wallet-movement.entity';
import { CurrencyModule } from '../currency/currency.module';
import { WalletModule } from '../wallet/wallet.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([WalletMovementEntity]),
    CurrencyModule,
    WalletModule
  ],
  providers: [WalletMovementService, WalletMovementRepository],
  controllers: [],
  exports: [WalletMovementService]
})
export class WalletMovementModule { }
