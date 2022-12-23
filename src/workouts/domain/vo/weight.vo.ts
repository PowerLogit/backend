import { VOFormatException } from 'src/shared/domain/errors/voFormatException'
import { ValueObject } from 'src/shared/domain/vo/valueObject'

export class WeightVO extends ValueObject<number> {
    private static readonly regex = /^[0-9]{1,4}$/

    public equals(valueObject: WeightVO): boolean {
        return this.value === valueObject.value
    }

    protected assertIsValid(value: any): void {
        if (!WeightVO.regex.test(value))
            throw new VOFormatException(WeightVO.name, value)
    }

    public static create(value: number): WeightVO {
        return new WeightVO(value)
    }
}
