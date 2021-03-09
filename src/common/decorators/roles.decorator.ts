import { SetMetadata } from '@nestjs/common'
import { Roles as RolesEnum } from '@/enums/roles.enum'

export const ROLES = 'ROLES'
export const Role = RolesEnum
export const Roles = (...roles: string[]) => SetMetadata(ROLES, roles)
