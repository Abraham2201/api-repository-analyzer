import { Test, TestingModule } from '@nestjs/testing';
import { GitDataService } from './git-data.service';

describe('GitDataService', () => {
  let service: GitDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GitDataService],
    }).compile();

    service = module.get<GitDataService>(GitDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
