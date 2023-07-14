import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { WalletMovementEntity } from "../wallet-movement/wallet-movement.entity";
import { WalletEntity } from "../wallet/wallet.entity";
import { CurrencyEntity } from "../currency/currency.entity";
import { UsersEntity } from "../users/users.entity";

@Entity({ name: "offer-counter" })
export class OfferCounterEntity {
    @PrimaryGeneratedColumn('increment')
    id: string
    @Column()
    amount: number
    @ManyToOne(type => WalletEntity, wallet => wallet.walletMovement)
    @JoinColumn({ name: "wallet_id" })
    wallet: WalletEntity[]
    @ManyToOne(type => CurrencyEntity, currency => currency.offerCounter)
    @JoinColumn({ name: "currency_id" })
    currency: CurrencyEntity[]
    @ManyToOne(type => UsersEntity, users => users.offerCounter)
    @JoinColumn({ name: "user_id" })
    users: UsersEntity[]
    @CreateDateColumn()
    createdAt: Date
    @UpdateDateColumn()
    updatedAt: Date
    @Column({ type: "date", nullable: true })
    deletedAt?: Date
}