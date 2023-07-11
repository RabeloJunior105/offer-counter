import { Test, TestingModule } from '@nestjs/testing';
import { ApiKeyAuthGuard } from '../auth.guard';

describe('ApiKeyAuthGuardService', () => {
  let service: ApiKeyAuthGuard;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiKeyAuthGuard],
    }).compile();

    service = module.get<ApiKeyAuthGuard>(ApiKeyAuthGuard);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
