import { ObjectType, Field } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type CapeDocument = Cape & Document

@ObjectType()
@Schema()
export class Cape {
  @Field(() => String, { description: "cape's id" })
  _id: string

  @Field(() => String, { description: "cape's background color" })
  @Prop()
  bg: string

  @Field(() => String, { description: "cape's programming language" })
  @Prop({ unique: true })
  language: string

  @Field(() => String, { description: "cape's programming language logo URL" })
  @Prop()
  image: string
}

export const CapeSchema = SchemaFactory.createForClass(Cape)
