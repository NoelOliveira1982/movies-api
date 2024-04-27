import { Module } from '@nestjs/common';
import { EnterpriseMovieService } from './enterprise-movie.service';
import { EnterpriseMovieController } from './enterprise-movie.controller';

@Module({
  controllers: [EnterpriseMovieController],
  providers: [EnterpriseMovieService],
})
export class EnterpriseMovieModule {}
