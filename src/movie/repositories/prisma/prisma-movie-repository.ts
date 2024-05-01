import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';
import { MovieRepository } from '../movie-repository';
import { UpdateMovieDto } from '../../dto/update-movie.dto';
import { CreateMovieDto } from '../../dto/create-movie.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Movie } from 'src/movie/entities/movie.entity';
import { MovieWithEnterprise } from 'src/movie/entities/movie-with-enterprise.entity';
import { UpdateMovieWithEnterpriseDto } from 'src/movie/dto/update-movie-enterprise.dto';
import { CreateMovieEnterpriseDto } from 'src/movie/dto/create-movie-enterprise.dto';

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
          User_Movie: {
            include: {
              user: true,
            },
          },
        },
      })
      .then((data) => data);
  }

  async findByTitle(title: string): Promise<Movie[]> {
    return await this.prisma.movie
      .findMany({
        where: {
          title: {
            contains: title,
          },
        },
        include: {
          genre: true,
          studio: true,
          User_Movie: {
            include: {
              user: true,
            },
          },
        },
      })
      .then((data) => data);
  }

  async findByGenre(genreId: string): Promise<Movie[]> {
    return await this.prisma.movie
      .findMany({
        where: {
          id_genre: genreId,
        },
        include: {
          genre: true,
          studio: true,
          User_Movie: {
            include: {
              user: true,
            },
          },
        },
      })
      .then((data) => data);
  }

  async findByStudio(studioId: string): Promise<Movie[]> {
    return await this.prisma.movie
      .findMany({
        where: {
          id_studio: studioId,
        },
        include: {
          genre: true,
          studio: true,
          User_Movie: {
            include: {
              user: true,
            },
          },
        },
      })
      .then((data) => data);
  }

  async findByEnterprise(enterpriseId: string): Promise<MovieWithEnterprise[]> {
    return await this.prisma.enterprise_Movie
      .findMany({
        where: {
          id_enterprise: enterpriseId,
        },
        include: {
          enterprise: true,
          movie: {
            include: {
              genre: true,
              studio: true,
            },
          },
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
          User_Movie: {
            include: {
              user: true,
            },
          },
        },
      })
      .then((data) => data);
  }

  async removeFromEnterprise(
    id_movie_enterprise: string,
  ): Promise<MovieWithEnterprise> {
    return await this.prisma.enterprise_Movie
      .delete({
        where: { id_enterprise_movie: id_movie_enterprise },
        include: {
          enterprise: true,
          movie: {
            include: {
              genre: true,
              studio: true,
            },
          },
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
          User_Movie: {
            include: {
              user: true,
            },
          },
        },
      })
      .then((data) => data);
  }

  async updateWithEnterprise(
    id: string,
    updateMovieDto: UpdateMovieWithEnterpriseDto,
  ): Promise<MovieWithEnterprise> {
    return await this.prisma.enterprise_Movie
      .update({
        where: { id_enterprise_movie: id },
        data: updateMovieDto,
        include: {
          enterprise: true,
          movie: {
            include: {
              genre: true,
              studio: true,
            },
          },
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
          User_Movie: {
            include: {
              user: true,
            },
          },
        },
      })
      .then((data) => data);
  }

  async createWithEnterprise(
    data: CreateMovieEnterpriseDto,
  ): Promise<MovieWithEnterprise> {
    return await this.prisma.enterprise_Movie
      .create({
        data,
        include: {
          enterprise: true,
          movie: {
            include: {
              genre: true,
              studio: true,
            },
          },
        },
      })
      .then((data) => data);
  }
}
