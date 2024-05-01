import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PrismaService } from 'src/database/prisma.service';
import { PaymentRepository } from './repositories/payment-repository';
import { PrismaPaymentRepository } from './repositories/prisma/prisma-payment-repository';

@Module({
  controllers: [PaymentController],
  providers: [
    {
      provide: PaymentRepository,
      useClass: PrismaPaymentRepository,
    },
    PrismaService,
  ],
})
export class PaymentModule {}
