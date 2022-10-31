import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { UsersModule } from 'src/users/domain/users.module'
import { UserRepository } from 'src/users/infrastructure/repository.service'
import { JwtStrategy } from '../application/strategies/jwt.strategy'
import { JwtModule } from './jwt.module'
import { LoginUseCase, RegisterUseCase } from '../application/usesCases/index'
import {
    LoginController,
    RegisterController,
} from '../infrastructure/controllers/index'

@Module({
    imports: [UsersModule, PassportModule, JwtModule],
    providers: [JwtStrategy, UserRepository, RegisterUseCase, LoginUseCase],
    controllers: [RegisterController, LoginController],
})
export class AuthModule {}
