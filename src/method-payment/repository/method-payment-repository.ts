import { CreateMethodPaymentDto } from '../dto/create-method-payment.dto';
import { UpdateMethodPaymentDto } from '../dto/update-method-payment.dto';
import { MethodPayment } from '../entities/method-payment.entity';

export abstract class MethodPaymentRepository {
  abstract create(body: CreateMethodPaymentDto): Promise<MethodPayment>;
  abstract findOne(id: string): Promise<MethodPayment>;
  abstract findAll(): Promise<MethodPayment[]>;
  abstract remove(id: string): Promise<MethodPayment>;
  abstract update(
    id: string,
    updateMethodPaymentDto: UpdateMethodPaymentDto,
  ): Promise<MethodPayment>;
}
