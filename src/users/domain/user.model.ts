import { DateVO } from 'src/shared/domain/vo/date.vo'
import { UuidVO } from 'src/shared/domain/vo/uuid.vo'
import { EmailVO } from './vo/email.vo'
import { NameVO } from './vo/name.vo'
import { PasswordVO } from './vo/password.vo'

/**
 * Registered user in the application
 */
export class UserModel {
    /**
     * Constructor
     * @param id User unique identifier
     * @param name User name
     * @param email User email
     * @param password User hashed password
     */
    constructor(
        public readonly id: UuidVO,
        public email: EmailVO,
        public name: NameVO,
        public password: PasswordVO,
        public createdAt?: DateVO,
        public updatedAt?: DateVO,
    ) {}

    static create(
        id: UuidVO,
        email: EmailVO,
        name: NameVO,
        password: PasswordVO,
        createdAt?: DateVO,
        updatedAt?: DateVO,
    ): UserModel {
        return new UserModel(id, email, name, password, createdAt, updatedAt)
    }
}
