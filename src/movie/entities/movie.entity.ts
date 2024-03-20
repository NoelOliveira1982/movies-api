import { Genre } from 'src/genre/entities/genre.entity';
import { Studio } from 'src/studio/entities/studio.entity';
import { User } from 'src/user/entities/user.entity';

export class Movie {
  id_movie: string;
  title: string;
  studio: Studio;
  audience_score: string;
  year: number;
  genre: Genre;
  user?: User;
}
