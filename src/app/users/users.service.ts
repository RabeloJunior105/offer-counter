import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
    constructor(
        private readonly UsersRepository: UsersRepository
    ) { }

    async findId(id: string) {
        return await this.UsersRepository.findId(id)
    }
}

