import { DateVO } from '../vo/date.vo'
import { UuidVO } from '../vo/uuid.vo'

export interface IBaseModel {
    id: UuidVO
    createdAt: DateVO
    updatedAt: DateVO
}
