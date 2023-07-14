import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { WalletMovementEntity } from "../wallet-movement/wallet-movement.entity";
import { OfferCounterEntity } from "../offer-counter/offer-counter.entity";

@Entity({ name: "currency" })
export class CurrencyEntity {
    @PrimaryGeneratedColumn('increment')
    id: string
    @Column()
    name: string
    @OneToMany(type => WalletMovementEntity, wallet => wallet.currency)
    walletMovement: WalletMovementEntity;
    @OneToMany(type => OfferCounterEntity, offerCounter => offerCounter.currency)
    offerCounter: OfferCounterEntity;
    @CreateDateColumn()
    createdAt: string
    @UpdateDateColumn()
    updatedAt: string
}