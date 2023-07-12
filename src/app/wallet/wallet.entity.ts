import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UsersEntity } from "../users/users.entity";
import { WalletMovementEntity } from "../wallet-movement/wallet-movement.entity";

@Entity({ name: "wallet" })
export class WalletEntity {
    @PrimaryGeneratedColumn('increment')
    id: string
    @Column()
    name: string
    @ManyToOne(type => UsersEntity, user => user.wallet)
    @JoinColumn({ name: "user_id" })
    user: UsersEntity[]
    @OneToMany(type => WalletMovementEntity, wallet => wallet.wallet)
    walletMovement: WalletMovementEntity;
    @CreateDateColumn()
    createdAt: string
    @UpdateDateColumn()
    updatedAt: string
}