import { Injectable } from '@nestjs/common';
import { TypeDocumentRepository } from '../type-document-repository';
import { UpdateTypeDocumentDto } from '../../dto/update-type-document.dto';
import { CreateTypeDocumentDto } from '../../dto/create-type-document.dto';
import { PrismaService } from 'src/database/prisma.service';
import { TypeDocument } from 'src/type-document/entities/type-document.entity';

@Injectable()
export class PrismaTypeDocumentRepository implements TypeDocumentRepository {
  constructor(private prisma: PrismaService) {
    //
  }

  async findOne(id: string): Promise<TypeDocument> {
    return await this.prisma.type_Document
      .findFirst({
        where: {
          id_type_document: id,
        },
      })
      .then((data) => data);
  }

  async findAll(): Promise<TypeDocument[]> {
    return await this.prisma.type_Document.findMany().then((data) => data);
  }

  async remove(id: string): Promise<TypeDocument> {
    return await this.prisma.type_Document
      .delete({
        where: {
          id_type_document: id,
        },
      })
      .then((data) => data);
  }

  async update(
    id: string,
    updateTypeDocumentDto: UpdateTypeDocumentDto,
  ): Promise<TypeDocument> {
    return await this.prisma.type_Document
      .update({
        where: {
          id_type_document: id,
        },
        data: updateTypeDocumentDto,
      })
      .then((data) => data);
  }

  async create(data: CreateTypeDocumentDto): Promise<TypeDocument> {
    return await this.prisma.type_Document
      .create({
        data,
      })
      .then((data) => data);
  }
}
