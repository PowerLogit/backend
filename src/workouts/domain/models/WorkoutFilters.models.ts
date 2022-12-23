import { IPaginate, PaginateModel } from 'src/shared/domain/Paginate.model'
import { FilterWorkoutByVO } from '../vo/filterWorkoutBy.vo'
import { SortWorkoutByVO } from '../vo/sortWorkoutBy.vo'
import { FilterWorkoutsByModel } from './FilterBy.model'
import { SortBy } from './SortBy.model'
import { WorkoutModel } from './workout.model'

export class WorkoutsFilters {
    public static create(
        workouts: WorkoutModel[],
        filters: IFilters,
    ): IPaginate<WorkoutModel> {
        const workoutFiltered = FilterWorkoutsByModel.execute(
            workouts,
            filters.filterBy,
        )
        const workoutSorted = SortBy.execute(workoutFiltered, filters.sortBy)

        return PaginateModel.create<WorkoutModel>(
            workoutSorted,
            filters.page,
            filters.limit,
        )
    }
}

export interface IFilters {
    filterBy: FilterWorkoutByVO
    sortBy: SortWorkoutByVO
    page: number
    limit: number
}
