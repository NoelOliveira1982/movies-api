import { Genre } from 'src/genre/entities/genre.entity';
import { Studio } from 'src/studio/entities/studio.entity';

export class CreateMovieDto {
  id_movie: string;
  title: string;
  studio: Partial<Studio>;
  audience_score: string;
  year: number;
  genre: Partial<Genre>;
}
