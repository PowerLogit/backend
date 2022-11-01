import { Exclude, Expose, Transform } from 'class-transformer'
import { DateVO } from 'src/shared/domain/vo/date.vo'
import { UuidVO } from 'src/shared/domain/vo/uuid.vo'
import { IUserModel } from 'src/users/domain/interfaces/IUserModel'
import { EmailVO } from 'src/users/domain/vo/email.vo'
import { NameVO } from 'src/users/domain/vo/name.vo'
import { PasswordVO } from 'src/users/domain/vo/password.vo'
import { RolVO } from 'src/users/domain/vo/rol.vo'

export class UserProfile implements IUserModel {
    @Expose()
    @Transform(({ value }) => value.value)
    name!: NameVO

    @Expose()
    @Transform(({ value }) => value.value)
    email!: EmailVO

    @Exclude()
    password!: PasswordVO

    @Expose()
    @Transform(({ value }) => value.value)
    rol!: RolVO

    @Exclude()
    id!: UuidVO

    @Exclude()
    createdAt!: DateVO

    @Exclude()
    updatedAt!: DateVO

    constructor(partial: Partial<UserProfile>) {
        Object.assign(this, partial)
    }
}
