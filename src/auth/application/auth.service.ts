/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Injectable,
    ConflictException,
    ForbiddenException,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { User } from 'src/users/domain/@types/user'
import { UserRepository } from 'src/users/infrastructure/repository.service'
import { BearerPayload } from '../domain/@types/BearerPayload'
import { jwtCustom } from '../domain/@types/jwt'
import { LoginUserDto, RegisterUserDto } from '../infrastructure/dtos'

@Injectable()
export class AuthService {
    constructor(
        private userRepo: UserRepository,
        private jwtService: JwtService,
    ) {}

    public async login({ email, password }: LoginUserDto): Promise<jwtCustom> {
        const user = await this.userRepo.findOneByEmail(email)
        if (!user) throw new ForbiddenException('Credentials incorrect')

        const validPassword = user.password === password
        if (!validPassword)
            throw new ForbiddenException('Credentials incorrect')

        return await this.signToken(user)
    }

    public async register(user: RegisterUserDto): Promise<void> {
        const existUserById = await this.userRepo.findOne(user.id)
        if (existUserById)
            throw new ConflictException('The id is already in use')

        const existUserByEmail = await this.userRepo.findOneByEmail(user.email)
        if (existUserByEmail)
            throw new ConflictException('The email is already in use')

        await this.userRepo.create(user)
    }

    private async signToken(user: User): Promise<jwtCustom> {
        const payload: BearerPayload = {
            id: user.id,
            name: user.name,
            rol: user.rol,
        }

        const access_token = await this.jwtService.signAsync(payload)

        return { access_token }
    }
}
