/*
  Warnings:

  - The values [SERVICE_VEHICLE] on the enum `DiscountType` will be removed. If these variants are still used in the database, this will fail.
  - The values [VEHICLE] on the enum `VehicleType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "DiscountType_new" AS ENUM ('NONE', 'PWD_SENIOR', 'DELIVERY_VEHICLE');
ALTER TABLE "public"."parking_sessions" ALTER COLUMN "discount_type" DROP DEFAULT;
ALTER TABLE "parking_sessions" ALTER COLUMN "discount_type" TYPE "DiscountType_new" USING ("discount_type"::text::"DiscountType_new");
ALTER TYPE "DiscountType" RENAME TO "DiscountType_old";
ALTER TYPE "DiscountType_new" RENAME TO "DiscountType";
DROP TYPE "public"."DiscountType_old";
ALTER TABLE "parking_sessions" ALTER COLUMN "discount_type" SET DEFAULT 'NONE';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "VehicleType_new" AS ENUM ('CAR', 'MOTORCYCLE', 'TRUCK');
ALTER TABLE "parking_sessions" ALTER COLUMN "vehicle_type" TYPE "VehicleType_new" USING ("vehicle_type"::text::"VehicleType_new");
ALTER TYPE "VehicleType" RENAME TO "VehicleType_old";
ALTER TYPE "VehicleType_new" RENAME TO "VehicleType";
DROP TYPE "public"."VehicleType_old";
COMMIT;

-- AlterTable
ALTER TABLE "parking_sessions" ADD COLUMN     "discount_holder_name" TEXT,
ADD COLUMN     "include_in_bir_report" BOOLEAN NOT NULL DEFAULT false;
