import { Injectable } from '@nestjs/common';
import { MethodPaymentRepository } from '../method-payment-repository';
import { MethodPayment } from '../../entities/method-payment.entity';
import { UpdateMethodPaymentDto } from '../../dto/update-method-payment.dto';
import { CreateMethodPaymentDto } from '../../dto/create-method-payment.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class PrismaMethodPaymentRepository implements MethodPaymentRepository {
  constructor(private prisma: PrismaService) {
    //
  }

  async findOne(id: string): Promise<MethodPayment> {
    return await this.prisma.method_Payment
      .findFirst({
        where: {
          id_method_payment: id,
        },
      })
      .then((data) => data);
  }

  async findAll(): Promise<MethodPayment[]> {
    return await this.prisma.method_Payment.findMany().then((data) => data);
  }

  async remove(id: string): Promise<MethodPayment> {
    return await this.prisma.method_Payment
      .delete({ where: { id_method_payment: id } })
      .then((data) => data);
  }

  async update(
    id: string,
    updateMethodPaymentDto: UpdateMethodPaymentDto,
  ): Promise<MethodPayment> {
    return await this.prisma.method_Payment
      .update({
        where: { id_method_payment: id },
        data: updateMethodPaymentDto,
      })
      .then((data) => data);
  }

  async create(data: CreateMethodPaymentDto): Promise<MethodPayment> {
    return await this.prisma.method_Payment
      .create({
        data,
      })
      .then((data) => data);
  }
}
