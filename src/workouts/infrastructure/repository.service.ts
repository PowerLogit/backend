import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UuidVO } from 'src/shared/domain/vo/uuid.vo'
import { UserEntity } from 'src/users/infrastructure/user.entity'
import { UserMapper } from 'src/users/infrastructure/user.mapper'
import { Repository } from 'typeorm'
//import { IWorkoutRepository } from '../domain/IWorkoutRepository'
import { WorkoutModel } from '../domain/models/workout.model'
import { WorkoutEntity } from './workout.entity'
import { WorkoutMapper } from './workout.mapper'

@Injectable()
export class WorkoutRepository {
    constructor(
        @InjectRepository(WorkoutEntity)
        private repoWorkout: Repository<WorkoutEntity>,
        @InjectRepository(UserEntity)
        private repoUser: Repository<UserEntity>,
    ) {}

    async findOne(
        idWorkout: UuidVO,
        idUser: UuidVO,
    ): Promise<WorkoutModel | null> {
        const workout = await this.repoWorkout.findOneBy({
            id: idWorkout.value,
        })
        if (!workout) return null

        return WorkoutMapper.toDomain(workout, idUser)
    }

    async findByUser(id: UuidVO): Promise<WorkoutModel[] | null> {
        const user = await this.repoUser.findOne({
            where: { id: id.value },
            relations: ['workouts'],
        })
        if (!user?.workouts) return null

        return user.workouts.map((workout) =>
            WorkoutMapper.toDomain(workout, id),
        )
    }

    async exist(id: UuidVO): Promise<boolean> {
        const workout = await this.repoWorkout.findOneBy({ id: id.value })

        return !!workout
    }

    async create(domainWorkout: WorkoutModel): Promise<boolean> {
        const user = await this.findUser(domainWorkout.userId)
        if (!user) return false

        const persistanceWorkout = WorkoutMapper.toPersistance(
            domainWorkout,
            UserMapper.toDomain(user),
        )

        const workout = await this.repoWorkout.save(persistanceWorkout)

        return !!workout
    }

    async update(domainWorkout: WorkoutModel): Promise<boolean> {
        const user = await this.findUser(domainWorkout.userId)
        if (!user) return false

        const persistanceWorkout = WorkoutMapper.toPersistance(
            domainWorkout,
            UserMapper.toDomain(user),
        )

        const workout = await this.repoWorkout.update(
            { id: domainWorkout.userId.value },
            persistanceWorkout,
        )

        return !!workout
    }

    async delete(id: UuidVO): Promise<boolean> {
        const workout = await this.repoWorkout.delete({ id: id.value })

        return !!workout
    }

    private async findUser(id: UuidVO): Promise<UserEntity | null> {
        const user = await this.repoUser.findOneBy({ id: id.value })
        if (!user) return null

        return user
    }
}
