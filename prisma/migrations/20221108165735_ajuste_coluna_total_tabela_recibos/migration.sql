/*
  Warnings:

  - You are about to drop the column `Juros` on the `recibos` table. All the data in the column will be lost.
  - Added the required column `juros` to the `recibos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "recibos" DROP COLUMN "Juros",
ADD COLUMN     "juros" DECIMAL(65,30) NOT NULL;
