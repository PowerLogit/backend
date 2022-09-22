import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_GUARD } from '@nestjs/core'
import { AuthModule } from './auth/auth.module'
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard'
import { UsersModule } from './users/users.module'
import configEnv from './shared/infra/config/common.env'

@Module({
    providers: [
        {
            provide: APP_GUARD,
            useClass: JwtAuthGuard,
        },
    ],
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configEnv],
        }),
        AuthModule,
        UsersModule,
    ],
})
export class AppModule {}
