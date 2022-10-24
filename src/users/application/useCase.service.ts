/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common'
import { UserRepository } from '../infrastructure/repository.service'

@Injectable()
export class UserUseCase {
    constructor(private userRepo: UserRepository) {}

    async profile(id: string) {
        const user = await this.userRepo.findOne(id)
        console.log(user)
        if (!user) throw new Error()

        return user
    }
}
