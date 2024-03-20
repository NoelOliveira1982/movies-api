import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaUserRepository } from './repositories/prisma/prisma-user-repository';
import { UserRepository } from './repositories/user-repository';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    PrismaService,
  ],
})
export class UserModule { }
