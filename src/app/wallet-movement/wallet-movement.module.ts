import { Module } from '@nestjs/common';
import { WalletMovementService } from './wallet-movement.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletEntity } from '../wallet/wallet.entity';
import { CurrencyEntity } from '../currency/currency.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WalletEntity, CurrencyEntity])],
  providers: [WalletMovementService]
})
export class WalletMovementModule { }
