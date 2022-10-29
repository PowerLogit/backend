import { VOFormatException } from '../errors/voFormatException'
import { ValueObject } from './valueObject'

export class DateVO extends ValueObject<Date> {
    public equals(valueObject: DateVO) {
        return this.value === valueObject.value
    }

    protected assertIsValid(value: Date) {
        if (!new Date(value)) throw new VOFormatException(DateVO.name, value)
    }

    public static create(value?: Date): DateVO {
        return new DateVO(value || new Date())
    }
}
