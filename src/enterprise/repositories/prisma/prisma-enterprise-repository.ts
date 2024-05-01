import { Injectable } from '@nestjs/common';
import { EnterpriseRepository } from '../enterprise-repository';
import { Enterprise } from '../../entities/enterprise.entity';
import { UpdateEnterpriseDto } from '../../dto/update-enterprise.dto';
import { CreateEnterpriseDto } from '../../dto/create-enterprise.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class PrismaEnterpriseRepository implements EnterpriseRepository {
  constructor(private prisma: PrismaService) {
    //
  }

  async findOne(id: string): Promise<Enterprise> {
    return await this.prisma.enterprise
      .findFirst({
        where: {
          id_enterprise: id,
        },
        include: {
          Enterprise_Movie: false,
          type_document: true,
        },
      })
      .then((data) => data);
  }

  async findAll(): Promise<Enterprise[]> {
    return await this.prisma.enterprise
      .findMany({
        include: {
          Enterprise_Movie: false,
          type_document: true,
        },
      })
      .then((data) => data);
  }

  async remove(id: string): Promise<Enterprise> {
    return await this.prisma.enterprise
      .delete({ where: { id_enterprise: id } })
      .then((data) => data);
  }

  async update(
    id: string,
    updateEnterpriseDto: UpdateEnterpriseDto,
  ): Promise<Enterprise> {
    return await this.prisma.enterprise
      .update({ where: { id_enterprise: id }, data: updateEnterpriseDto })
      .then((data) => data);
  }

  async create(data: CreateEnterpriseDto): Promise<Enterprise> {
    return await this.prisma.enterprise
      .create({
        data,
      })
      .then((data) => data);
  }
}
