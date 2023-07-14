export interface ICreateWalletMovement {
    withdraw: number;
    deposit: number;
    currency_id: string;
    wallet_id: string;
    user_id: string;
}