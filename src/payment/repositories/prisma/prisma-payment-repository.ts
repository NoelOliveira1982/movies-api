import { Injectable } from '@nestjs/common';
import { PaymentRepository } from '../payment-repository';
import { Payment } from '../../entities/payment.entity';
import { UpdatePaymentDto } from '../../dto/update-payment.dto';
import { CreatePaymentDto } from '../../dto/create-payment.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class PrismaPaymentRepository implements PaymentRepository {
  constructor(private prisma: PrismaService) {
    //
  }

  async findOne(id: string): Promise<Payment> {
    return await this.prisma.payment
      .findFirst({
        where: {
          id_payment: id,
        },
        include: {
          currency: true,
          method: true,
          promo_code: true,
        },
      })
      .then((data) => data);
  }

  async findAll(): Promise<Payment[]> {
    return await this.prisma.payment
      .findMany({
        include: {
          currency: true,
          method: true,
          promo_code: true,
        },
      })
      .then((data) => data);
  }

  async remove(id: string): Promise<Payment> {
    return await this.prisma.payment
      .delete({
        where: { id_payment: id },
        include: {
          currency: true,
          method: true,
          promo_code: true,
        },
      })
      .then((data) => data);
  }

  async update(
    id: string,
    updatePaymentDto: UpdatePaymentDto,
  ): Promise<Payment> {
    return await this.prisma.payment
      .update({
        where: { id_payment: id },
        data: updatePaymentDto,
        include: {
          currency: true,
          method: true,
          promo_code: true,
        },
      })
      .then((data) => data);
  }

  async create(data: CreatePaymentDto): Promise<Payment> {
    return await this.prisma.payment
      .create({
        data,
        include: {
          currency: true,
          method: true,
          promo_code: true,
        },
      })
      .then((data) => data);
  }
}
