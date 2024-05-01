import { CreateMovieEnterpriseDto } from '../dto/create-movie-enterprise.dto';
import { CreateMovieDto } from '../dto/create-movie.dto';
import { UpdateMovieDto } from '../dto/update-movie.dto';
import { MovieWithEnterprise } from '../entities/movie-with-enterprise.entity';
import { Movie } from '../entities/movie.entity';
import { UpdateMovieWithEnterpriseDto } from '../dto/update-movie-enterprise.dto';

export abstract class MovieRepository {
  abstract create(body: CreateMovieDto): Promise<Movie>;
  abstract createWithEnterprise(
    body: CreateMovieEnterpriseDto,
  ): Promise<MovieWithEnterprise>;
  abstract findOne(id: string): Promise<Movie>;
  abstract findByTitle(title: string): Promise<Movie[]>;
  abstract findByStudio(studioId: string): Promise<Movie[]>;
  abstract findByGenre(genreId: string): Promise<Movie[]>;
  abstract findByEnterprise(
    enterpriseId: string,
  ): Promise<MovieWithEnterprise[]>;
  abstract findAll(): Promise<Movie[]>;
  abstract findAllWithEnterprise(): Promise<MovieWithEnterprise[]>;
  abstract remove(id: string): Promise<Movie>;
  abstract removeFromEnterprise(
    id_movie_enterprise: string,
  ): Promise<MovieWithEnterprise>;
  abstract update(id: string, updateMovieDto: UpdateMovieDto): Promise<Movie>;
  abstract updateWithEnterprise(
    id: string,
    updateMovieWithEnterprise: UpdateMovieWithEnterpriseDto,
  ): Promise<MovieWithEnterprise>;
}
