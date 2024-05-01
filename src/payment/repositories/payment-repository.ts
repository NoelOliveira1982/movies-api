import { CreatePaymentDto } from '../dto/create-payment.dto';
import { UpdatePaymentDto } from '../dto/update-payment.dto';
import { Payment } from '../entities/payment.entity';

export abstract class PaymentRepository {
  abstract create(body: CreatePaymentDto): Promise<Payment>;
  abstract findOne(id: string): Promise<Payment>;
  abstract findAll(): Promise<Payment[]>;
  abstract remove(id: string): Promise<Payment>;
  abstract update(
    id: string,
    updatePaymentDto: UpdatePaymentDto,
  ): Promise<Payment>;
}
