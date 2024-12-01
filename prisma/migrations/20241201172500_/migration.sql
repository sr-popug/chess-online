/*
  Warnings:

  - You are about to drop the column `peaceId` on the `Cell` table. All the data in the column will be lost.
  - You are about to drop the `Peace` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `peace` to the `Cell` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Peace" DROP CONSTRAINT "Peace_cellId_fkey";

-- AlterTable
ALTER TABLE "Cell" DROP COLUMN "peaceId",
ADD COLUMN     "peace" TEXT NOT NULL;

-- DropTable
DROP TABLE "Peace";
