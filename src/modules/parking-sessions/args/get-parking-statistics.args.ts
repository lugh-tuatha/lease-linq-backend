import { ArgsType, Field } from "@nestjs/graphql";
import { ParkingState } from "generated/prisma/enums";
import { PaginationArgs } from "src/common/args/pagination.args";

@ArgsType()
export class GetParkingStatistics {
  @Field()
  parkingState: ParkingState;

  @Field()
  date: string;
}