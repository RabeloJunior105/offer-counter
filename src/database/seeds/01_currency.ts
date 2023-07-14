import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("currency").del();

    // Inserts seed entries
    await knex("currency").insert([
        {
            id: 1,
            name: "Bitcoin",
            createdAt: "2023-07-11 14:37:02"
        },
        {
            id: 2,
            name: "Ethereum",
            createdAt: "2023-07-11 14:37:02"
        },
        {
            id: 3,
            name: "Tether",
            createdAt: "2023-07-11 14:37:02"
        },
        {
            id: 4,
            name: "BNB",
            createdAt: "2023-07-11 14:37:02"
        },
        {
            id: 5,
            name: "Dogecoin",
            createdAt: "2023-07-11 14:37:02"
        },
        {
            id: 6,
            name: "Cardano",
            createdAt: "2023-07-11 14:37:02"
        }
    ]);
};
