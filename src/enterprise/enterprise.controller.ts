import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateEnterpriseDto } from './dto/create-enterprise.dto';
import { UpdateEnterpriseDto } from './dto/update-enterprise.dto';
import { EnterpriseRepository } from './repositories/enterprise-repository';

@Controller('enterprise')
export class EnterpriseController {
  constructor(private readonly enterpriseService: EnterpriseRepository) {}

  @Post()
  create(@Body() createEnterpriseDto: CreateEnterpriseDto) {
    return this.enterpriseService.create(createEnterpriseDto);
  }

  @Get()
  findAll() {
    return this.enterpriseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enterpriseService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEnterpriseDto: UpdateEnterpriseDto,
  ) {
    return this.enterpriseService.update(id, updateEnterpriseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enterpriseService.remove(id);
  }
}
