import { InputType, Field } from '@nestjs/graphql'
import { IsString, IsNotEmpty } from 'class-validator'

@InputType()
export class CreateCapeInput {
  @IsString()
  @IsNotEmpty()
  @Field(() => String, { description: "cape's background color" })
  bg: string

  @IsString()
  @IsNotEmpty()
  @Field(() => String, { description: "cape's programming language" })
  language: string

  @IsString()
  @IsNotEmpty()
  @Field(() => String, { description: "cape's programming language logo URL" })
  image: string
}
