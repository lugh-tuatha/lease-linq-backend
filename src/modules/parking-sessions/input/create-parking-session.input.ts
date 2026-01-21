import { Field, InputType } from "@nestjs/graphql";
import { VehicleType } from "generated/prisma/enums";

@InputType()
export class CreateParkingSessionInput {
  @Field()
  vehicleType: VehicleType;

  @Field()
  plateNumber: string;
  }