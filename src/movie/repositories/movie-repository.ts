import { CreateMovieDto } from '../dto/create-movie.dto';
import { UpdateMovieDto } from '../dto/update-movie.dto';
import { Movie } from '../entities/movie.entity';

export abstract class MovieRepository {
  abstract create(body: CreateMovieDto): Promise<Movie>;
  abstract findOne(id: string): Promise<Movie>;
  abstract findByTitle(title: string): Promise<Movie[]>;
  abstract findByStudio(studioId: string): Promise<Movie[]>;
  abstract findByGenre(genreId: string): Promise<Movie[]>;
  abstract findAll(): Promise<Movie[]>;
  abstract remove(id: string): Promise<Movie>;
  abstract update(id: string, updateMovieDto: UpdateMovieDto): Promise<Movie>;
}
