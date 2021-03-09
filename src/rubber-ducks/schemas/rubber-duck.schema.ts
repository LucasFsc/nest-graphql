import { ObjectType, Field } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Schema as MongooseSchema } from 'mongoose'
import { Cape } from '@/capes/schemas/cape.schema'

export type RubberDuckDocument = RubberDuck & Document

@ObjectType()
@Schema()
export class RubberDuck {
  @Field(() => String, { description: 'rubber duck _id' })
  _id: string

  @Field(() => String, { description: 'rubber duck color', nullable: true })
  @Prop({ type: String })
  color? = '#facf58'

  @Field(() => Cape, { description: 'rubber duck cape' })
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Cape' })
  cape: string

  @Field(() => String, { description: 'rubber duck name' })
  @Prop({ unique: true })
  name: string
}

export const RubberDuckSchema = SchemaFactory.createForClass(RubberDuck)
