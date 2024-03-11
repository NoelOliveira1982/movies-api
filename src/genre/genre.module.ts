import { Module } from '@nestjs/common';
import { GenreController } from './genre.controller';
import { GenreRepository } from './repositories/genre-repository';
import { PrismaGenreRepository } from './repositories/prisma/prisma-genre-repository';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [GenreController],
  providers: [
    {
      provide: GenreRepository,
      useClass: PrismaGenreRepository,
    },
    PrismaService,
  ],
})
export class GenreModule {}
