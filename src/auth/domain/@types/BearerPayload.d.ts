import { UserRol } from 'src/users/domain/@types/user'

export type BearerPayload = {
    id: string
    name: string
    rol: UserRol
}
