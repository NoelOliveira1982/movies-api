import { Test, TestingModule } from '@nestjs/testing';
import { EnterpriseMovieService } from './enterprise-movie.service';

describe('EnterpriseMovieService', () => {
  let service: EnterpriseMovieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnterpriseMovieService],
    }).compile();

    service = module.get<EnterpriseMovieService>(EnterpriseMovieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
