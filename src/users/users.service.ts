/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common'
import { IUserRepository } from './interfaces/IUserRepository'
import { User } from './@types/user'

@Injectable()
export class UsersRepository implements IUserRepository {
    private readonly users: User[] = [
        {
            id: 'asfasghah',
            name: 'john',
            email: 'john@gmail.com',
            password: 'changeme',
            rol: 'athlete',
        },
        {
            id: 'gsdfgsdhjwr',
            name: 'test',
            email: 'test@test.com',
            password: 'admin',
            rol: 'athlete',
        },
    ]

    async findOne(id: string): Promise<User | undefined> {
        return this.users.find((user) => user.id === id)
    }

    async findOneByEmail(email: string): Promise<User | undefined> {
        return this.users.find((user) => user.email === email)
    }

    async exist(id: string): Promise<boolean> {
        return !!this.users.find((user) => user.id === id)
    }

    async create(_item: User): Promise<boolean> {
        throw new Error('Method not implemented.')
    }

    async update(_item: User): Promise<boolean> {
        throw new Error('Method not implemented.')
    }

    async delete(_id: string): Promise<boolean> {
        throw new Error('Method not implemented.')
    }
}
