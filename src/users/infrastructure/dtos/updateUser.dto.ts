import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class UpdateUserDto {
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    readonly name!: string

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    readonly email!: string

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    readonly password!: string

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    readonly rol!: string
}
