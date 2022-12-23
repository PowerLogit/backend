export class PaginateModel {
    public static create<DomainModel>(
        items: Array<DomainModel>,
        page: number,
        limit: number,
    ): IPaginate<DomainModel> {
        const count: number = items.length
        const startIndex: number = (page - 1) * limit
        const endIndex: number = startIndex + limit

        return {
            count,
            data: items.slice(startIndex, endIndex),
        }
    }
}

export interface IPaginate<DomainModel> {
    count: number
    data: Array<DomainModel>
}
