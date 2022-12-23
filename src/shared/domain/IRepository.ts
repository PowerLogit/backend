import { UuidVO } from './vo/uuid.vo'

export interface IRepository<Model> {
    exist(id: UuidVO): Promise<boolean>
    findOne(id: UuidVO): Promise<Model | null>

    create(item: Model): Promise<boolean>
    update(item: Model): Promise<boolean>
    delete(id: UuidVO): Promise<boolean>
}
