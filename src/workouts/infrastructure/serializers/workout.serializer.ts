import { Exclude, Expose, Transform } from 'class-transformer'
import { DateVO } from 'src/shared/domain/vo/date.vo'
import { UuidVO } from 'src/shared/domain/vo/uuid.vo'
import { NameVO } from 'src/workouts/domain/vo/name.vo'
import { RepVO } from 'src/workouts/domain/vo/reps.vo'
import { SetVO } from 'src/workouts/domain/vo/sets.vo'
import { WeightVO } from 'src/workouts/domain/vo/weight.vo'
import { WorkoutModel } from 'src/workouts/domain/models/workout.model'

export class WorkoutSerializer implements WorkoutModel {
    @Expose()
    @Transform(({ value }) => value.value)
    id!: UuidVO

    @Expose()
    @Transform(({ value }) => value.value)
    createdAt!: DateVO

    @Expose()
    @Transform(({ value }) => value.value)
    updatedAt!: DateVO

    @Expose()
    @Transform(({ value }) => value.value)
    name!: NameVO

    @Expose()
    @Transform(({ value }) => value.value)
    sets!: SetVO

    @Expose()
    @Transform(({ value }) => value.value)
    reps!: RepVO

    @Expose()
    @Transform(({ value }) => value.value)
    weight!: WeightVO

    @Expose()
    @Transform(({ value }) => value.value)
    date!: DateVO

    @Exclude()
    userId!: UuidVO

    constructor(partial: Partial<WorkoutSerializer>) {
        Object.assign(this, partial)
    }
}
