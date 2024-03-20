import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MovieRepository } from './repositories/movie-repository';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieRepository) {}

  @Post()
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.movieService.create(createMovieDto);
  }

  @Get()
  findAll() {
    return this.movieService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.movieService.findOne(id);
  }

  @Get('title/:title')
  findByTitle(@Param('title') title: string) {
    return this.movieService.findByTitle(title);
  }

  @Get('genre/:id')
  findByGenre(@Param('id') id: string) {
    return this.movieService.findByGenre(id);
  }

  @Get('studio/:id')
  findByStudio(@Param('id') id: string) {
    return this.movieService.findByStudio(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.movieService.update(id, updateMovieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.movieService.remove(id);
  }
}
