import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { IFilters } from 'src/workouts/domain/models/WorkoutFilters.models'

export const Pagination = createParamDecorator(
    (_data: unknown, ctx: ExecutionContext): IFilters => {
        const { query } = ctx.switchToHttp().getRequest()

        return {
            filterBy: query?._filter,
            sortBy: query?._sort,
            page: query?._page,
            limit: query?._limit,
        }
    },
)
