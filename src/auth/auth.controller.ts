import { Controller, Post, Req, UseGuards, Body } from '@nestjs/common'
import { AuthService } from './auth.service'
import { LocalAuthGuard } from './guards/local-auth.guard'
import { jwtCustom } from './@types/jwt'
import { User } from 'src/users/@types/user'
import { Public } from 'src/auth/decorators/Public.decorator'

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Public()
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Req() req: any): Promise<jwtCustom> {
        return this.authService.login(req.user)
    }

    @Public()
    @UseGuards(LocalAuthGuard)
    @Post('register')
    async regsiter(@Body() body: User): Promise<void> {
        return this.authService.register(body)
    }
}
