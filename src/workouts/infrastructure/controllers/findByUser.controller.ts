import {
    ClassSerializerInterceptor,
    Controller,
    Get,
    Query,
    Req,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common'
import { JwtAuthGuard } from 'src/auth/application/guards/jwt-auth.guard'
import { RequestAuth } from 'src/shared/domain/@types/RequestAuth'
import { IPaginate } from 'src/shared/domain/Paginate.model'
import { UuidVO } from 'src/shared/domain/vo/uuid.vo'
import { PaginationDto } from 'src/shared/infra/dto/pagination.dto'
import { FindByUserWorkoutUseCase } from 'src/workouts/application/useCases/findByUser.service'
import { WorkoutModel } from 'src/workouts/domain/models/workout.model'
import { WorkoutSerializer } from '../serializers/workout.serializer'

@Controller('workout')
export class FindOneByUserController {
    constructor(private workoutUseCase: FindByUserWorkoutUseCase) {}

    @UseGuards(JwtAuthGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    @Get()
    async execute(
        @Req() req: RequestAuth,
        @Query() queryPagination: PaginationDto,
    ) {
        const userId = UuidVO.create(req.user.id)
        const filters = {
            filterBy: queryPagination._filter,
            sortBy: queryPagination._sort,
            page: queryPagination._page,
            limit: queryPagination._limit,
        }

        const workouts = (await this.workoutUseCase.execute(
            userId,
            filters,
        )) as IPaginate<WorkoutModel>

        console.log(workouts)

        return {
            count: workouts.count,
            data: workouts.data.map(
                (workout) => new WorkoutSerializer(workout),
            ),
        }
    }
}
