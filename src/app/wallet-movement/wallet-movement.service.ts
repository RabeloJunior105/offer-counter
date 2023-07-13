import { Injectable } from '@nestjs/common';
import { WalletMovementRepository } from './wallet-movement.repository';
import { IBalance } from './dto/Ibalance.dto';
import { IBalanceWithMovement } from './dto/IbalanceWithMovement.dto';

@Injectable()
export class WalletMovementService {
    constructor(
        private readonly WalletMovementRepository: WalletMovementRepository
    ) { }

    async findWalletBalance(wallet_id: string, curency_id: string): Promise<any> {
        const movement = await this.WalletMovementRepository.findWalletMovement(wallet_id, curency_id)
        const balance = []
        var total = 0

        for (const mov of movement) {
            const balanceIndexOf = balance.findIndex(obj => obj?.currency?.id == mov.currency["id"])

            if (balanceIndexOf >= 0) {
                balance[balanceIndexOf].total = balance[balanceIndexOf].total + (mov.deposit - mov.withdraw)
            }

            if (balanceIndexOf < 0) {
                console.log(mov.currency)
                balance.push({
                    currency: {
                        id: mov.currency["id"],
                        name: mov.currency["name"],
                        createdAt: mov.currency["createdAt"],
                        updatedAt: mov.currency["updatedAt"]
                    },
                    wallet: {
                        id: mov.wallet["id"],
                        name: mov.wallet["name"],
                        createdAt: mov.wallet["createdAt"],
                        updatedAt: mov.wallet["updatedAt"]
                    },
                    total: mov.deposit - mov.withdraw
                })
            }

        }

        return balance
    }

    async findTotal(wallet_id: string, curency_id: string): Promise<IBalance> {
        const movement = await this.WalletMovementRepository.findWalletMovement(wallet_id, curency_id)
        var total = 0

        for (const mov of movement) {
            total = total + (mov.deposit - mov.withdraw)
        }
        return { total }
    }
}
