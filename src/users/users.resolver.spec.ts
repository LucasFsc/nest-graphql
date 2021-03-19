import { getModelToken } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'
import { UsersResolver } from './users.resolver'
import { UsersService } from './users.service'
import { User } from './schemas/user.schema'

describe('UsersResolver', () => {
  let resolver: UsersResolver
  const userModel = new User()

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersResolver,
        UsersService,
        {
          provide: getModelToken(User.name),
          useValue: userModel
        }
      ]
    }).compile()

    resolver = module.get<UsersResolver>(UsersResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
