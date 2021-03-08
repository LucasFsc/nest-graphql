import { InputType, Field } from '@nestjs/graphql'
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  Matches,
  MaxLength,
  MinLength,
  IsString
} from 'class-validator'

@InputType()
export class CreateUserInput {
  @IsEmail()
  @Field(() => String, { description: "user's email" })
  email: string

  @IsNotEmpty()
  @Field(() => String, { description: "user's name" })
  name: string

  @IsNotEmpty()
  @Field(() => String, { description: "user's last name" })
  lastName: string

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak'
  })
  @Field(() => String, { description: "user's password" })
  password: string

  @IsArray()
  @IsNotEmpty()
  @Field(() => [String], { description: "user's roles" })
  roles: [string]
}
