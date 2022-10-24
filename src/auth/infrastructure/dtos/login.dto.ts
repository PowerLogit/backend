import { IsNotEmpty, IsString } from 'class-validator'

export class LoginUserDto {
    @IsNotEmpty()
    @IsString()
    readonly email!: string

    @IsNotEmpty()
    @IsString()
    readonly password!: string
}
