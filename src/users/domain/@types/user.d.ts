export type UserRol = 'athlete' | 'coach'
export enum USER_ROL {
    ATHLETE = 'athlete',
    COACH = 'coach',
}

export type User = {
    id: string
    name: string
    email: string
    password: string
    rol: UserRol
    createdAt?: Date
    updatedAt?: Date
}
