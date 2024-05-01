export class CreatePaymentDto {
  id_method_payment: string;
  value: number;
  id_currency: string;
  conversion_value: number;
  id_promo_code: string;
}
