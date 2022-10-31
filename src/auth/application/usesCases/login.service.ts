import { ForbiddenException, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { BearerPayload } from 'src/auth/domain/@types/BearerPayload'
import { AccessToken } from 'src/auth/domain/@types/jwt'
import { LoginUserDto } from 'src/auth/infrastructure/dtos'
import { UserRol } from 'src/users/domain/@types/user'
import { UserModel } from 'src/users/domain/user.model'
import { EmailVO } from 'src/users/domain/vo/email.vo'
import { PasswordVO } from 'src/users/domain/vo/password.vo'
import { UserRepository } from 'src/users/infrastructure/repository.service'

@Injectable()
export class LoginUseCase {
    constructor(
        private userRepo: UserRepository,
        private jwtService: JwtService,
    ) {}

    public async execute({
        email,
        password,
    }: LoginUserDto): Promise<AccessToken> {
        const userEmail = EmailVO.create(email)
        const userPassword = PasswordVO.createPlain(password)

        const user = await this.userRepo.findOneByEmail(userEmail)
        if (!user) throw new ForbiddenException('Credentials incorrect')

        const isValidPassword = await user.password.isValid(userPassword)
        if (!isValidPassword)
            throw new ForbiddenException('Credentials incorrect')

        return await this.signToken(user)
    }

    private async signToken(user: UserModel): Promise<AccessToken> {
        const payload: BearerPayload = {
            id: user.id.value,
            name: user.name.value,
            rol: user.rol.value as UserRol,
        }

        const access_token = await this.jwtService.signAsync(payload)

        return { access_token }
    }
}
