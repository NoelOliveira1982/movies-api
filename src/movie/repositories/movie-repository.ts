import { CreateMovieDto } from '../dto/create-movie.dto';
import { GetMovieDto } from '../dto/get-movie.dto';
import { UpdateMovieDto } from '../dto/update-movie.dto';

export abstract class MovieRepository {
  abstract create(body: CreateMovieDto): Promise<GetMovieDto>;
  abstract findOne(id: string): Promise<GetMovieDto>;
  abstract findAll(): Promise<GetMovieDto[]>;
  abstract remove(id: string): Promise<GetMovieDto>;
  abstract update(
    id: string,
    updateMovieDto: UpdateMovieDto,
  ): Promise<GetMovieDto>;
}
