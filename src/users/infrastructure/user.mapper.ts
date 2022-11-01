import { DateVO } from 'src/shared/domain/vo/date.vo'
import { UuidVO } from 'src/shared/domain/vo/uuid.vo'
import { IUser } from '../domain/@types/IUser'
import { UserModel } from '../domain/user.model'
import { EmailVO } from '../domain/vo/email.vo'
import { NameVO } from '../domain/vo/name.vo'
import { PasswordVO } from '../domain/vo/password.vo'
import { RolVO } from '../domain/vo/rol.vo'
import { UserEntity } from './user.entity'

export class UserMapper {
    /**
     * Transforms a database user into a domain user
     * @param persistanceUser Database user
     * @returns Domain user
     */
    public static toDomain(persistanceUser: UserEntity): UserModel {
        const { id, name, email, password, rol, createdAt, updatedAt } =
            persistanceUser

        return UserModel.create(
            UuidVO.create(id),
            NameVO.create(name),
            EmailVO.create(email),
            PasswordVO.create(password),
            RolVO.create(rol),
            DateVO.create(createdAt),
            DateVO.create(updatedAt),
        )
    }

    /**
     * Transforms a domain user into a database user
     * @param domainUser Domain user
     * @returns Database user
     */
    public static toPersistance(domainUser: UserModel): UserEntity {
        const { id, name, email, password, rol, createdAt, updatedAt } =
            domainUser

        return {
            id: id.value,
            name: name.value,
            email: email.value,
            password: password.value,
            rol: rol.value,
            createdAt: createdAt.value,
            updatedAt: updatedAt.value,
        }
    }

    public static toDto(domainUser: UserModel): IUser {
        const { id, name, email, password, rol, createdAt, updatedAt } =
            domainUser

        return {
            id: id.value,
            name: name.value,
            email: email.value,
            rol: rol.value,
            password: password.value,
            createdAt: createdAt?.value,
            updatedAt: updatedAt?.value,
        }
    }
}
