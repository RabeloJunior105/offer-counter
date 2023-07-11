import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "users" })
export class UsersEntity {
    @PrimaryGeneratedColumn('increment')
    id: string
    @Column()
    name: string
    @CreateDateColumn()
    createdAt: string
    @UpdateDateColumn()
    updatedAt: string
}