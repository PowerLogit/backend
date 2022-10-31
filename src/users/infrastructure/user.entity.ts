import { BaseEntity } from 'src/shared/infra/databases/BaseEntity'
import { Column, Entity } from 'typeorm'
import { IUser } from '../domain/@types/IUser'

@Entity()
export class UserEntity extends BaseEntity implements IUser {
    @Column()
    name!: string

    @Column()
    email!: string

    @Column()
    password!: string

    @Column()
    rol!: string
}
