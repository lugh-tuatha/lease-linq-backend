import { Field, InputType } from "@nestjs/graphql";
import { DiscountType, VehicleType } from "generated/prisma/enums";

@InputType()
export class CreateParkingSessionInput {
  @Field()
  vehicleType: VehicleType;

  @Field()
  plateNumber: string;

  // @Field()
  // discountType: DiscountType;

  // @Field()
  // discountHolderName: string;

  // @Field()
  // discountIdNumber: string;
}