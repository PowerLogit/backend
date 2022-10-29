import { VOFormatException } from 'src/shared/domain/errors/voFormatException'
import { ValueObject } from 'src/shared/domain/vo/valueObject'

export class EmailVO extends ValueObject<string> {
    private regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    public equals(valueObject: EmailVO) {
        return this.value === valueObject.value
    }

    protected assertIsValid(value: string) {
        if (!this.regex.test(value))
            throw new VOFormatException(EmailVO.name, value)
    }

    public static create(value: string): EmailVO {
        return new EmailVO(value)
    }
}
