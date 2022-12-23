import { Transform } from 'class-transformer'
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator'
import { FilterWorkoutByVO } from 'src/workouts/domain/vo/filterWorkoutBy.vo'
import { SortWorkoutByVO } from 'src/workouts/domain/vo/sortWorkoutBy.vo'

export class PaginationDto {
    @IsOptional()
    @IsNotEmpty()
    @Transform(({ value }) => FilterWorkoutByVO.create(Number(value)))
    readonly _filter: FilterWorkoutByVO = FilterWorkoutByVO.create(3)

    @IsOptional()
    @IsNotEmpty()
    @Transform(({ value }) => SortWorkoutByVO.create(Number(value)))
    readonly _sort: SortWorkoutByVO = SortWorkoutByVO.create(0)

    @IsOptional()
    @IsNotEmpty()
    @Transform(({ value }) => Number(value))
    readonly _page: number = 1

    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    @Transform(({ value }) => Number(value))
    readonly _limit: number = 99
}
