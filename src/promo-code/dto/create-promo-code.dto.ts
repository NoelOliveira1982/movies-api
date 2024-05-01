import { Decimal } from '@prisma/client/runtime/library';

export class CreatePromoCodeDto {
  code: string;
  percentage: Decimal;
}
