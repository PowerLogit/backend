import { Expose, Type } from 'class-transformer'
import { WorkoutSerializer } from './workout.serializer'

export class WorkoutsSerializer {
    @Expose()
    @Type(() => Workouts)
    data!: Array<Workouts>

    constructor(partial: Partial<WorkoutsSerializer>) {
        Object.assign(this, partial)
    }
}

class Workouts extends Array<WorkoutSerializer> {
    @Expose()
    @Type(() => WorkoutSerializer)
    data!: Array<WorkoutSerializer>
}
