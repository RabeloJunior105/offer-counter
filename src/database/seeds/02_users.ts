import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert([
        {
            id: 1,
            name: "José da Silva",
            createdAt: "2023-07-11 14:37:02"
        },
        {
            id: 2,
            name: "Francisco Geraldo",
            createdAt: "2023-07-11 14:37:02"
        },
        {
            id: 3,
            name: "Arnaldo Fernandes",
            createdAt: "2023-07-11 14:37:02"
        }
    ]);
};
