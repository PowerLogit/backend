import { BaseEntity } from 'src/shared/infra/databases/BaseEntity'
import { Column, Entity } from 'typeorm'
import { User, UserRol } from '../domain/@types/user'

@Entity()
export class UserEntity extends BaseEntity implements User {
    @Column()
    name!: string

    @Column()
    email!: string

    @Column()
    password!: string

    @Column()
    rol!: UserRol
}
