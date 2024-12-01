/*
  Warnings:

  - You are about to drop the column `peace` on the `Cell` table. All the data in the column will be lost.
  - Added the required column `peaceId` to the `Cell` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Color" AS ENUM ('black', 'white');

-- AlterTable
ALTER TABLE "Cell" DROP COLUMN "peace",
ADD COLUMN     "peaceId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Peace" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "color" "Color" NOT NULL,
    "cellId" INTEGER NOT NULL,

    CONSTRAINT "Peace_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Peace_cellId_key" ON "Peace"("cellId");

-- AddForeignKey
ALTER TABLE "Peace" ADD CONSTRAINT "Peace_cellId_fkey" FOREIGN KEY ("cellId") REFERENCES "Cell"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
