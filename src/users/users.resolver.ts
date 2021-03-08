import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { UsersService } from './users.service'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { Roles, Role } from 'common/decorators/roles.decorator'
import { SkipAuth } from 'common/decorators/skip-auth.decorator'
import { User } from './schemas/user.schema'
import { RegisterUserInput } from './dto/register-user.input'

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Roles(Role.admin)
  @Mutation(() => User, { name: 'createUser' })
  async create(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput)
  }

  @SkipAuth()
  @Mutation(() => User, { name: 'registerUser' })
  async register(
    @Args('registerUserInput') registerUserInput: RegisterUserInput
  ) {
    return this.usersService.create({
      ...registerUserInput,
      roles: [Role.user]
    })
  }

  @Roles(Role.admin)
  @Query(() => [User], { name: 'users' })
  async findAll() {
    return await this.usersService.findAll()
  }

  @Roles(Role.admin)
  @Query(() => User, { name: 'user' })
  async findOne(@Args('id', { type: () => String }) id: string) {
    return this.usersService.findOne(id)
  }

  @Mutation(() => User)
  async updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput)
  }

  @Mutation(() => User)
  async removeUser(@Args('id', { type: () => String }) id: string) {
    return this.usersService.remove(id)
  }
}
