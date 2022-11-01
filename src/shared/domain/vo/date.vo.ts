import { VOFormatException } from '../errors/voFormatException'
import { ValueObject } from './valueObject'

export class DateVO extends ValueObject<Date> {
    public equals(valueObject: DateVO): boolean {
        return this.value === valueObject.value
    }

    protected assertIsValid(value: Date): void {
        if (!new Date(value)) throw new VOFormatException(DateVO.name, value)
    }

    public static create(value?: Date): DateVO {
        const date = value ? new Date(value) : new Date()

        return new DateVO(date)
    }
}
