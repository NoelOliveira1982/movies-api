import { Injectable } from '@nestjs/common';
import { CurrencyRepository } from '../currency-repository';
import { Currency } from '../../entities/currency.entity';
import { UpdateCurrencyDto } from '../../dto/update-currency.dto';
import { CreateCurrencyDto } from '../../dto/create-currency.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class PrismaCurrencyRepository implements CurrencyRepository {
  constructor(private prisma: PrismaService) {
    //
  }

  async findOne(id: string): Promise<Currency> {
    return await this.prisma.currency
      .findFirst({
        where: {
          id_currency: id,
        },
      })
      .then((data) => data);
  }

  async findAll(): Promise<Currency[]> {
    return await this.prisma.currency.findMany().then((data) => data);
  }

  async remove(id: string): Promise<Currency> {
    return await this.prisma.currency
      .delete({ where: { id_currency: id } })
      .then((data) => data);
  }

  async update(
    id: string,
    updateCurrencyDto: UpdateCurrencyDto,
  ): Promise<Currency> {
    return await this.prisma.currency
      .update({ where: { id_currency: id }, data: updateCurrencyDto })
      .then((data) => data);
  }

  async create(data: CreateCurrencyDto): Promise<Currency> {
    return await this.prisma.currency
      .create({
        data,
      })
      .then((data) => data);
  }
}
