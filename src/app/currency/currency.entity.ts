import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "currency" })
export class CurrencyEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column()
    name: string
    @CreateDateColumn()
    createdAt: string
    @UpdateDateColumn()
    updatedAt: string
}