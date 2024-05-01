import { Decimal } from '@prisma/client/runtime/library';

export class CreateCurrencyDto {
  currency: string;
  relation_to_dolar: Decimal;
}
