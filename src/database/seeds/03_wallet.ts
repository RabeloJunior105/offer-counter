import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("wallet").del();

    // Inserts seed entries
    await knex("wallet").insert([
        {
            id: 1,
            name: "Carteira 01",
            user_id: 1,
            createdAt: "2023-07-11 14:37:02"
        },
        {
            id: 2,
            name: "Carteira 02",
            user_id: 1,
            createdAt: "2023-07-11 14:37:02"
        },
        {
            id: 3,
            name: "Carteira 01",
            user_id: 2,
            createdAt: "2023-07-11 14:37:02"
        },
        {
            id: 4,
            name: "Carteira 02",
            user_id: 2,
            createdAt: "2023-07-11 14:37:02"
        }
    ]);
};
