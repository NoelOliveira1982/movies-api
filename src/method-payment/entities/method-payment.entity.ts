import { Decimal } from '@prisma/client/runtime/library';

export class MethodPayment {
  method: string;
  quantity_installments: number;
  fees_per_installment: Decimal;
  quantity_installment_to_tax: number;
}
