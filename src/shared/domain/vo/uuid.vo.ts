import { test } from 'uuid-random'
import { VOFormatException } from '../errors/voFormatException'
import { ValueObject } from './valueObject'

export class UuidVO extends ValueObject<string> {
    public equals(valueObject: UuidVO): boolean {
        return this.value === valueObject.value
    }

    protected assertIsValid(value: string): void {
        if (!test(value)) throw new VOFormatException(UuidVO.name, value)
    }

    public static create(value: string): UuidVO {
        return new UuidVO(value)
    }
}
