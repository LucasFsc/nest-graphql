import { InputType } from '@nestjs/graphql'
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
  email: string

  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  lastName: string

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak'
  })
  password: string

  @IsArray()
  @IsNotEmpty()
  roles: [string]
}
