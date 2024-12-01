/*
  Warnings:

  - You are about to drop the column `field` on the `Game` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "field",
ALTER COLUMN "isDraw" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Cell" (
    "id" SERIAL NOT NULL,
    "peace" TEXT,
    "gameId" TEXT NOT NULL,

    CONSTRAINT "Cell_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cell" ADD CONSTRAINT "Cell_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
