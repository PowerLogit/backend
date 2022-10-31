import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { LoginUseCase } from 'src/auth/application/usesCases'
import { AccessToken } from 'src/auth/domain/@types/jwt'
import { Public } from 'src/auth/domain/decorators/Public.decorator'
import { LoginUserDto } from '../dtos'

@Controller('auth')
export class LoginController {
    constructor(private loginUseCase: LoginUseCase) {}

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('login')
    async login(@Body() loginUserDto: LoginUserDto): Promise<AccessToken> {
        return await this.loginUseCase.execute(loginUserDto)
    }
}
