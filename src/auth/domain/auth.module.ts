import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { UsersModule } from 'src/users/domain/users.module'
import { UserRepository } from 'src/users/infrastructure/repository.service'
import { AuthController } from '../infrastructure/auth.controller'
import { AuthService } from '../application/auth.service'
import { jwtConstants } from './constants/constants'
import { JwtStrategy } from '../application/strategies/jwt.strategy'
import { LocalStrategy } from '../application/strategies/local.strategy'

@Module({
    imports: [
        UsersModule,
        PassportModule,
        JwtModule.registerAsync({
            useFactory: () => ({
                secret: jwtConstants.secret,
                signOptions: {
                    algorithm: 'HS512',
                    expiresIn: '7d',
                },
            }),
        }),
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy, UserRepository],
    exports: [AuthService],
    controllers: [AuthController],
})
export class AuthModule {}
