import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateTypeDocumentDto } from './dto/create-type-document.dto';
import { UpdateTypeDocumentDto } from './dto/update-type-document.dto';
import { TypeDocumentRepository } from './repositories/type-document-repository';

@Controller('type-document')
export class TypeDocumentController {
  constructor(private readonly typeDocumentService: TypeDocumentRepository) {}

  @Post()
  create(@Body() createTypeDocumentDto: CreateTypeDocumentDto) {
    return this.typeDocumentService.create(createTypeDocumentDto);
  }

  @Get()
  findAll() {
    return this.typeDocumentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeDocumentService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTypeDocumentDto: UpdateTypeDocumentDto,
  ) {
    return this.typeDocumentService.update(id, updateTypeDocumentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeDocumentService.remove(id);
  }
}
