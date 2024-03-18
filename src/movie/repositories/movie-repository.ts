import { CreateMovieDto } from '../dto/create-movie.dto';
import { UpdateMovieDto } from '../dto/update-movie.dto';
import { Movie } from '../entities/movie.entity';

export abstract class MovieRepository {
  abstract create(body: CreateMovieDto): Promise<Movie>;
  abstract findOne(id: string): Promise<Movie>;
  abstract findAll(): Promise<Movie[]>;
  abstract remove(id: string): Promise<Movie>;
  abstract update(id: string, updateMovieDto: UpdateMovieDto): Promise<Movie>;
}
