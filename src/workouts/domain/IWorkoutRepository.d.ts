/* eslint-disable @typescript-eslint/no-empty-interface */
import { IRepository } from 'src/shared/domain/IRepository'
import { WorkoutModel } from './models/workout.model'

export interface IWorkoutRepository extends IRepository<WorkoutModel> {
    findByUser(id: UuidVO): Promise<WorkoutModel[] | null>
}
