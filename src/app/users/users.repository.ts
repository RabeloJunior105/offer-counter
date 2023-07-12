import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from './users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersRepository {
    constructor(
        @InjectRepository(UsersEntity)
        private readonly Users: Repository<UsersEntity>
    ) { }

    async findId(id: string) {

        try {
            const findId = await this.Users.findOneOrFail({
                where: {
                    id
                }
            })
            return findId
        } catch (error) {
            throw new NotFoundException(error.message)
        }
    }
}
