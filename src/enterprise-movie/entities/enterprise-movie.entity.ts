import { Enterprise } from '../../enterprise/entities/enterprise.entity';
import { Movie } from '../../movie/entities/movie.entity';

export class EnterpriseMovie {
  id_enterprise_movie: string;
  enterprise: Enterprise;
  movie: Movie;
  cost: bigint;
}
