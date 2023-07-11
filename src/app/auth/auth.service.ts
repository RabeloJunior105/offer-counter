import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    validateApiKey(apikey: string): String {
        const keys: string[] = process.env.API_KEYS.split(", ")
        return keys.find(key => apikey == key)
    }
}
