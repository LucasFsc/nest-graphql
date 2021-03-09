import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class CreateRubberDuckInput {
  @Field(() => String, { description: 'rubber duck color', nullable: true })
  color?: string

  @Field(() => String, { description: 'rubber duck cape' })
  cape: string

  @Field(() => String, { description: 'rubber duck name' })
  name: string
}
