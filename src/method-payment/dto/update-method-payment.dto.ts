import { PartialType } from '@nestjs/mapped-types';
import { CreateMethodPaymentDto } from './create-method-payment.dto';

export class UpdateMethodPaymentDto extends PartialType(
  CreateMethodPaymentDto,
) {}
