import { VOFormatException } from '../errors/voFormatException'

export abstract class ValueObject<T> {
    protected constructor(public readonly value: T) {
        this.assertIsValid(value)
    }

    public abstract equals(valueObject: ValueObject<T>): boolean

    protected abstract assertIsValid(value: T): void | VOFormatException
}
