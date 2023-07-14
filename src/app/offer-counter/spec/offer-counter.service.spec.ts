import { Test, TestingModule } from '@nestjs/testing';
import { OfferCounterService } from '../offer-counter.service';

describe('OfferCounterService', () => {
  let service: OfferCounterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OfferCounterService],
    }).compile();

    service = module.get<OfferCounterService>(OfferCounterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
