import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    validateApiKey(apikey: string): Boolean {
        const keys: string[] = JSON.parse(`${process.env.API_KEYS}`)
        return keys.includes(apikey)
    }
}
