import { Injectable, NotFoundException } from '@nestjs/common'
import { UuidVO } from 'src/shared/domain/vo/uuid.vo'
import { WorkoutModel } from 'src/workouts/domain/models/workout.model'
import { WorkoutRepository } from 'src/workouts/infrastructure/repository.service'

@Injectable()
export class FindOneWorkoutUseCase {
    constructor(private repository: WorkoutRepository) {}

    async execute(idWorkout: string, idUser: string): Promise<WorkoutModel> {
        const workoutId = UuidVO.create(idWorkout)
        const userId = UuidVO.create(idUser)

        const workout = await this.repository.findOne(workoutId, userId)
        if (!workout) throw new NotFoundException('Workout not found')

        return workout
    }
}
