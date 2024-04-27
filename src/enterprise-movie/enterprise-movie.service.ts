import { Injectable } from '@nestjs/common';
import { CreateEnterpriseMovieDto } from './dto/create-enterprise-movie.dto';
import { UpdateEnterpriseMovieDto } from './dto/update-enterprise-movie.dto';

@Injectable()
export class EnterpriseMovieService {
  create(createEnterpriseMovieDto: CreateEnterpriseMovieDto) {
    return 'This action adds a new enterpriseMovie';
  }

  findAll() {
    return `This action returns all enterpriseMovie`;
  }

  findOne(id: number) {
    return `This action returns a #${id} enterpriseMovie`;
  }

  update(id: number, updateEnterpriseMovieDto: UpdateEnterpriseMovieDto) {
    return `This action updates a #${id} enterpriseMovie`;
  }

  remove(id: number) {
    return `This action removes a #${id} enterpriseMovie`;
  }
}
