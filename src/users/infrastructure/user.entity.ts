import { BaseEntity } from 'src/shared/infra/databases/BaseEntity'
import { WorkoutEntity } from 'src/workouts/infrastructure/workout.entity'
import { Column, Entity, OneToMany } from 'typeorm'
import { IUser } from '../domain/@types/IUser'

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity implements IUser {
    @Column()
    name!: string

    @Column()
    email!: string

    @Column()
    password!: string

    @Column()
    rol!: string

    @OneToMany(() => WorkoutEntity, (workout) => workout.userId)
    workouts?: WorkoutEntity[]
}
