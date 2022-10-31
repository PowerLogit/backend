import { Injectable } from '@nestjs/common'
import { UuidVO } from 'src/shared/domain/vo/uuid.vo'
import { UserRepository } from '../infrastructure/repository.service'

@Injectable()
export class UserUseCase {
    constructor(private userRepo: UserRepository) {}

    async profile(id: string) {
        const userId = UuidVO.create(id)

        const user = await this.userRepo.findOne(userId)
        if (!user) throw new Error()

        return user
    }
}
