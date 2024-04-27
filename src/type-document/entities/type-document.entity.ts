import { Enterprise } from 'src/enterprise/entities/enterprise.entity';

export class TypeDocument {
  id_type_document: string;
  type_document: string;
  format: string;
  Enterprise: Enterprise[];
}
