import { CreatePromoCodeDto } from '../dto/create-promo-code.dto';
import { UpdatePromoCodeDto } from '../dto/update-promo-code.dto';
import { PromoCode } from '../entities/promo-code.entity';

export abstract class PromoCodeRepository {
  abstract create(body: CreatePromoCodeDto): Promise<PromoCode>;
  abstract findOne(id: string): Promise<PromoCode>;
  abstract findAll(): Promise<PromoCode[]>;
  abstract remove(id: string): Promise<PromoCode>;
  abstract update(
    id: string,
    updatePromoCodeDto: UpdatePromoCodeDto,
  ): Promise<PromoCode>;
}
