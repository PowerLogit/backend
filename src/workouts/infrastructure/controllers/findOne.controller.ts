import {
    Controller,
    Get,
    Param,
    Request,
    UseGuards,
    UseInterceptors,
    ClassSerializerInterceptor,
} from '@nestjs/common'
import { JwtAuthGuard } from 'src/auth/application/guards/jwt-auth.guard'
import { RequestAuth } from 'src/shared/domain/@types/RequestAuth'
import { FindOneWorkoutUseCase } from 'src/workouts/application/useCases/findOne.service'
import { WorkoutSerializer } from '../serializers/workout.serializer'

@Controller('workout')
export class FindOneController {
    constructor(private workoutUseCase: FindOneWorkoutUseCase) {}

    @UseGuards(JwtAuthGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    @Get(':id')
    async execute(@Param('id') id: string, @Request() req: RequestAuth) {
        const workout = await this.workoutUseCase.execute(id, req.user.id)

        return new WorkoutSerializer(workout)
    }
}
