import { IBaseModel } from 'src/shared/domain/@types/IBaseModel'
import { EmailVO } from '../vo/email.vo'
import { NameVO } from '../vo/name.vo'
import { PasswordVO } from '../vo/password.vo'
import { RolVO } from '../vo/rol.vo'

export interface IUserModel extends IBaseModel {
    name: NameVO
    email: EmailVO
    password: PasswordVO
    rol: RolVO
}
