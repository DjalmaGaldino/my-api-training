import { RefreshToken } from "@users/entities/RefreshToken"

type CreteRefreshTokenDTO = {
  user_id: string
  token: string
  expires: Date
  valid: boolean
}

export interface IRefreshTokenRepository {
  create({ user_id, token, expires, valid}: CreteRefreshTokenDTO): Promise<RefreshToken>
  findByToken(token: string): Promise<RefreshToken | null>
  invalidate(refresh_token: RefreshToken): Promise<void>
}
