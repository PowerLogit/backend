import { ForbiddenException, Injectable } from '@nestjs/common'
import { LoginUserDto } from 'src/auth/infrastructure/dtos'
import { UserModel } from 'src/users/domain/user.model'
import { EmailVO } from 'src/users/domain/vo/email.vo'
import { PasswordVO } from 'src/users/domain/vo/password.vo'
import { UserRepository } from 'src/users/infrastructure/repository.service'

@Injectable()
export class LoginUseCase {
    constructor(private userRepo: UserRepository) {}

    public async execute({
        email,
        password,
    }: LoginUserDto): Promise<UserModel> {
        const userEmail = EmailVO.create(email)
        const userPassword = PasswordVO.createPlain(password)

        const user = await this.userRepo.findOneByEmail(userEmail)
        if (!user) throw new ForbiddenException('Credentials incorrect')

        const isValidPassword = await user.password.isValid(userPassword)
        if (!isValidPassword)
            throw new ForbiddenException('Credentials incorrect')

        return user
    }
}
