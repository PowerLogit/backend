import { VOFormatException } from 'src/shared/domain/errors/voFormatException'
import { ValueObject } from 'src/shared/domain/vo/valueObject'
import { FILTERS_BY } from '../models/FilterBy.model'

export class FilterWorkoutByVO extends ValueObject<number> {
    public equals(valueObject: FilterWorkoutByVO): boolean {
        return this.value === valueObject.value
    }

    protected assertIsValid(value: FILTERS_BY): void {
        if (!Object.values(FILTERS_BY).includes(value))
            throw new VOFormatException(FilterWorkoutByVO.name, value)
    }

    public static create(value: number): FilterWorkoutByVO {
        return new FilterWorkoutByVO(value)
    }
}
