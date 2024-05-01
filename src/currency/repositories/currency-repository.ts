import { CreateCurrencyDto } from '../dto/create-currency.dto';
import { UpdateCurrencyDto } from '../dto/update-currency.dto';
import { Currency } from '../entities/currency.entity';

export abstract class CurrencyRepository {
  abstract create(body: CreateCurrencyDto): Promise<Currency>;
  abstract findOne(id: string): Promise<Currency>;
  abstract findAll(): Promise<Currency[]>;
  abstract remove(id: string): Promise<Currency>;
  abstract update(
    id: string,
    updatecurrencyDto: UpdateCurrencyDto,
  ): Promise<Currency>;
}
