import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from '../infrastructure/user.entity'
import { UserRepository } from '../infrastructure/repository.service'
import { UserProfileController } from '../infrastructure/controllers/profile.comtroller'
import { UserProfileUseCase } from '../application/useCases/profile.service'
import { UpdateUserController } from '../infrastructure/controllers'
import { UpdateUserUseCase } from '../application/useCases/updateUser.service'

@Module({
    providers: [UserProfileUseCase, UpdateUserUseCase, UserRepository],
    imports: [TypeOrmModule.forFeature([UserEntity])],
    exports: [TypeOrmModule],
    controllers: [UserProfileController, UpdateUserController],
})
export class UsersModule {}
