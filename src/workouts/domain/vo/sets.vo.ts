import { VOFormatException } from 'src/shared/domain/errors/voFormatException'
import { ValueObject } from 'src/shared/domain/vo/valueObject'

export class SetVO extends ValueObject<number> {
    private static readonly regex = /^[0-9]{1,2}$/

    public equals(valueObject: SetVO): boolean {
        return this.value === valueObject.value
    }

    protected assertIsValid(value: any): void {
        if (!SetVO.regex.test(value))
            throw new VOFormatException(SetVO.name, value)
    }

    public static create(value: number): SetVO {
        return new SetVO(value)
    }
}
