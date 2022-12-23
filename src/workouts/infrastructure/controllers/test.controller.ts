/*import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Request,
    UseGuards,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { JwtAuthGuard } from 'src/auth/application/guards/jwt-auth.guard'
import { RequestAuth } from 'src/shared/domain/@types/RequestAuth'
import { DateVO } from 'src/shared/domain/vo/date.vo'
import { UuidVO } from 'src/shared/domain/vo/uuid.vo'
import { UserEntity } from 'src/users/infrastructure/user.entity'
import { NameVO } from 'src/workouts/domain/vo/name.vo'
import { RepVO } from 'src/workouts/domain/vo/reps.vo'
import { SetVO } from 'src/workouts/domain/vo/sets.vo'
import { WeightVO } from 'src/workouts/domain/vo/weight.vo'
import { WorkoutModel } from 'src/workouts/domain/workout.model'
import { Repository } from 'typeorm'
import { WorkoutEntity } from '../workout.entity'*/

import { Controller } from '@nestjs/common'

@Controller('workoutTest')
export class TestController {
    /*constructor(
        @InjectRepository(WorkoutEntity)
        private repoWorkout: Repository<WorkoutEntity>,
        @InjectRepository(UserEntity)
        private repoUser: Repository<UserEntity>,
    ) {}

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async findOneWorkout(@Request() req: RequestAuth, @Param('id') id: string) {
        const user = this.repoWorkout.findOneBy({ id })
        console.log(req.user.id)

        return user
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async findWorkouts(@Request() req: RequestAuth) {
        const user = await this.repoUser.findOne({
            where: { id: req.user.id },
            relations: ['workouts'],
        })
        if (!user) throw new Error('Usuario no existe')

        return user
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async saveWorkouts(@Request() req: RequestAuth, @Body() body: any) {
        const newWorkout = WorkoutModel.create(
            UuidVO.create(body.id),
            NameVO.create(body.name),
            SetVO.create(body.sets),
            RepVO.create(body.reps),
            WeightVO.create(body.weight),
            DateVO.create(),
            UuidVO.create(req.user.id),
            DateVO.create(),
            DateVO.create(),
        )

        const user2 = await this.repoUser.findOneBy({ id: req.user.id })
        if (!user2) throw new Error('Usuario no existe')

        const workoutDto: WorkoutEntity = {
            id: newWorkout.id.value,
            name: newWorkout.name.value,
            sets: newWorkout.sets.value,
            reps: newWorkout.reps.value,
            weight: newWorkout.weight.value,
            date: newWorkout.date.value,
            userId: user2,
            createdAt: newWorkout.createdAt.value,
            updatedAt: newWorkout.updatedAt.value,
        }

        const user = this.repoWorkout.save(workoutDto)
        console.log(req.user.id)

        return user
    }

    @UseGuards(JwtAuthGuard)
    @Get('fghj')
    async ZXC() {
        console.log(this.repoUser)
        console.log(this.repoWorkout)

        return
    }*/
}
