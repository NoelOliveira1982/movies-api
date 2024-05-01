import { Module } from '@nestjs/common';
import { CurrencyController } from './currency.controller';
import { PrismaService } from 'src/database/prisma.service';
import { CurrencyRepository } from './repositories/currency-repository';
import { PrismaCurrencyRepository } from './repositories/prisma/prisma-currency-repository';

@Module({
  controllers: [CurrencyController],
  providers: [
    {
      provide: CurrencyRepository,
      useClass: PrismaCurrencyRepository,
    },
    PrismaService,
  ],
})
export class CurrencyModule {}
