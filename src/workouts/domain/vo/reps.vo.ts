import { VOFormatException } from 'src/shared/domain/errors/voFormatException'
import { ValueObject } from 'src/shared/domain/vo/valueObject'

export class RepVO extends ValueObject<number> {
    private static readonly regex = /^[0-9]{1,3}$/

    public equals(valueObject: RepVO): boolean {
        return this.value === valueObject.value
    }

    protected assertIsValid(value: any): void {
        if (!RepVO.regex.test(value))
            throw new VOFormatException(RepVO.name, value)
    }

    public static create(value: number): RepVO {
        return new RepVO(value)
    }
}
