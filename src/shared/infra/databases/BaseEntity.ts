import { CreateDateColumn, PrimaryColumn, UpdateDateColumn } from 'typeorm'

export abstract class BaseEntity {
    @PrimaryColumn()
    id!: string

    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    })
    createdAt!: Date

    @UpdateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    })
    updatedAt!: Date
}
