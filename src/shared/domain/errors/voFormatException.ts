import { BadRequestException } from '@nestjs/common'

export class VOFormatException extends BadRequestException {
    constructor(constructorName: string, value: any) {
        super(`${constructorName}: Invalid value ${JSON.stringify(value)}`)
    }
}
