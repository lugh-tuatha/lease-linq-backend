import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class VehicleStats {
  @Field()
  name: string;

  @Field(() => Int)
  value: number;
}
