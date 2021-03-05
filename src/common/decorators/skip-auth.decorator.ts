import { SetMetadata } from '@nestjs/common'
import { ROLES } from 'common/decorators/roles.decorator'
import { applyDecorators } from '@nestjs/common'

export const SKIP_AUTH = 'SKIP_AUTH'
export const SkipAuth = (skipAuth = true) =>
  applyDecorators(SetMetadata(SKIP_AUTH, skipAuth), SetMetadata(ROLES, null))
