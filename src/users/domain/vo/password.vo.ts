import { VOFormatException } from 'src/shared/domain/errors/voFormatException'
import { ValueObject } from 'src/shared/domain/vo/valueObject'

export class PasswordVO extends ValueObject<string> {
    public equals(valueObject: PasswordVO) {
        return this.value === valueObject.value
    }

    protected assertIsValid(value: string) {
        if (value.length < 8 && value.length > 30 && value.includes(' '))
            throw new VOFormatException(PasswordVO.name, value)
    }

    public static create(value: string): PasswordVO {
        return new PasswordVO(value)
    }
}
