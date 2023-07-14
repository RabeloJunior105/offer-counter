import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("wallet-movement").del();

    // Inserts seed entries
    await knex("wallet-movement").insert([
        {
            id: 1,
            withdraw: 0.00,
            deposit: 50000.00,
            currency_id: 1,
            wallet_id: 1,
            createdAt: "2023-07-11 14:37:02"
        },
        {
            id: 1,
            withdraw: 0.00,
            deposit: 50000.00,
            currency_id: 1,
            wallet_id: 2,
            createdAt: "2023-07-11 14:37:02"
        },
        {
            id: 4,
            withdraw: 0.00,
            deposit: 50000.00,
            currency_id: 2,
            wallet_id: 3,
            createdAt: "2023-07-11 14:37:02"
        },
        {
            id: 4,
            withdraw: 0.00,
            deposit: 50000.00,
            currency_id: 2,
            wallet_id: 4,
            createdAt: "2023-07-11 14:37:02"
        },
    ]);
};
