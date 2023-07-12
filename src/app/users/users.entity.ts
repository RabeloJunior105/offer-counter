import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { WalletEntity } from "../wallet/wallet.entity";

@Entity({ name: "users" })
export class UsersEntity {
    @PrimaryGeneratedColumn('increment')
    id: string
    @Column()
    name: string
    @OneToMany(type => WalletEntity, wallet => wallet.user)
    wallet: WalletEntity
    @CreateDateColumn()
    createdAt: string
    @UpdateDateColumn()
    updatedAt: string
}