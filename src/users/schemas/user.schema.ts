import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { Roles } from '../../common/enums/roles.enum'

export type UserDocument = User & Document

@Schema()
export class User {
  @Prop({ unique: true })
  email: string
  @Prop()
  name: string
  @Prop()
  lastName: string
  @Prop()
  password: string
  @Prop()
  roles: [string] = [Roles.user]
}

export const UserSchema = SchemaFactory.createForClass(User)
