import { ObjectType, Field } from '@nestjs/graphql'

@ObjectType()
export class AuthJWT {
  @Field(() => String, { description: 'JWT authorization token' })
  token: string
}
