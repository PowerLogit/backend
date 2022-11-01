import {
    Injectable,
    NotFoundException,
    BadRequestException,
} from '@nestjs/common'
import { DateVO } from 'src/shared/domain/vo/date.vo'
import { UuidVO } from 'src/shared/domain/vo/uuid.vo'
import { UserModel } from 'src/users/domain/user.model'
import { EmailVO } from 'src/users/domain/vo/email.vo'
import { NameVO } from 'src/users/domain/vo/name.vo'
import { PasswordVO } from 'src/users/domain/vo/password.vo'
import { RolVO } from 'src/users/domain/vo/rol.vo'
import { UpdateUserDto } from 'src/users/infrastructure/dtos'
import { UserRepository } from '../../infrastructure/repository.service'

@Injectable()
export class UpdateUserUseCase {
    constructor(private repository: UserRepository) {}

    async execute(id: string, updateUserDto: UpdateUserDto): Promise<void> {
        const userId = UuidVO.create(id)

        if (!updateUserDto) throw new BadRequestException()

        const user = await this.repository.findOne(userId)
        if (!user) throw new NotFoundException()

        const newUser = await this.createUser(user, updateUserDto)

        await this.repository.update(newUser)

        return
    }

    private async createUser(
        user: UserModel,
        updateUserDto: UpdateUserDto,
    ): Promise<UserModel> {
        const userName = updateUserDto.name
            ? NameVO.create(updateUserDto.name)
            : user.name

        const userEmail = updateUserDto.email
            ? EmailVO.create(updateUserDto.email)
            : user.email

        const userPassword = updateUserDto.password
            ? await PasswordVO.hashCreate(updateUserDto.password)
            : user.password

        const userRol = updateUserDto.rol
            ? RolVO.create(updateUserDto.rol)
            : user.rol

        return UserModel.create(
            user.id,
            userName,
            userEmail,
            userPassword,
            userRol,
            user.createdAt,
            DateVO.create(),
        )
    }
}
