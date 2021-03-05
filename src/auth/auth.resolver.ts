import { Args, Resolver, Mutation, Query } from '@nestjs/graphql'
import { AuthService } from './auth.service'
import { SkipAuth } from '../common/decorators/skip-auth.decorator'
import { GqlUserDecorator } from '../common/decorators/gql-jwt-user.decorator'
import { AuthDataInput } from './dto/auth-data.input'

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation('login')
  @SkipAuth()
  async login(@Args('authDataInput') { email, password }: AuthDataInput) {
    return this.authService.login(email, password)
  }

  @Query('whoAmI')
  async whoAmI(@GqlUserDecorator() user: any): Promise<any> {
    return user
  }
}
