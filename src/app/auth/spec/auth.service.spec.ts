import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../auth.service';

describe('AuthService', () => {
  let service: AuthService;
  const mockTest = {
    successfuly: "0f3a0ad6-201b-11ee-be56-0242ac120002",
    error: "0f3a0ad6-201b-11ee"
  }
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();
    process.env = {
      API_KEYS: '[\"0f3a0ad6-201b-11ee-be56-0242ac120002\",\"1426e226-201b-11ee-be56-0242ac120002\"]'
    };
    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe("validate", () => {
    it("should be able to return true", async () => {
      expect(service.validateApiKey(mockTest.successfuly)).toEqual(true)
    })
    it("should be able to return false", async () => {
      expect(service.validateApiKey(mockTest.error)).toEqual(false)
    })
  })
});
