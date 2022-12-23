import { Column, PrimaryColumn } from 'typeorm'

export abstract class BaseEntity {
    @PrimaryColumn({ unique: true })
    id!: string

    @Column({ type: 'timestamp' })
    createdAt!: Date

    @Column({ type: 'timestamp' })
    updatedAt!: Date
}
