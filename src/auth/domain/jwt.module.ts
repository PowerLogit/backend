import { Module } from '@nestjs/common'
import { JwtModule as JwtModuleImport } from '@nestjs/jwt'

@Module({
    imports: [
        JwtModuleImport.registerAsync({
            useFactory: () => ({
                secret: 'secretKey',
                signOptions: {
                    algorithm: 'HS512',
                    expiresIn: '7d',
                },
            }),
        }),
    ],
    exports: [JwtModuleImport],
})
export class JwtModule {}
