import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { WalletMovementEntity } from "../wallet-movement/wallet-movement.entity";

@Entity({ name: "currency" })
export class CurrencyEntity {
    @PrimaryGeneratedColumn('increment')
    id: string
    @Column()
    name: string
    @CreateDateColumn()
    createdAt: string
    @UpdateDateColumn()
    updatedAt: string
    @OneToMany(type => WalletMovementEntity, wallet => wallet.currency)
    walletMovement: WalletMovementEntity;
}