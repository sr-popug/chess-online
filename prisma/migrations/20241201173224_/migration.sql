/*
  Warnings:

  - You are about to drop the `Cell` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Cell" DROP CONSTRAINT "Cell_gameId_fkey";

-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "field" JSONB;

-- DropTable
DROP TABLE "Cell";
