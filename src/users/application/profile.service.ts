import { Injectable, NotFoundException } from '@nestjs/common'
import { UuidVO } from 'src/shared/domain/vo/uuid.vo'
import { UserRepository } from '../infrastructure/repository.service'

@Injectable()
export class UserProfileUseCase {
    constructor(private repository: UserRepository) {}

    async profile(id: string) {
        const userId = UuidVO.create(id)

        const user = await this.repository.findOne(userId)
        if (!user) throw new NotFoundException()

        return user
    }
}
