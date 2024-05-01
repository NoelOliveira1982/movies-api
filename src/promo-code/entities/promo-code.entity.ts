import { Decimal } from '@prisma/client/runtime/library';

export class PromoCode {
  code: string;
  percentage: Decimal;
}
