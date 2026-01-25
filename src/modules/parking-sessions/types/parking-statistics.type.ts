import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ParkingStatistics {
  @Field(() => Int)
  parkedVehicles: number;

  @Field(() => Int)
  parkedMotorcycles: number;

  @Field(() => Float)
  revenueToday: number;

  @Field(() => Int)
  currentlyParked: number;

  @Field(() => Int)
  totalEntriesToday: number;
}