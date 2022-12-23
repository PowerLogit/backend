import { Controller, Post, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from 'src/auth/application/guards/jwt-auth.guard'

@Controller('workout')
export class SaveController {
    @UseGuards(JwtAuthGuard)
    @Post()
    async execute() {
        return
    }
}
