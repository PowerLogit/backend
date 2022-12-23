import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from 'src/users/infrastructure/user.entity'
import { WorkoutUseCases } from '../application/useCases'
import { WorkoutController } from '../infrastructure/controllers'
import { TestController } from '../infrastructure/controllers/test.controller'
import { WorkoutRepository } from '../infrastructure/repository.service'
import { WorkoutEntity } from '../infrastructure/workout.entity'

@Module({
    providers: [...WorkoutUseCases, WorkoutRepository],
    imports: [TypeOrmModule.forFeature([WorkoutEntity, UserEntity])],
    exports: [TypeOrmModule],
    controllers: [TestController, ...WorkoutController],
})
export class WorkoutsModule {}
