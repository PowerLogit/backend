import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common'
import { AuthService } from '../application/auth.service'
import { jwtCustom } from '../domain/@types/jwt'
import { Public } from 'src/auth/domain/decorators/Public.decorator'
import { LoginUserDto, RegisterUserDto } from './dtos'

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('login')
    async login(@Body() loginUserDto: LoginUserDto): Promise<jwtCustom> {
        return await this.authService.login(loginUserDto)
    }

    @Public()
    @Post('register')
    async regsiter(@Body() registerUserDto: RegisterUserDto): Promise<void> {
        return await this.authService.register(registerUserDto)
    }
}
