import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class GetVehicleStatsArgs {
  @Field(() => Date)
  date: Date;
}