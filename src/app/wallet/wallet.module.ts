import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletEntity } from './wallet.entity';
import { UsersEntity } from '../users/users.entity';
import { WalletMovementEntity } from '../wallet-movement/wallet-movement.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WalletEntity, UsersEntity, WalletMovementEntity])],
  providers: [WalletService]
})
export class WalletModule { }
