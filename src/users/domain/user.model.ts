import { BaseModel } from 'src/shared/domain/BaseModel'
import { DateVO } from 'src/shared/domain/vo/date.vo'
import { UuidVO } from 'src/shared/domain/vo/uuid.vo'
import { IUserModel } from './interfaces/IUserModel'
import { EmailVO } from './vo/email.vo'
import { NameVO } from './vo/name.vo'
import { PasswordVO } from './vo/password.vo'
import { RolVO } from './vo/rol.vo'

/**
 * Registered user in the application
 */
export class UserModel extends BaseModel implements IUserModel {
    /**
     * Constructor
     * @param id User unique identifier
     * @param name User name
     * @param email User email
     * @param password User hashed password
     * @param rol User rol
     * @param createdAt User date created
     * @param updatedAt User date updated
     */
    constructor(
        id: UuidVO,
        public name: NameVO,
        public email: EmailVO,
        public password: PasswordVO,
        public rol: RolVO,
        createdAt: DateVO,
        updatedAt: DateVO,
    ) {
        super(id, createdAt, updatedAt)
    }

    static create(
        id: UuidVO,
        name: NameVO,
        email: EmailVO,
        password: PasswordVO,
        rol: RolVO,
        createdAt: DateVO,
        updatedAt: DateVO,
    ): UserModel {
        return new UserModel(
            id,
            name,
            email,
            password,
            rol,
            createdAt,
            updatedAt,
        )
    }
}
