import { VOFormatException } from 'src/shared/domain/errors/voFormatException'
import { ValueObject } from 'src/shared/domain/vo/valueObject'

export class RolVO extends ValueObject<string> {
    public equals(valueObject: RolVO): boolean {
        return this.value === valueObject.value
    }

    protected assertIsValid(value: string): void | VOFormatException {
        if (!(<any>Object).values(USER_ROL).includes(value))
            throw new VOFormatException(RolVO.name, value)
    }

    public static create(value: string): RolVO {
        return new RolVO(value)
    }
}

export type UserRol = 'athlete' | 'coach'
export enum USER_ROL {
    ATHLETE = 'athlete',
    COACH = 'coach',
}
