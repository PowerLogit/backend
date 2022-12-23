import { FilterWorkoutByVO } from '../vo/filterWorkoutBy.vo'
import { WorkoutModel } from './workout.model'

export class FilterWorkoutsByModel {
    public static execute(
        workouts: WorkoutModel[],
        filterBy: FilterWorkoutByVO,
    ): WorkoutModel[] {
        switch (filterBy.value) {
            case FILTERS_BY.DEFAULT:
                const firstDayWeek = this.getFirstDayOfWeek()
                const lastDayWeek = this.getLastDayOfWeek()

                return workouts.filter((a) => {
                    const date = new Date(a.date.value)

                    return this.compareDate(date, firstDayWeek, lastDayWeek)
                })

            case FILTERS_BY.MONTH:
                const firstDayMonth = this.getFirstDayOfMonth()
                const lastDayMonth = this.getLastDayOfMonth()

                return workouts.filter((a) => {
                    const date = new Date(a.date.value)

                    return this.compareDate(date, firstDayMonth, lastDayMonth)
                })

            case FILTERS_BY.DAY:
                return workouts.filter((a) => {
                    const date = new Date(a.date.value)

                    return this.datesIsSameDay(date, new Date())
                })

            case FILTERS_BY.ALL:
                return workouts

            default:
                throw new Error('Invlid filter')
        }
    }

    private static compareDate = (
        date: Date,
        firstDate: Date,
        secondDate: Date,
    ): boolean => date >= firstDate && date <= secondDate

    private static getFirstDayOfMonth = (): Date => {
        const actualMonth = new Date()

        return new Date(actualMonth.getFullYear(), actualMonth.getMonth(), 1)
    }

    private static getLastDayOfMonth = (): Date => {
        const actualMonth = new Date()

        return new Date(
            actualMonth.getFullYear(),
            actualMonth.getMonth() + 1,
            0,
        )
    }

    private static getFirstDayOfWeek = (): Date => {
        const actualDate = new Date()
        const day = actualDate.getDay()
        const diff = actualDate.getDate() - day + (day === 0 ? -6 : 1)
        const firstDay = new Date(actualDate.setDate(diff))

        return new Date(
            firstDay.getFullYear(),
            firstDay.getMonth(),
            firstDay.getDate(),
        )
    }

    private static getLastDayOfWeek = (): Date => {
        const firstDay = this.getFirstDayOfWeek()
        const lastDay = new Date(firstDay)

        return new Date(lastDay.setDate(lastDay.getDate() + 6))
    }

    private static datesIsSameDay = (
        firstDate: Date,
        secondDate: Date,
    ): boolean =>
        firstDate.getFullYear() === secondDate.getFullYear() &&
        firstDate.getMonth() === secondDate.getMonth() &&
        firstDate.getDate() === secondDate.getDate()
}

export enum FILTERS_BY {
    DEFAULT = 0,
    DAY = 1,
    MONTH = 2,
    ALL = 3,
}
