import { Module } from '@nestjs/common';
import { PromoCodeController } from './promo-code.controller';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaPromoCodeRepository } from './repositories/prisma/prisma-promo-code-repository';
import { PromoCodeRepository } from './repositories/promo-code-repository';

@Module({
  controllers: [PromoCodeController],
  providers: [
    {
      provide: PromoCodeRepository,
      useClass: PrismaPromoCodeRepository,
    },
    PrismaService,
  ],
})
export class PromoCodeModule { }
