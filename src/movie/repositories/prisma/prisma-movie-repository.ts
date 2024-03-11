import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';
import { MovieRepository } from '../movie-repository';
import { UpdateMovieDto } from '../../dto/update-movie.dto';
import { CreateMovieDto } from '../../dto/create-movie.dto';
import { PrismaService } from 'src/database/prisma.service';
import { GetMovieDto } from 'src/movie/dto/get-movie.dto';

@Injectable()
export class PrismaMovieRepository implements MovieRepository {
  constructor(private prisma: PrismaService) {
    //
  }

  async findOne(id: string): Promise<GetMovieDto> {
    return await this.prisma.movie
      .findFirst({
        where: {
          id_movie: id,
        },
      })
      .then((data) => data);
  }

  async findAll(): Promise<GetMovieDto[]> {
    return await this.prisma.movie.findMany().then((data) => data);
  }

  async remove(id: string): Promise<GetMovieDto> {
    return await this.prisma.movie
      .delete({ where: { id_movie: id } })
      .then((data) => data);
  }

  async update(
    id: string,
    updateMovieDto: UpdateMovieDto,
  ): Promise<GetMovieDto> {
    return await this.prisma.movie
      .update({ where: { id_movie: id }, data: updateMovieDto })
      .then((data) => data);
  }

  async create({
    genre,
    audience_score,
    studio,
    title,
    year,
  }: CreateMovieDto): Promise<GetMovieDto> {
    return await this.prisma.movie
      .create({
        data: {
          id_movie: randomUUID(),
          audience_score: audience_score,
          title: title,
          year: year,
          id_genre: genre.id_genre,
          id_studio: studio.id_studio,
        },
      })
      .then((data) => data);
  }
}
