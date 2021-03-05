import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { UsersService } from './users.service'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { Roles, Role } from 'common/decorators/roles.decorator'
import { SkipAuth } from 'common/decorators/skip-auth.decorator'

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @SkipAuth()
  @Mutation('createUser')
  async create(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput)
  }

  @Roles(Role.admin)
  @Query('users')
  async findAll() {
    return await this.usersService.findAll()
  }

  @Roles(Role.admin)
  @Query('user')
  async findOne(@Args('id') id: string) {
    return this.usersService.findOne(id)
  }

  @Mutation('updateUser')
  async update(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput)
  }

  @Mutation('removeUser')
  async remove(@Args('id') id: string) {
    return this.usersService.remove(id)
  }
}
