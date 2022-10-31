import {
    Controller,
    Get,
    Request,
    UseGuards,
    UseInterceptors,
    ClassSerializerInterceptor,
} from '@nestjs/common'
import { JwtAuthGuard } from 'src/auth/application/guards/jwt-auth.guard'
import { RequestAuth } from 'src/shared/domain/@types/RequestAuth'
import { UserUseCase } from '../application/useCase.service'
import { UserProfile } from './serializers'

@Controller('auth')
export class UsersController {
    constructor(private userUseCase: UserUseCase) {}

    @UseGuards(JwtAuthGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    @Get('profile')
    async getProfile(@Request() req: RequestAuth) {
        const user = await this.userUseCase.profile(req.user.id)

        return new UserProfile(user)
    }
}
