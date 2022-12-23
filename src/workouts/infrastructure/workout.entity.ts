import { BaseEntity } from 'src/shared/infra/databases/BaseEntity'
import { UserEntity } from 'src/users/infrastructure/user.entity'
import { Column, Entity, ManyToOne } from 'typeorm'

@Entity({ name: 'workouts' })
export class WorkoutEntity extends BaseEntity {
    @Column()
    name!: string

    @Column()
    sets!: number

    @Column()
    reps!: number

    @Column()
    weight!: number

    @Column()
    date!: Date

    @ManyToOne(() => UserEntity, (user) => user.workouts)
    userId!: UserEntity
}
