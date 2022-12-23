import { DateVO } from 'src/shared/domain/vo/date.vo'
import { UuidVO } from 'src/shared/domain/vo/uuid.vo'
import { UserModel } from 'src/users/domain/user.model'
import { UserMapper } from 'src/users/infrastructure/user.mapper'
import { NameVO } from '../domain/vo/name.vo'
import { RepVO } from '../domain/vo/reps.vo'
import { SetVO } from '../domain/vo/sets.vo'
import { WeightVO } from '../domain/vo/weight.vo'
import { WorkoutModel } from '../domain/models/workout.model'
import { WorkoutEntity } from './workout.entity'

export class WorkoutMapper {
    /**
     * Transforms a database workout into a domain workout
     * @param persistanceWorkout Database workout
     * @returns Domain workout
     */
    public static toDomain(
        persistanceWorkout: WorkoutEntity,
        idUser?: UuidVO,
    ): WorkoutModel {
        const {
            id,
            name,
            sets,
            reps,
            weight,
            date,
            createdAt,
            updatedAt,
            userId,
        } = persistanceWorkout

        const user = !idUser ? userId.id : idUser.value

        return WorkoutModel.create(
            UuidVO.create(id),
            DateVO.create(createdAt),
            DateVO.create(updatedAt),
            NameVO.create(name),
            SetVO.create(sets),
            RepVO.create(reps),
            WeightVO.create(weight),
            DateVO.create(date),
            UuidVO.create(user),
        )
    }
    /**
     * Transforms a domain workout into a database workout
     * @param domainWorkout Domain workout
     * @returns Database workout
     */
    public static toPersistance(
        domainWorkout: WorkoutModel,
        domainUser: UserModel,
    ): WorkoutEntity {
        const { id, name, sets, reps, weight, date, createdAt, updatedAt } =
            domainWorkout

        return {
            id: id.value,
            name: name.value,
            sets: sets.value,
            reps: reps.value,
            weight: weight.value,
            date: date.value,
            userId: UserMapper.toPersistance(domainUser),
            createdAt: createdAt.value,
            updatedAt: updatedAt.value,
        }
    }
}
