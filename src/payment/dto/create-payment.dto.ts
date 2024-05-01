export class CreatePaymentDto {
  id_method_payment: string;
  value: bigint;
  id_currency: string;
  conversion_value: bigint;
  id_promo_code: string;
}
