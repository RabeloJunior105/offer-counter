import { Module } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurrencyEntity } from './currency.entity';
import { CurrencyRepository } from './currency.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CurrencyEntity])],
  controllers: [],
  providers: [CurrencyService, CurrencyRepository],
  exports: [CurrencyService]
})
export class CurrencyModule { }
