import { UuidVO } from './vo/uuid.vo'

export interface IRepository<T> {
    findOne(id: UuidVO): Promise<T | null>
    exist(id: UuidVO): Promise<boolean>

    create(item: T): Promise<boolean>
    update(item: T): Promise<boolean>
    delete(id: UuidVO): Promise<boolean>
}
