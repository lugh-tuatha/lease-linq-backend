/*
  Warnings:

  - You are about to drop the `Organizations` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `occurance_date` to the `parking_sessions` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "DiscountType" AS ENUM ('NONE', 'PWD_SENIOR', 'SERVICE_VEHICLE');

-- DropForeignKey
ALTER TABLE "parking_sessions" DROP CONSTRAINT "parking_sessions_organization_id_fkey";

-- AlterTable
ALTER TABLE "parking_sessions" ADD COLUMN     "discount_amount" DOUBLE PRECISION,
ADD COLUMN     "discount_id_number" TEXT,
ADD COLUMN     "discount_type" "DiscountType" NOT NULL DEFAULT 'NONE',
ADD COLUMN     "occurance_date" TEXT NOT NULL;

-- DropTable
DROP TABLE "Organizations";

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "organizations" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "organizations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- AddForeignKey
ALTER TABLE "parking_sessions" ADD CONSTRAINT "parking_sessions_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organizations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
