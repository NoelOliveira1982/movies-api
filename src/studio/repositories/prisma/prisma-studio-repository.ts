import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';
import { StudioRepository } from '../studio-repository';
import { Studio } from '../../entities/studio.entity';
import { UpdateStudioDto } from '../../dto/update-studio.dto';
import { CreateStudioDto } from '../../dto/create-studio.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class PrismaStudioRepository implements StudioRepository {
  constructor(private prisma: PrismaService) {
    //
  }

  async findOne(id: string): Promise<Studio> {
    return await this.prisma.studio
      .findFirst({
        where: {
          id_studio: id,
        },
      })
      .then((data) => data);
  }

  async findByStudio(studio: string): Promise<Studio[]> {
    return await this.prisma.studio
      .findMany({
        where: {
          studio: {
            contains: studio,
          },
        },
      })
      .then((data) => data);
  }

  async findAll(): Promise<Studio[]> {
    return await this.prisma.studio.findMany().then((data) => data);
  }

  async remove(id: string): Promise<Studio> {
    return await this.prisma.studio
      .delete({ where: { id_studio: id } })
      .then((data) => data);
  }

  async update(id: string, updateStudioDto: UpdateStudioDto): Promise<Studio> {
    return await this.prisma.studio
      .update({ where: { id_studio: id }, data: updateStudioDto })
      .then((data) => data);
  }

  async create({ studio }: CreateStudioDto): Promise<Studio> {
    return await this.prisma.studio
      .create({
        data: {
          id_studio: randomUUID(),
          studio,
        },
      })
      .then((data) => data);
  }
}
