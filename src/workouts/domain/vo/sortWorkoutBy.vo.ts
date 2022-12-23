import { VOFormatException } from 'src/shared/domain/errors/voFormatException'
import { ValueObject } from 'src/shared/domain/vo/valueObject'
import { SORT_BY } from '../models/SortBy.model'

export class SortWorkoutByVO extends ValueObject<number> {
    public equals(valueObject: SortWorkoutByVO): boolean {
        return this.value === valueObject.value
    }

    protected assertIsValid(value: SORT_BY): void {
        if (!Object.values(SORT_BY).includes(value))
            throw new VOFormatException(SortWorkoutByVO.name, value)
    }

    public static create(value: number): SortWorkoutByVO {
        return new SortWorkoutByVO(value)
    }
}
