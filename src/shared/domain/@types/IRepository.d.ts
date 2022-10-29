export interface IRepository<T> {
    findOne(id: string): Promise<T | undefined>
    exist(id: string): Promise<boolean>

    create(item: T): Promise<boolean>
    update(item: T): Promise<boolean>
    delete(id: string): Promise<boolean>
}
