import { ArgsType, Field } from '@nestjs/graphql'
import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

@ArgsType()
export class AuthArgs {
  @IsEmail()
  @IsNotEmpty()
  @Field(() => String, { description: "user's login email" })
  email: string

  @IsString()
  @IsNotEmpty()
  @Field(() => String, { description: "user's login password" })
  password: string
}
