import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ unique: true })
  email: string;
  @Prop()
  name: string;
  @Prop()
  lastName: string;
  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
