import { Enterprise } from 'src/enterprise/entities/enterprise.entity';
import { Movie } from './movie.entity';

export class MovieWithEnterprise {
  id_enterprise_movie: string;
  movie: Movie;
  enterprise: Enterprise;
  cost: bigint;
}
