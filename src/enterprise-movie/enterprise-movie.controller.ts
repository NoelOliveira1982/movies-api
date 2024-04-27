import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EnterpriseMovieService } from './enterprise-movie.service';
import { CreateEnterpriseMovieDto } from './dto/create-enterprise-movie.dto';
import { UpdateEnterpriseMovieDto } from './dto/update-enterprise-movie.dto';

@Controller('enterprise-movie')
export class EnterpriseMovieController {
  constructor(private readonly enterpriseMovieService: EnterpriseMovieService) {}

  @Post()
  create(@Body() createEnterpriseMovieDto: CreateEnterpriseMovieDto) {
    return this.enterpriseMovieService.create(createEnterpriseMovieDto);
  }

  @Get()
  findAll() {
    return this.enterpriseMovieService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enterpriseMovieService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEnterpriseMovieDto: UpdateEnterpriseMovieDto) {
    return this.enterpriseMovieService.update(+id, updateEnterpriseMovieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enterpriseMovieService.remove(+id);
  }
}
