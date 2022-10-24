import { IsNotEmpty, IsString } from 'class-validator'

export class RegisterUserDto {
    @IsNotEmpty()
    @IsString()
    readonly id!: string

    @IsNotEmpty()
    @IsString()
    readonly name!: string

    @IsNotEmpty()
    @IsString()
    readonly email!: string

    @IsNotEmpty()
    @IsString()
    readonly password!: string

    @IsNotEmpty()
    @IsString()
    readonly rol!: string
}
