import { Movie } from 'src/movie/entities/movie.entity';

export class User {
  id_user: string;
  username: string;
  password: string;
  movies?: Movie[];
}
