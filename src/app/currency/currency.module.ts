import { Module } from '@nestjs/common';
import { CurrencyController } from './currency.controller';
import { CurrencyService } from './currency.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurrencyEntity } from './currency.entity';
import { CurrencyRepository } from './currency.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CurrencyEntity])],
  controllers: [CurrencyController],
  providers: [CurrencyService, CurrencyRepository]
})
export class CurrencyModule { }
