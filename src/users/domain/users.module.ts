import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from '../infrastructure/user.entity'
import { UserRepository } from '../infrastructure/repository.service'
import { UserProfileController } from '../infrastructure/controllers/profile.comtroller'
import { UserProfileUseCase } from '../application/profile.service'

@Module({
    providers: [UserProfileUseCase, UserRepository],
    imports: [TypeOrmModule.forFeature([UserEntity])],
    exports: [TypeOrmModule],
    controllers: [UserProfileController],
})
export class UsersModule {}
