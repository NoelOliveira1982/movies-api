import { Module } from '@nestjs/common';
import { TypeDocumentController } from './type-document.controller';
import { TypeDocumentRepository } from './repositories/type-document-repository';
import { PrismaTypeDocumentRepository } from './repositories/prisma/prisma-type-document-repository';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [TypeDocumentController],
  providers: [
    {
      provide: TypeDocumentRepository,
      useClass: PrismaTypeDocumentRepository,
    },
    PrismaService,
  ],
})
export class TypeDocumentModule {}
