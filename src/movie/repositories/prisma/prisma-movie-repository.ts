import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';
import { MovieRepository } from '../movie-repository';
import { UpdateMovieDto } from '../../dto/update-movie.dto';
import { CreateMovieDto } from '../../dto/create-movie.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Movie } from 'src/movie/entities/movie.entity';

@Injectable()
export class PrismaMovieRepository implements MovieRepository {
  constructor(private prisma: PrismaService) {
    //
  }

  async findOne(id: string): Promise<Movie> {
    return await this.prisma.movie
      .findFirst({
        where: {
          id_movie: id,
        },
        include: {
          genre: true,
          studio: true,
        },
      })
      .then((data) => data);
  }

  async findAll(): Promise<Movie[]> {
    return await this.prisma.movie
      .findMany({
        include: {
          genre: true,
          studio: true,
        },
      })
      .then((data) => data);
  }

  async remove(id: string): Promise<Movie> {
    return await this.prisma.movie
      .delete({
        where: { id_movie: id },
        include: {
          genre: true,
          studio: true,
        },
      })
      .then((data) => data);
  }

  async update(id: string, updateMovieDto: UpdateMovieDto): Promise<Movie> {
    return await this.prisma.movie
      .update({
        where: { id_movie: id },
        data: updateMovieDto,
        include: {
          genre: true,
          studio: true,
        },
      })
      .then((data) => data);
  }

  async create({
    id_genre,
    audience_score,
    id_studio,
    title,
    year,
  }: CreateMovieDto): Promise<Movie> {
    return await this.prisma.movie
      .create({
        data: {
          id_movie: randomUUID(),
          audience_score: audience_score,
          title: title,
          year: year,
          id_genre: id_genre,
          id_studio: id_studio,
        },
        include: {
          genre: true,
          studio: true,
        },
      })
      .then((data) => data);
  }
}
