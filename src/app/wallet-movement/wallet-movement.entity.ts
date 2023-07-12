import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { WalletEntity } from "../wallet/wallet.entity";
import { CurrencyEntity } from "../currency/currency.entity";

@Entity({ name: "wallet-movement" })
export class WalletMovementEntity {
    @PrimaryGeneratedColumn('increment')
    id: string
    @Column()
    debit: number
    @Column()
    credit: number
    @ManyToOne(type => CurrencyEntity, currency => currency.walletMovement)
    @JoinColumn({ name: "currency_id" })
    currency: WalletMovementEntity[]
    
    @ManyToOne(type => WalletEntity, wallet => wallet.walletMovement)
    @JoinColumn({ name: "wallet_id" })
    wallet: WalletEntity[]
    @CreateDateColumn()
    createdAt: string
    @UpdateDateColumn()
    updatedAt: string
}