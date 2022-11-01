import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UuidVO } from 'src/shared/domain/vo/uuid.vo'
import { Repository } from 'typeorm'
import { IUserRepository } from '../domain/interfaces/IUserRepository'
import { UserModel } from '../domain/user.model'
import { EmailVO } from '../domain/vo/email.vo'
import { UserEntity } from './user.entity'
import { UserMapper } from './user.mapper'

@Injectable()
export class UserRepository implements IUserRepository {
    constructor(
        @InjectRepository(UserEntity)
        private repository: Repository<UserEntity>,
    ) {}

    async exist(id: UuidVO): Promise<boolean> {
        const user = await this.repository.findOneBy({ id: id.value })

        return !!user
    }

    async findOne(id: UuidVO): Promise<UserModel | null> {
        const user = await this.repository.findOneBy({ id: id.value })
        if (!user) return null

        return UserMapper.toDomain(user)
    }

    async findOneByEmail(email: EmailVO): Promise<UserModel | null> {
        const user = await this.repository.findOneBy({ email: email.value })
        if (!user) return null

        return UserMapper.toDomain(user)
    }

    async create(domainUser: UserModel): Promise<boolean> {
        const persistanceUser = UserMapper.toPersistance(domainUser)
        const user = await this.repository.save(persistanceUser)

        return !!user
    }

    async update(domainUser: UserModel): Promise<boolean> {
        const persistanceUser = UserMapper.toPersistance(domainUser)

        const user = await this.repository.save(persistanceUser)

        return !!user
    }

    async delete(id: UuidVO): Promise<boolean> {
        const user = await this.repository.delete({ id: id.value })

        return !!user
    }
}
