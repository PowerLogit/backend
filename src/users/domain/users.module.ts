import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from '../infrastructure/user.entity'
import { UserRepository } from '../infrastructure/repository.service'
import { UsersController } from '../infrastructure/users.controller'
import { UserUseCase } from '../application/useCase.service'

@Module({
    providers: [UserUseCase, UserRepository],
    imports: [TypeOrmModule.forFeature([UserEntity])],
    exports: [TypeOrmModule],
    controllers: [UsersController],
})
export class UsersModule {}
