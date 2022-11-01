import { UuidVO } from 'src/shared/domain/vo/uuid.vo'
import { NameVO } from 'src/users/domain/vo/name.vo'
import { RolVO } from 'src/users/domain/vo/rol.vo'

export type BearerPayloadVO = {
    id: UuidVO
    name: NameVO
    rol: RolVO
}

export type BearerPayload = {
    id: string
    name: string
    rol: string
}
