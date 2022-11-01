import { VOFormatException } from 'src/shared/domain/errors/voFormatException'
import { ValueObject } from 'src/shared/domain/vo/valueObject'
import { USER_ROL } from '../@types/UserRol'

export class RolVO extends ValueObject<string> {
    public equals(valueObject: RolVO): boolean {
        return this.value === valueObject.value
    }

    protected assertIsValid(value: USER_ROL): void {
        if (!Object.values(USER_ROL).includes(value))
            throw new VOFormatException(RolVO.name, value)
    }

    public static create(value: string): RolVO {
        return new RolVO(value)
    }
}
