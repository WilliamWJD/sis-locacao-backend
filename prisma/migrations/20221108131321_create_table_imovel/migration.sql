/*
  Warnings:

  - Added the required column `usuarioId` to the `inquilinos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "inquilinos" ADD COLUMN     "usuarioId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Imovel" (
    "id" TEXT NOT NULL,
    "nomeImovel" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usuarioId" TEXT NOT NULL,
    "enderecoId" TEXT NOT NULL,

    CONSTRAINT "Imovel_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "inquilinos" ADD CONSTRAINT "inquilinos_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Imovel" ADD CONSTRAINT "Imovel_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Imovel" ADD CONSTRAINT "Imovel_enderecoId_fkey" FOREIGN KEY ("enderecoId") REFERENCES "enderecos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
