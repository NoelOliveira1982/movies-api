import { Currency, Promo_Code } from '@prisma/client';
import { MethodPayment } from 'src/method-payment/entities/method-payment.entity';

export class Payment {
  value: bigint;
  currency: Currency;
  conversion_value: bigint;
  promo_code: Promo_Code;
  method: MethodPayment;
}
