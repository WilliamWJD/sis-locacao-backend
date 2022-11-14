/*
  Warnings:

  - Added the required column `usuarioId` to the `recibos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "recibos" ADD COLUMN     "usuarioId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "recibos" ADD CONSTRAINT "recibos_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
