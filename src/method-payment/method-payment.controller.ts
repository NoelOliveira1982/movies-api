import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateMethodPaymentDto } from './dto/create-method-payment.dto';
import { UpdateMethodPaymentDto } from './dto/update-method-payment.dto';
import { MethodPaymentRepository } from './repository/method-payment-repository';

@Controller('method-payment')
export class MethodPaymentController {
  constructor(private readonly methodPaymentService: MethodPaymentRepository) {}

  @Post()
  create(@Body() createMethodPaymentDto: CreateMethodPaymentDto) {
    return this.methodPaymentService.create(createMethodPaymentDto);
  }

  @Get()
  findAll() {
    return this.methodPaymentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.methodPaymentService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMethodPaymentDto: UpdateMethodPaymentDto,
  ) {
    return this.methodPaymentService.update(id, updateMethodPaymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.methodPaymentService.remove(id);
  }
}
