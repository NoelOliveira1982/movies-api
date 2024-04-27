import { PartialType } from '@nestjs/mapped-types';
import { CreateEnterpriseMovieDto } from './create-enterprise-movie.dto';

export class UpdateEnterpriseMovieDto extends PartialType(CreateEnterpriseMovieDto) {}
