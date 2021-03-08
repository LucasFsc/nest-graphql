import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { Roles } from '../../common/enums/roles.enum'
import { ObjectType, Field } from '@nestjs/graphql'

export type UserDocument = User & Document

@Schema()
@ObjectType()
export class User {
  @Field(() => String, { description: "user's _id", nullable: true })
  _id?: string

  @Prop({ unique: true })
  @Field(() => String, { description: "user's email" })
  email: string

  @Prop()
  @Field(() => String, { description: "user's name" })
  name: string

  @Prop()
  @Field(() => String, { description: "user's last name" })
  lastName: string

  @Prop()
  @Field(() => String, { description: "user's password" })
  password: string

  @Prop()
  @Field(() => [String], { description: "user's roles" })
  roles: [string] = [Roles.user]
}

export const UserSchema = SchemaFactory.createForClass(User)
