import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';
import { GenreRepository } from '../genre-repository';
import { Genre } from '../../entities/genre.entity';
import { UpdateGenreDto } from '../../dto/update-genre.dto';
import { CreateGenreDto } from '../../dto/create-genre.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class PrismaGenreRepository implements GenreRepository {
  constructor(private prisma: PrismaService) {
    //
  }

  async findOne(id: string): Promise<Genre> {
    return await this.prisma.genre
      .findFirst({
        where: {
          id_genre: id,
        },
      })
      .then((data) => data);
  }

  async findByGenre(genre: string): Promise<Genre[]> {
    return await this.prisma.genre
      .findMany({
        where: {
          genre: {
            contains: genre,
          },
        },
      })
      .then((data) => data);
  }

  async findAll(): Promise<Genre[]> {
    return await this.prisma.genre.findMany().then((data) => data);
  }

  async remove(id: string): Promise<Genre> {
    return await this.prisma.genre
      .delete({ where: { id_genre: id } })
      .then((data) => data);
  }

  async update(id: string, updateGenreDto: UpdateGenreDto): Promise<Genre> {
    return await this.prisma.genre
      .update({ where: { id_genre: id }, data: updateGenreDto })
      .then((data) => data);
  }

  async create({ genre }: CreateGenreDto): Promise<Genre> {
    return await this.prisma.genre
      .create({
        data: {
          id_genre: randomUUID(),
          genre,
        },
      })
      .then((data) => data);
  }
}
