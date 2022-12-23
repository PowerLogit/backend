import { BaseModel } from 'src/shared/domain/BaseModel'
import { DateVO } from 'src/shared/domain/vo/date.vo'
import { UuidVO } from 'src/shared/domain/vo/uuid.vo'
import { NameVO } from '../vo/name.vo'
import { RepVO } from '../vo/reps.vo'
import { SetVO } from '../vo/sets.vo'
import { WeightVO } from '../vo/weight.vo'

export class WorkoutModel extends BaseModel {
    constructor(
        id: UuidVO,
        createdAt: DateVO,
        updatedAt: DateVO,
        public name: NameVO,
        public sets: SetVO,
        public reps: RepVO,
        public weight: WeightVO,
        public date: DateVO,
        public userId: UuidVO,
    ) {
        super(id, createdAt, updatedAt)
    }

    static create(
        id: UuidVO,
        createdAt: DateVO,
        updatedAt: DateVO,
        name: NameVO,
        sets: SetVO,
        reps: RepVO,
        weight: WeightVO,
        date: DateVO,
        userId: UuidVO,
    ): WorkoutModel {
        return new WorkoutModel(
            id,
            createdAt,
            updatedAt,
            name,
            sets,
            reps,
            weight,
            date,
            userId,
        )
    }
}
