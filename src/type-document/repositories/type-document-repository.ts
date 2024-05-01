import { CreateTypeDocumentDto } from '../dto/create-type-document.dto';
import { UpdateTypeDocumentDto } from '../dto/update-type-document.dto';
import { TypeDocument } from '../entities/type-document.entity';

export abstract class TypeDocumentRepository {
  abstract create(body: CreateTypeDocumentDto): Promise<TypeDocument>;
  abstract findOne(id: string): Promise<TypeDocument>;
  abstract findAll(): Promise<TypeDocument[]>;
  abstract remove(id: string): Promise<TypeDocument>;
  abstract update(
    id: string,
    updateTypeDocumentDto: UpdateTypeDocumentDto,
  ): Promise<TypeDocument>;
}
