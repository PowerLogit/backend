import { Body, Controller, Post } from '@nestjs/common'
import { Public } from 'src/auth/domain/decorators/Public.decorator'
import { RegisterUserDto } from '../dtos'
import { RegisterUseCase } from '../../application/usesCases/index'

@Controller('auth')
export class RegisterController {
    constructor(private resgisterUseCase: RegisterUseCase) {}

    @Public()
    @Post('register')
    async regsiter(@Body() registerUserDto: RegisterUserDto): Promise<void> {
        return await this.resgisterUseCase.execute(registerUserDto)
    }
}
