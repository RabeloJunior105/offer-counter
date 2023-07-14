import { Test, TestingModule } from '@nestjs/testing';
import { OfferCounterController } from '../offer-counter.controller';

describe('OfferCounterController', () => {
  let controller: OfferCounterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OfferCounterController],
    }).compile();

    controller = module.get<OfferCounterController>(OfferCounterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
