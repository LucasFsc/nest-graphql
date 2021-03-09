import {
  Injectable,
  ExecutionContext,
  CanActivate,
  PreconditionFailedException
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { GqlExecutionContext } from '@nestjs/graphql'
import { ROLES } from '@/common/decorators/roles.decorator'

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context)
    return ctx.getContext().req
  }

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.getAllAndOverride<string[]>(ROLES, [
      context.getHandler(),
      context.getClass()
    ])
    if (!roles) {
      return true
    }
    const { user } = this.getRequest(context)
    if (roles && !user) {
      throw new PreconditionFailedException(
        'requests where authentication is bypassed must not contain roles verification'
      )
    }
    return roles.some((role) => user?.roles?.includes(role))
  }
}
