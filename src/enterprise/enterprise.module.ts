import { Module } from '@nestjs/common';
import { EnterpriseController } from './enterprise.controller';
import { PrismaService } from 'src/database/prisma.service';
import { EnterpriseRepository } from './repositories/enterprise-repository';
import { PrismaEnterpriseRepository } from './repositories/prisma/prisma-enterprise-repository';

@Module({
  controllers: [EnterpriseController],
  providers: [
    {
      provide: EnterpriseRepository,
      useClass: PrismaEnterpriseRepository,
    },
    PrismaService,
  ],
})
export class EnterpriseModule {}
