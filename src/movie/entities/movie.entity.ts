import { Genre } from 'src/genre/entities/genre.entity';
import { Studio } from 'src/studio/entities/studio.entity';

export class Movie {
  id_movie: string;
  title: string;
  studio: Studio;
  audience_score: string;
  year: number;
  Genre: Genre;
}
