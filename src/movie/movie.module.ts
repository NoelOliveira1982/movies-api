import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { PrismaService } from 'src/database/prisma.service';
import { MovieRepository } from './repositories/movie-repository';
import { PrismaMovieRepository } from './repositories/prisma/prisma-movie-repository';

@Module({
  controllers: [MovieController],
  providers: [
    {
      provide: MovieRepository,
      useClass: PrismaMovieRepository,
    },
    PrismaService,
  ],
})
export class MovieModule {}
