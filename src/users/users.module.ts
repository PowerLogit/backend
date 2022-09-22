import { Module } from '@nestjs/common'
import { UsersRepository } from './users.service'
import { UsersController } from './users.controller'

@Module({
    providers: [UsersRepository],
    exports: [UsersRepository],
    controllers: [UsersController],
})
export class UsersModule {}
