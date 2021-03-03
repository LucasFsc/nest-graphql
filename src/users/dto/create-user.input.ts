import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  name: string;
  password: string;
}
