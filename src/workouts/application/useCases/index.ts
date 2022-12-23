import { CreateWorkoutUseCase } from './create.service'
import { FindOneWorkoutUseCase } from './findOne.service'
import { FindByUserWorkoutUseCase } from './findByUser.service'

export const WorkoutUseCases = [
    CreateWorkoutUseCase,
    FindOneWorkoutUseCase,
    FindByUserWorkoutUseCase,
]
