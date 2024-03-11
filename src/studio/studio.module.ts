import { Module } from '@nestjs/common';
import { StudioController } from './studio.controller';
import { StudioRepository } from './repositories/studio-repository';
import { PrismaStudioRepository } from './repositories/prisma/prisma-studio-repository';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [StudioController],
  providers: [
    {
      provide: StudioRepository,
      useClass: PrismaStudioRepository,
    },
    PrismaService,
  ],
})
export class StudioModule {}
