import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiKeyAuthGuard } from './app/auth/auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @UseGuards(ApiKeyAuthGuard)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
