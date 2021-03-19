import { User } from '@/users/schemas/user.schema'
import { UsersService } from '@/users/users.service'
import { JwtService } from '@nestjs/jwt'
import { Test, TestingModule } from '@nestjs/testing'
import { AuthService } from './auth.service'
import { ConfigModule } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { getModelToken } from '@nestjs/mongoose'
import { JwtStrategy } from '@/strategies/jwt.strategy'

describe('AuthService', () => {
  let service: AuthService
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
        AuthService,
        UsersService,
        JwtStrategy,
        {
          provide: getModelToken(User.name),
          useValue: userModel
        }
      ]
    }).compile()

    service = module.get<AuthService>(AuthService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
