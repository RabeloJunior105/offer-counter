import { Module } from '@nestjs/common';
import { WalletMovementService } from './wallet-movement.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletEntity } from '../wallet/wallet.entity';
import { CurrencyEntity } from '../currency/currency.entity';
import { WalletMovementController } from './wallet-movement.controller';
import { WalletMovementRepository } from './wallet-movement.repository';

@Module({
  imports: [TypeOrmModule.forFeature([WalletEntity, CurrencyEntity])],
  providers: [WalletMovementService, WalletMovementRepository],
  controllers: [WalletMovementController]
})
export class WalletMovementModule { }
