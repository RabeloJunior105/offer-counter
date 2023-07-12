import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './app/auth/auth.module';
import { CurrencyModule } from './app/currency/currency.module';
import { join } from 'path';
import { UsersModule } from './app/users/users.module';
import { WalletModule } from './app/wallet/wallet.module';
import { WalletMovementModule } from './app/wallet-movement/wallet-movement.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      migrations: [
          'src/database/migrations/*.ts',
      ],
      synchronize: true,

    }),
    AuthModule,
    CurrencyModule,
    UsersModule,
    WalletModule,
    WalletMovementModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
