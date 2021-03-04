import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { UsersService } from './users.service'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { GqlJwtAuthGuard } from '../auth/gql-jwt-auth.guard'
import { UseFilters, UseGuards } from '@nestjs/common'
import { MongoExceptionFilter } from '../common/filters/mongo-exception.filter'

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation('createUser')
  @UseFilters(MongoExceptionFilter)
  async create(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput)
  }

  @Query('users')
  @UseGuards(GqlJwtAuthGuard)
  async findAll() {
    return await this.usersService.findAll()
  }

  @Query('user')
  @UseGuards(GqlJwtAuthGuard)
  async findOne(@Args('id') id: string) {
    return this.usersService.findOne(id)
  }

  @Mutation('updateUser')
  @UseGuards(GqlJwtAuthGuard)
  async update(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput)
  }

  @Mutation('removeUser')
  @UseGuards(GqlJwtAuthGuard)
  async remove(@Args('id') id: string) {
    return this.usersService.remove(id)
  }
}
