import { Injectable } from '@nestjs/common';
import { CreateEnterpriseDto } from '../../dto/create-enterprise.dto';
import { UpdateEnterpriseDto } from '../../dto/update-enterprise.dto';
import { PrismaService } from "../../../database/prisma.service";

@Injectable()
export class EnterpriseService {
  constructor(private prisma: PrismaService) {
    //
  }
  create(createEnterpriseDto: CreateEnterpriseDto) {
    return 'This action adds a new enterprise';
  }

  findAll() {
    return `This action returns all enterprise`;
  }

  findOne(id: string) {
    return await this.prisma.enterprise.findFirst({
      where: {
        id_enterprise: id,
      },
      include: {
        document: true,
        TypeDocument: {
          include: {
            type_document: true,
            format: true,
        }
      },
        contract_expires_at:true,
      }
    });
    }
  }

  update(id: number, updateEnterpriseDto: UpdateEnterpriseDto) {
    return `This action updates a #${id} enterprise`;
  }

  remove(id: number) {
    return `This action removes a #${id} enterprise`;
  }
}
