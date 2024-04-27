import { Test, TestingModule } from '@nestjs/testing';
import { EnterpriseMovieController } from './enterprise-movie.controller';
import { EnterpriseMovieService } from './enterprise-movie.service';

describe('EnterpriseMovieController', () => {
  let controller: EnterpriseMovieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnterpriseMovieController],
      providers: [EnterpriseMovieService],
    }).compile();

    controller = module.get<EnterpriseMovieController>(EnterpriseMovieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
