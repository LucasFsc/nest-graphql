import { JwtStrategy } from '@/common/strategies/jwt.strategy'
import { UsersService } from '@/users/users.service'
import { Test, TestingModule } from '@nestjs/testing'
import { AuthResolver } from './auth.resolver'
import { AuthService } from './auth.service'
import { ConfigModule } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { getModelToken } from '@nestjs/mongoose'
import { User } from '@/users/schemas/user.schema'

describe('AuthResolver', () => {
  let resolver: AuthResolver
  const userModel = new User()

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(),
        JwtModule.register({
          secret: process.env.JWT_SECRET,
          signOptions: { expiresIn: '1h' }
        })
      ],
      providers: [
        AuthResolver,
        AuthService,
        UsersService,
        JwtStrategy,
        {
          provide: getModelToken(User.name),
          useValue: userModel
        }
      ]
    }).compile()

    resolver = module.get<AuthResolver>(AuthResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
