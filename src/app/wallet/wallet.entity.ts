import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UsersEntity } from "../users/users.entity";

@Entity({ name: "wallet" })
export class WalletEntity {
    @PrimaryGeneratedColumn('increment')
    id: string
    @Column()
    name: string
    @ManyToOne(type => UsersEntity, user => user.wallet)
    @JoinColumn({ name: "user_id" })
    user: UsersEntity[]
    @CreateDateColumn()
    createdAt: string
    @UpdateDateColumn()
    updatedAt: string
}