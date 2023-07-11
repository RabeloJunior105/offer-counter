import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiKeyStrategy } from './strategy/apiKey.strategy';
import { ApiKeyAuthGuard } from './auth.guard';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PassportModule],
  providers: [AuthService, ApiKeyStrategy, ApiKeyAuthGuard],
  exports: [AuthService]
})
export class AuthModule { }
