import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieEnterpriseDto } from './create-movie-enterprise.dto';

export class UpdateMovieWithEnterpriseDto extends PartialType(
  CreateMovieEnterpriseDto,
) {}
