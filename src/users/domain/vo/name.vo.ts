import { VOFormatException } from 'src/shared/domain/errors/voFormatException'
import { ValueObject } from 'src/shared/domain/vo/valueObject'

export class NameVO extends ValueObject<string> {
    private static regex =
        /^(?![\s-'])(?!.*[\s-']{2})(?!.*[\s-']$)[A-ZÀ-ÖØ-öø-ÿ\s-']{2,30}$/i

    public equals(valueObject: NameVO): boolean {
        return this.value === valueObject.value
    }

    protected assertIsValid(value: string): void {
        if (!NameVO.regex.test(value))
            throw new VOFormatException(NameVO.name, value)
    }

    public static create(value: string): NameVO {
        return new NameVO(value)
    }
}
