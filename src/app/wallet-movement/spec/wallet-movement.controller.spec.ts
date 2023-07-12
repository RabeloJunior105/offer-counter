import { Test, TestingModule } from '@nestjs/testing';
import { WalletMovementController } from '../wallet-movement.controller';

describe('WalletMovementController', () => {
  let controller: WalletMovementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WalletMovementController],
    }).compile();

    controller = module.get<WalletMovementController>(WalletMovementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
