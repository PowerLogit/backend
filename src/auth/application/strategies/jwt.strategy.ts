import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { BearerPayload } from '../../domain/@types/BearerPayload'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: true,
            secretOrKey: 'secretKey',
        })
    }

    async validate(payload: BearerPayload) {
        return {
            id: payload.id,
            name: payload.name,
            rol: payload.rol,
        }
    }
}
