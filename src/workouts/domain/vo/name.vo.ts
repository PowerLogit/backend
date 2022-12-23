import { VOFormatException } from 'src/shared/domain/errors/voFormatException'
import { ValueObject } from 'src/shared/domain/vo/valueObject'

export class NameVO extends ValueObject<string> {
    private static readonly regex = /^[A-Z]{1,50}$/

    equals(valueObject: NameVO) {
        return valueObject instanceof NameVO && this.value === valueObject.value
    }

    assertIsValid(value: string) {
        if (!NameVO.regex.test(value)) {
            throw new VOFormatException(NameVO.name, value)
        }
    }

    public static create(value: string): NameVO {
        return new NameVO(value)
    }
}
