import { SortWorkoutByVO } from '../vo/sortWorkoutBy.vo'
import { WorkoutModel } from './workout.model'

export class SortBy {
    public static execute(
        workouts: WorkoutModel[],
        sortBy: SortWorkoutByVO,
    ): WorkoutModel[] {
        const workoutsSorted = this.sortDefault(workouts)

        switch (sortBy.value) {
            case SORT_BY.DEFAULT:
                return workoutsSorted

            case SORT_BY.DATE_DESC:
                return workoutsSorted.sort(
                    (a: WorkoutModel, b: WorkoutModel): number =>
                        b.date.value.getTime() - a.date.value.getTime(),
                )

            default:
                throw new Error('Invlid sort')
        }
    }

    private static sortDefault = (workouts: WorkoutModel[]) => {
        return workouts.sort((a: WorkoutModel, b: WorkoutModel) => {
            if (a.date.value.getTime() > b.date.value.getTime()) return 1
            else if (a.date.value.getTime() < b.date.value.getTime()) return -1
            else if (a.date.value.getTime() === b.date.value.getTime()) {
                if (a.name.value.includes('SQ')) return -1
                else if (
                    a.name.value.includes('BP') &&
                    b.name.value.includes('DL')
                )
                    return -1
                else if (a.name.value < b.name.value) return 1
                else return 0
            } else return 0
        })
    }
}

export enum SORT_BY {
    DEFAULT = 0,
    DATE_DESC = 1,
}
