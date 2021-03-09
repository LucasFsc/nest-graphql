import { CreateRubberDuckInput } from './create-rubber-duck.input'
import { InputType, Field, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateRubberDuckInput extends PartialType(CreateRubberDuckInput) {
  @Field(() => String)
  id: string
}
