import { IBaseModel } from './@types/IBaseModel'
import { DateVO } from './vo/date.vo'
import { UuidVO } from './vo/uuid.vo'

export abstract class BaseModel implements IBaseModel {
    constructor(
        public readonly id: UuidVO,
        public createdAt: DateVO,
        public updatedAt: DateVO,
    ) {}
}
