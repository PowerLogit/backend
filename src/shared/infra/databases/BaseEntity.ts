import { Column, PrimaryColumn } from 'typeorm'

export abstract class BaseEntity {
    @PrimaryColumn()
    id!: string

    @Column({ type: 'timestamp' })
    createdAt!: Date

    @Column({ type: 'timestamp' })
    updatedAt!: Date
}

/* export abstract class BaseEntity {
    @PrimaryColumn()
    id!: string

    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    })
    createdAt?: Date

    @UpdateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    })
    updatedAt?: Date
} */
