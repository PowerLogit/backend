import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserEntity } from './user.entity'

@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(UserEntity)
        private repository: Repository<UserEntity>,
    ) {}

    async findOne(id: string): Promise<any> {
        console.log(id)

        const user = await this.repository.findOneBy({ id })
        console.log(user)

        return user
    }

    async findOneByEmail(email: string): Promise<any> {
        return this.repository.findOneBy({ email })
    }

    async create(user: any): Promise<void> {
        return this.repository.save(user)
    }

    async remove(id: string): Promise<void> {
        await this.repository.delete(id)
    }
}
