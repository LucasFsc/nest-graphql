import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  email: string;
  name: string;
  lastName: string;
  password: string;
}
