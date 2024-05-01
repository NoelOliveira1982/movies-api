import { Injectable } from '@nestjs/common';
import { PromoCodeRepository } from '../promo-code-repository';
import { PromoCode } from '../../entities/promo-code.entity';
import { UpdatePromoCodeDto } from '../../dto/update-promo-code.dto';
import { CreatePromoCodeDto } from '../../dto/create-promo-code.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class PrismaPromoCodeRepository implements PromoCodeRepository {
  constructor(private prisma: PrismaService) {
    //
  }

  async findOne(id: string): Promise<PromoCode> {
    return await this.prisma.promo_Code
      .findFirst({
        where: {
          id_promo_code: id,
        },
      })
      .then((data) => data);
  }

  async findAll(): Promise<PromoCode[]> {
    return await this.prisma.promo_Code.findMany().then((data) => data);
  }

  async remove(id: string): Promise<PromoCode> {
    return await this.prisma.promo_Code
      .delete({ where: { id_promo_code: id } })
      .then((data) => data);
  }

  async update(
    id: string,
    updatePromoCodeDto: UpdatePromoCodeDto,
  ): Promise<PromoCode> {
    return await this.prisma.promo_Code
      .update({ where: { id_promo_code: id }, data: updatePromoCodeDto })
      .then((data) => data);
  }

  async create(data: CreatePromoCodeDto): Promise<PromoCode> {
    return await this.prisma.promo_Code
      .create({
        data,
      })
      .then((data) => data);
  }
}
