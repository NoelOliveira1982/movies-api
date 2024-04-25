import { CreateGenreDto } from '../dto/create-genre.dto';
import { UpdateGenreDto } from '../dto/update-genre.dto';
import { Genre } from '../entities/genre.entity';

export abstract class GenreRepository {
  abstract create(body: CreateGenreDto): Promise<Genre>;
  abstract findOne(id: string): Promise<Genre>;
  abstract findByGenre(genre: string): Promise<Genre[]>;
  abstract findAll(): Promise<Genre[]>;
  abstract remove(id: string): Promise<Genre>;
  abstract update(id: string, updateGenreDto: UpdateGenreDto): Promise<Genre>;
}
