import { ConflictException, Injectable } from '@nestjs/common'
import { RegisterUserDto } from 'src/auth/infrastructure/dtos'
import { DateVO } from 'src/shared/domain/vo/date.vo'
import { UuidVO } from 'src/shared/domain/vo/uuid.vo'
import { UserModel } from 'src/users/domain/user.model'
import { EmailVO } from 'src/users/domain/vo/email.vo'
import { NameVO } from 'src/users/domain/vo/name.vo'
import { PasswordVO } from 'src/users/domain/vo/password.vo'
import { RolVO } from 'src/users/domain/vo/rol.vo'
import { UserRepository } from 'src/users/infrastructure/repository.service'

@Injectable()
export class RegisterUseCase {
    constructor(private userRepo: UserRepository) {}

    public async execute(user: RegisterUserDto): Promise<void> {
        const userId = UuidVO.create(user.id)
        const userEmail = EmailVO.create(user.email)

        const existUserById = await this.userRepo.findOne(userId)
        if (existUserById)
            throw new ConflictException('The id is already in use')

        const existUserByEmail = await this.userRepo.findOneByEmail(userEmail)
        if (existUserByEmail)
            throw new ConflictException('The email is already in use')

        const newUser = UserModel.create(
            userId,
            NameVO.create(user.name),
            userEmail,
            await PasswordVO.hashCreate(user.password),
            RolVO.create(user.rol),
            DateVO.create(),
            DateVO.create(),
        )

        await this.userRepo.create(newUser)
    }
}
