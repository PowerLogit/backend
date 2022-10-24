import { ValidationPipe, VersioningType } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        logger: ['error', 'warn'],
    })

    app.enableCors()
    app.setGlobalPrefix('api')
    app.enableVersioning({
        type: VersioningType.URI,
        defaultVersion: '1',
    })
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            transform: true,
        }),
    )

    const config = new DocumentBuilder()
        .setTitle('PowerLog')
        .setDescription('The PowerLog API description')
        .setVersion('1.0')
        .build()
    const document = SwaggerModule.createDocument(app, config)

    SwaggerModule.setup('api', app, document)

    await app.listen(3000)

    console.log(`Server is running on: ${await app.getUrl()}`)
}
bootstrap()
