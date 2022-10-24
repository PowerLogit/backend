import { Controller, Post, Req, Body, UseGuards } from '@nestjs/common'
import { AuthService } from '../application/auth.service'
import { LocalAuthGuard } from '../application/guards/local-auth.guard'
import { jwtCustom } from '../domain/@types/jwt'
import { Public } from 'src/auth/domain/decorators/Public.decorator'
import { User } from 'src/users/domain/@types/user'

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Public()
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Req() req: any): Promise<jwtCustom> {
        return await this.authService.login(req.user)
    }

    @Public()
    @Post('register')
    async regsiter(@Body() body: User): Promise<void> {
        return await this.authService.register(body)
    }
}
