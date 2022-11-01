import {
    Body,
    Controller,
    HttpCode,
    HttpStatus,
    Patch,
    Request,
    UseGuards,
} from '@nestjs/common'
import { JwtAuthGuard } from 'src/auth/application/guards/jwt-auth.guard'
import { RequestAuth } from 'src/shared/domain/@types/RequestAuth'
import { UpdateUserUseCase } from 'src/users/application/useCases/updateUser.service'
import { UpdateUserDto } from '../dtos/updateUser.dto'

@Controller('auth')
export class UpdateUserController {
    constructor(private updateUserUseCase: UpdateUserUseCase) {}

    @UseGuards(JwtAuthGuard)
    @HttpCode(HttpStatus.NO_CONTENT)
    @Patch()
    async getProfile(
        @Request() req: RequestAuth,
        @Body() updateUserDto: UpdateUserDto,
    ): Promise<void> {
        await this.updateUserUseCase.execute(req.user.id, updateUserDto)

        return
    }
}
