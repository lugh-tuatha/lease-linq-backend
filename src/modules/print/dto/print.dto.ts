import { IsDateString, IsEnum, IsIn, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from "class-validator";
import { PaymentStatus } from "generated/prisma/enums";

export class PrintExitReceiptDTO {
  @IsNotEmpty()
  @IsString()
  companyName: string;

  @IsNotEmpty()
  @IsString()
  companyAddress: string;

  @IsNotEmpty()
  @IsString()
  vehicleType: string;

  @IsOptional()
  @IsString()
  vehicleModel: string;

  @IsNotEmpty()
  @IsString()
  plateNumber: string;

  @IsNotEmpty()
  @IsDateString()
  date: Date;

  @IsNotEmpty()
  @IsDateString()
  enteredAt: Date;

  @IsNotEmpty()
  @IsDateString()
  exitedAt: Date;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  durationMinutes: number;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  parkingFee: number;

  @IsNotEmpty()
  @IsEnum(PaymentStatus)
  paymentStatus: PaymentStatus;
}