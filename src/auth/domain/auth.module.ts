import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { UsersModule } from 'src/users/domain/users.module'
import { UserRepository } from 'src/users/infrastructure/repository.service'
import { AuthController } from '../infrastructure/auth.controller'
import { AuthService } from '../application/auth.service'
import { JwtStrategy } from '../application/strategies/jwt.strategy'
import { JwtModule } from './jwt.module'

@Module({
    imports: [UsersModule, PassportModule, JwtModule],
    providers: [AuthService, JwtStrategy, UserRepository],
    exports: [AuthService],
    controllers: [AuthController],
})
export class AuthModule {}
