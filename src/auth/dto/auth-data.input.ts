import { InputType } from '@nestjs/graphql'

@InputType()
export class AuthDataInput {
  email: string
  password: string
}
