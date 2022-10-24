import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_GUARD } from '@nestjs/core'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthModule } from './auth/domain/auth.module'
import { JwtAuthGuard } from './auth/application/guards/jwt-auth.guard'
import configEnv from './shared/infra/config/common.env'
import { UsersModule } from './users/domain/users.module'

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
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'powerlogNestAdmin',
            password: 'powerlogNestAdmin',
            database: 'powerlogNest',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            migrations: ['dist/shared/infra/databases/migrations/.js'],
            synchronize: true,
            logging: false,
        }),
        AuthModule,
        UsersModule,
    ],
})
export class AppModule {}
