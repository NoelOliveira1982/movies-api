import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';
import { UserRepository } from '../user-repository';
import { User } from '../../entities/user.entity';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { CreateUserDto } from '../../dto/create-user.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {
    //
  }

  async findOne(id: string): Promise<User> {
    return await this.prisma.user
      .findFirst({
        where: {
          id_user: id,
        },
        include: {
          User_Movie: {
            include: {
              movie: true,
            },
          },
        },
      })
      .then((data) => data);
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user
      .findMany({
        include: {
          User_Movie: {
            include: {
              movie: true,
            },
          },
        },
      })
      .then((data) => data);
  }

  async remove(id: string): Promise<User> {
    return await this.prisma.user
      .delete({ where: { id_user: id } })
      .then((data) => data);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return await this.prisma.user
      .update({
        where: { id_user: id },
        data: updateUserDto,
        include: {
          User_Movie: {
            include: {
              movie: true,
            },
          },
        },
      })
      .then((data) => data);
  }

  async create({ username, password }: CreateUserDto): Promise<User> {
    return await this.prisma.user
      .create({
        data: {
          id_user: randomUUID(),
          username,
          password,
        },
        include: {
          User_Movie: {
            include: {
              movie: true,
            },
          },
        },
      })
      .then((data) => data);
  }
}
