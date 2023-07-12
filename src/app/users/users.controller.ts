import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiKeyAuthGuard } from '../auth/auth.guard';

@Controller('users')
export class UsersController {
    constructor(
        private readonly UsersService: UsersService
    ) { }

    @UseGuards(ApiKeyAuthGuard)
    @Get('/:id')
    async findId(@Param() { id }) {
        return await this.UsersService.findId(id)
    }
}

