/*
  Warnings:

  - You are about to drop the `ParkingSession` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ParkingState" AS ENUM ('ACTIVE', 'EXITED');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('UNPAID', 'PAID', 'OVERDUE');

-- DropTable
DROP TABLE "ParkingSession";

-- CreateTable
CREATE TABLE "parking_sessions" (
    "id" TEXT NOT NULL,
    "vehicle_type" "VehicleType",
    "vehicle_model" TEXT,
    "plate_number" TEXT NOT NULL,
    "entered_at" TIMESTAMP(3) NOT NULL,
    "exited_at" TIMESTAMP(3),
    "parking_credits" DOUBLE PRECISION,
    "duration_minutes" INTEGER,
    "parking_state" "ParkingState" NOT NULL DEFAULT 'ACTIVE',
    "payment_status" "PaymentStatus" NOT NULL DEFAULT 'UNPAID',
    "guard_remarks" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "parking_sessions_pkey" PRIMARY KEY ("id")
);
