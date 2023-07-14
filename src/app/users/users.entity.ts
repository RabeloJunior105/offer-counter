import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { WalletEntity } from "../wallet/wallet.entity";
import { OfferCounterEntity } from "../offer-counter/offer-counter.entity";

@Entity({ name: "users" })
export class UsersEntity {
    @PrimaryGeneratedColumn('increment')
    id: string
    @Column()
    name: String
    @OneToMany(type => WalletEntity, wallet => wallet.user)
    wallet: WalletEntity
    @OneToMany(type => OfferCounterEntity, offerCounter => offerCounter.users)
    offerCounter: OfferCounterEntity
    @CreateDateColumn()
    createdAt: string
    @UpdateDateColumn()
    updatedAt: string
}