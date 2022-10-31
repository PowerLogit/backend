import { VOFormatException } from 'src/shared/domain/errors/voFormatException'
import { ValueObject } from 'src/shared/domain/vo/valueObject'
import { compare, hash } from 'bcrypt'

export class PasswordVO extends ValueObject<string> {
    private static readonly HASH_SALT: number = 10

    public equals(valueObject: PasswordVO): boolean {
        return this.value === valueObject.value
    }

    protected assertIsValid(value: string): void | VOFormatException {
        if (typeof value !== 'string')
            throw new VOFormatException(PasswordVO.name, value)
    }

    /**
     *
     * @param value The password encrypted.
     * @returns The password encrypted.
     */
    public static create(value: string): PasswordVO {
        return new PasswordVO(value)
    }

    private static assertIsValidPlainPassword(
        plainPassword: string,
    ): void | VOFormatException {
        if (
            plainPassword.length < 8 &&
            plainPassword.length > 30 &&
            plainPassword.includes(' ')
        )
            throw new VOFormatException(PasswordVO.name, plainPassword)
    }

    /**
     *
     * @param plainPassword The password to be encrypted.
     * @returns The password encrypted.
     */
    public static async hashCreate(plainPassword: string): Promise<PasswordVO> {
        this.assertIsValidPlainPassword(plainPassword)

        const newPassword = await hash(plainPassword, this.HASH_SALT)

        return new PasswordVO(newPassword)
    }

    /**
     *
     * @param plainPassword The password plain
     * @returns The password plain
     */
    public static createPlain(plainPassword: string): PasswordVO {
        this.assertIsValidPlainPassword(plainPassword)

        return new PasswordVO(plainPassword)
    }

    /**
     *
     * @param plainPassword The password to be compared.
     * @returns If is same password
     */
    public isValid(plainPassword: PasswordVO): Promise<boolean> {
        return compare(plainPassword.value, this.value)
    }
}
