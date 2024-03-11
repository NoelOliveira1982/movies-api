import { CreateStudioDto } from '../dto/create-studio.dto';
import { UpdateStudioDto } from '../dto/update-studio.dto';
import { Studio } from '../entities/studio.entity';

export abstract class StudioRepository {
  abstract create(body: CreateStudioDto): Promise<Studio>;
  abstract findOne(id: string): Promise<Studio>;
  abstract findAll(): Promise<Studio[]>;
  abstract remove(id: string): Promise<Studio>;
  abstract update(
    id: string,
    updateStudioDto: UpdateStudioDto,
  ): Promise<Studio>;
}
