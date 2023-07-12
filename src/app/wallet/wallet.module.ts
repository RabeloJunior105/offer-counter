import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletEntity } from './wallet.entity';
import { UsersEntity } from '../users/users.entity';
import { WalletMovementEntity } from '../wallet-movement/wallet-movement.entity';
import { WalletController } from './wallet.controller';
import { WalletRepository } from './wallet.repository';

@Module({
  imports: [TypeOrmModule.forFeature([WalletEntity, UsersEntity, WalletMovementEntity])],
  providers: [WalletService, WalletRepository],
  controllers: [WalletController]
})
export class WalletModule { }
