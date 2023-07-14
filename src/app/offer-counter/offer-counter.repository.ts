import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPagination } from 'src/shared/Pagination/IPagination.interface';
import { OfferCounterEntity } from './offer-counter.entity';
import { Between, FindOptionsWhere, Repository } from 'typeorm';
import { endOfDay, startOfDay } from 'date-fns';
import { IDeleteDTO } from './dto/delete/delete.interface';

@Injectable()
export class OfferCounterRepository {
    constructor(
        @InjectRepository(OfferCounterEntity)
        private readonly OfferCounter: Repository<OfferCounterEntity>
    ) { }

    async findAll({ take, page }: IPagination) {
        const skip = (page - 1) * take;
        const dateNow = new Date(Date.now())


        return await this.OfferCounter.findAndCount({
            where: {
                deletedAt: null,
                createdAt: Between(startOfDay(dateNow), endOfDay(dateNow)),
            },
            order: { createdAt: "DESC" },
            take: take,
            skip: skip
        })
    }

    async findById(id: string) {
        return await this.OfferCounter.findOneOrFail({
            where: {
                id
            }
        })
    }

    async findByIdAndUser(id: string, user_id: string) {
        return await this.OfferCounter.findOneOrFail({
            where: {
                id,
                users: {
                    id: user_id
                }
            }
        })
    }

    async findBy(Parameters: FindOptionsWhere<OfferCounterEntity>) {
        return await this.OfferCounter.findBy(Parameters)
    }

    async findBetween(user_id: string, date: Date) {

        return await this.OfferCounter.findBy({
            users: {
                id: user_id
            },
            createdAt: Between(startOfDay(date), endOfDay(date)),
            deletedAt: null
        })

    }


    async create(offerCounter: any) {
        return await this.OfferCounter.save(offerCounter)
    }

    async delete(offerCounter: OfferCounterEntity) {
        return await this.OfferCounter.save(offerCounter)
    }
}


