import { IRepository } from 'src/shared/domain/IRepository'
import { User } from '../@types/user'

export interface IUserRepository extends IRepository<User> {
    findOneByEmail(email: string): Promise<User | undefined>
}
