import { Module } from '@nestjs/common';
import { MethodPaymentController } from './method-payment.controller';
import { MethodPaymentRepository } from './repository/method-payment-repository';
import { PrismaMethodPaymentRepository } from './repository/prisma/prisma-method-payment-repository';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [MethodPaymentController],
  providers: [
    {
      provide: MethodPaymentRepository,
      useClass: PrismaMethodPaymentRepository,
    },
    PrismaService,
  ],
})
export class MethodPaymentModule {}
