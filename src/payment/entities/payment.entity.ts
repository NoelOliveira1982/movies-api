import { Currency, Promo_Code } from '@prisma/client';
import { MethodPayment } from 'src/method-payment/entities/method-payment.entity';

export class Payment {
  value: number;
  currency: Currency;
  conversion_value: number;
  promo_code: Promo_Code;
  method: MethodPayment;
}
