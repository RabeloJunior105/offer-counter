import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("currency").del();

    // Inserts seed entries
    await knex("currency").insert([
        {
            id: "18f769a8-4b17-4047-9e1e-f7ca96851999",
            name: "Bitcoin",
            createdAt: "2023-07-11 14:37:02"
        },
        {
            id: "4eda908b-234e-40ea-9a63-eb5365b98a63",
            name: "Ethereum",
            createdAt: "2023-07-11 14:37:02"
        },
        {
            id: "39fb1abd-6e84-43de-ba7d-1cff5fbdc5fa",
            name: "Tether",
            createdAt: "2023-07-11 14:37:02"
        },
        {
            id: "ec76c6bc-b43d-482a-8acf-e0c370cc50d4",
            name: "BNB",
            createdAt: "2023-07-11 14:37:02"
        },
        {
            id: "93bbe909-60a1-495b-ae4a-4365aec0fb04",
            name: "Dogecoin",
            createdAt: "2023-07-11 14:37:02"
        },
        {
            id: "2606e568-28c5-42cf-a0d8-677beed65fb9",
            name: "Cardano",
            createdAt: "2023-07-11 14:37:02"
        }
    ]);
};
