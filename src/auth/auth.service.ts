import {
  Injectable,
  NotFoundException,
  UnauthorizedException
} from '@nestjs/common'
import { UsersService } from '@/users/users.service'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async login(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email)

    if (!user) {
      throw new NotFoundException({ message: 'User not found' })
    }

    const { password: encryptedPassword } = user

    const payload = user.toJSON()

    delete payload.password

    if (await bcrypt.compare(password, encryptedPassword)) {
      return {
        token: this.jwtService.sign(payload)
      }
    }

    throw new UnauthorizedException()
  }
}
