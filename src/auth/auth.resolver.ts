import { UseGuards } from '@nestjs/common';
import { Args, Resolver, Mutation, Query } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { GqlJwtAuthGuard } from './gql-jwt-auth.guard';
import { GqlUserDecorator } from './gql-jwt-user.decorator';
import { AuthDataInput } from './dto/auth-data.input';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation('login')
  async login(@Args('authDataInput') { email, password }: AuthDataInput) {
    return this.authService.login(email, password);
  }

  @UseGuards(GqlJwtAuthGuard)
  @Query('whoAmI')
  async whoAmI(@GqlUserDecorator() user: any): Promise<any> {
    return user;
  }
}
