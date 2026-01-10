import { Field, Float, ObjectType } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';

import { VehicleType } from 'src/common/enums/vehicle-type.enum';

registerEnumType(VehicleType, {
  name: 'VehicleType'
});

@ObjectType()
export class ParkingSession {
  @Field()
  id: string;
  
  @Field(() => VehicleType, { nullable: true })
  vehicleType?: VehicleType;
  
  @Field({ nullable: true })
  vehicleModel?: string;
  
  @Field()
  plateNumber: string;

  @Field()
  enteredAt: Date;

  @Field(() => Float, { nullable: true })
  exitedAt?: Date;

  @Field({ nullable: true })
  parkingCredits?: number;

  @Field({ nullable: true })
  guardRemarks?: string;
}