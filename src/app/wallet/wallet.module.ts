import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletEntity } from './wallet.entity';
import { WalletRepository } from './wallet.repository';

@Module({
  imports: [TypeOrmModule.forFeature([WalletEntity])],
  providers: [WalletService, WalletRepository],
  controllers: [],
  exports: [WalletService]
})
export class WalletModule { }
