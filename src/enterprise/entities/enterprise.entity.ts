import { EnterpriseMovie } from 'src/enterprise-movie/entities/enterprise-movie.entity';
import { TypeDocument } from 'src/type-document/entities/type-document.entity';

export class Enterprise {
  id_enterprise: string;
  document: string;
  id_type_document: string;
  contract_expires_at: string;
  Enterprise: Enterprise[];
  TypeDocument: TypeDocument[];
  EnterpriseMovie: EnterpriseMovie[];
}
