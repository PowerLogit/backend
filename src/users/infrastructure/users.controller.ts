import { Controller, Get, Request, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from 'src/auth/application/guards/jwt-auth.guard'
import { RequestAuth } from 'src/shared/domain/@types/RequestAuth'
import { UserUseCase } from '../application/useCase.service'
// import { User } from '../domain/@types/user'

@Controller('auth')
export class UsersController {
    constructor(private userUseCase: UserUseCase) {}

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    async getProfile(@Request() req: RequestAuth) {
        return await this.userUseCase.profile(req.user.id)
    }
}
