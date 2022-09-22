type ROL = 'athlete' | 'coach'

export type User = {
    id: string
    name: string
    email: string
    password: string
    rol: ROL
    createdAt?: Date
    updatedAt?: Date
}
