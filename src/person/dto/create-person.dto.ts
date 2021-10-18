import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePersonDTO {
  @Field()
  firstName: string;

  @Field()
  lastName: string;
}
