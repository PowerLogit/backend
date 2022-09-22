/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { User } from 'src/users/@types/user'
import { UsersRepository } from 'src/users/users.service'

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersRepository,
        private jwtService: JwtService,
    ) {}

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.usersService.findOneByEmail(email)
        if (!user) return

        const validPassword = user.password === pass
        if (!validPassword) return

        const { password, ...result } = user

        return result
    }

    async register(_user: User) {
        throw new Error('Method not implemented')
    }

    async login(user: User) {
        const payload = {
            id: user.id,
            name: user.name,
            rol: user.rol,
        }

        return {
            access_token: this.jwtService.sign(payload),
        }
    }
}
