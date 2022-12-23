import { SaveController } from './create.controller'
import { FindOneByUserController } from './findByUser.controller'
import { FindOneController } from './findOne.controller'

export const WorkoutController = [
    SaveController,
    FindOneController,
    FindOneByUserController,
]
