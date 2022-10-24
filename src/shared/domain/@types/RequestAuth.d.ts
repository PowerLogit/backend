import type { Request } from '@nestjs/common'
import type { BearerPayload } from 'src/auth/domain/@types/BearerPayload'

export type RequestAuth = Request & {
    user: BearerPayload
}
