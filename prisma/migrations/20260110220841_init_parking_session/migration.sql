-- CreateEnum
CREATE TYPE "VehicleType" AS ENUM ('CAR', 'MOTOR', 'VAN');

-- CreateTable
CREATE TABLE "ParkingSession" (
    "id" TEXT NOT NULL,
    "vehicle_type" "VehicleType" NOT NULL,
    "vehicle_model" TEXT NOT NULL,
    "plate_number" TEXT NOT NULL,
    "enteredAt" TIMESTAMP(3) NOT NULL,
    "exitedAt" TIMESTAMP(3),
    "parkingCredits" DOUBLE PRECISION NOT NULL,
    "guardRemarks" TEXT,

    CONSTRAINT "ParkingSession_pkey" PRIMARY KEY ("id")
);
