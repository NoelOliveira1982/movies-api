export class CreateMethodPaymentDto {
  method: string;
  quantity_installments?: number;
  fees_per_installment?: number;
  quantity_installment_to_tax?: number;
}
