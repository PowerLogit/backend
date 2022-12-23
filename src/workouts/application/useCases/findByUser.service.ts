import { Injectable, NotFoundException } from '@nestjs/common'
import { UuidVO } from 'src/shared/domain/vo/uuid.vo'
import {
    IFilters,
    WorkoutsFilters,
} from 'src/workouts/domain/models/WorkoutFilters.models'
import { WorkoutRepository } from 'src/workouts/infrastructure/repository.service'

@Injectable()
export class FindByUserWorkoutUseCase {
    constructor(private repository: WorkoutRepository) {}

    async execute(userId: UuidVO, filters: IFilters): Promise<WorkoutsFilters> {
        const workouts = await this.repository.findByUser(userId)
        if (!workouts) throw new NotFoundException('Workout not found')

        return WorkoutsFilters.create(workouts, filters)
    }
}
