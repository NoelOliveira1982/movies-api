import { Decimal } from '@prisma/client/runtime/library';

export class Currency {
  currency: string;
  relation_to_dolar: Decimal;
}
