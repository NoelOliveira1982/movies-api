import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateStudioDto } from './dto/create-studio.dto';
import { UpdateStudioDto } from './dto/update-studio.dto';
import { StudioRepository } from './repositories/studio-repository';

@Controller('studio')
export class StudioController {
  constructor(private readonly studioService: StudioRepository) { }

  @Post()
  create(@Body() createStudioDto: CreateStudioDto) {
    return this.studioService.create(createStudioDto);
  }

  @Get()
  findAll() {
    return this.studioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studioService.findOne(id);
  }

  @Get('studio/:studio')
  findByStudio(@Param('studio') studio: string) {
    return this.studioService.findByStudio(studio);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudioDto: UpdateStudioDto) {
    return this.studioService.update(id, updateStudioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studioService.remove(id);
  }
}
