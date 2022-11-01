import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { LoginUseCase } from 'src/auth/application/usesCases'
import { BearerPayloadVO } from 'src/auth/domain/@types/BearerPayload'
import { AccessToken } from 'src/auth/domain/@types/jwt'
import { Public } from 'src/auth/domain/decorators/Public.decorator'
import { UserModel } from 'src/users/domain/user.model'
import { LoginUserDto } from '../dtos'

@Controller('auth')
export class LoginController {
    constructor(
        private loginUseCase: LoginUseCase,
        private jwtService: JwtService,
    ) {}

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('login')
    async login(@Body() loginUserDto: LoginUserDto): Promise<AccessToken> {
        const user = await this.loginUseCase.execute(loginUserDto)

        return await this.signToken(user)
    }

    private async signToken(user: UserModel): Promise<AccessToken> {
        const payload: BearerPayloadVO = {
            id: user.id,
            name: user.name,
            rol: user.rol,
        }

        const access_token = await this.jwtService.signAsync({
            id: payload.id.value,
            name: payload.name.value,
            rol: payload.rol.value,
        })

        return { access_token }
    }
}
