import { CreateCapeInput } from './create-cape.input'
import { InputType, Field, PartialType } from '@nestjs/graphql'
import { IsString, IsNotEmpty } from 'class-validator'

@InputType()
export class UpdateCapeInput extends PartialType(CreateCapeInput) {
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  id: string
}
