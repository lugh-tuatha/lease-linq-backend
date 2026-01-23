/*
  Warnings:

  - Made the column `vehicle_type` on table `parking_sessions` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "parking_sessions" ADD COLUMN     "parking_fee" DOUBLE PRECISION,
ALTER COLUMN "vehicle_type" SET NOT NULL;
