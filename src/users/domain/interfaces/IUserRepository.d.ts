import { IRepository } from 'src/shared/domain/IRepository'
import { UserModel } from '../user.model'
import { EmailVO } from '../vo/email.vo'

export interface IUserRepository extends IRepository<UserModel> {
    findOneByEmail(email: EmailVO): Promise<UserModel | null>
}
