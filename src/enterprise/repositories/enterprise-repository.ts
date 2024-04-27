import { CreateEnterpriseDto } from '../dto/create-enterprise.dto';
import { UpdateEnterpriseDto } from '../dto/update-enterprise.dto';
import { Enterprise } from '../entities/enterprise.entity';

export abstract class EnterpriseRepository {
  abstract create(body: CreateEnterpriseDto): Promise<Enterprise>;
  abstract findOne(id: string): Promise<Enterprise>;
  abstract findAll(): Promise<Enterprise[]>;
  abstract remove(id: string): Promise<Enterprise>;
  abstract update(
    id: string,
    updateEnterpriseDto: UpdateEnterpriseDto,
  ): Promise<Enterprise>;
}
