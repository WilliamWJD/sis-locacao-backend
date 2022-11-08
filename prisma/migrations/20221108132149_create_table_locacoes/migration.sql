/*
  Warnings:

  - You are about to drop the `Imovel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Imovel" DROP CONSTRAINT "Imovel_enderecoId_fkey";

-- DropForeignKey
ALTER TABLE "Imovel" DROP CONSTRAINT "Imovel_usuarioId_fkey";

-- DropTable
DROP TABLE "Imovel";

-- CreateTable
CREATE TABLE "imoveis" (
    "id" TEXT NOT NULL,
    "nomeImovel" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usuarioId" TEXT NOT NULL,
    "enderecoId" TEXT NOT NULL,

    CONSTRAINT "imoveis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "locacoes" (
    "id" TEXT NOT NULL,
    "tempoContrato" INTEGER NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "dataFim" TIMESTAMP(3) NOT NULL,
    "valorLocacao" DECIMAL(65,30) NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usuarioId" TEXT NOT NULL,
    "inquilinoId" TEXT NOT NULL,
    "imovelId" TEXT NOT NULL,

    CONSTRAINT "locacoes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "imoveis" ADD CONSTRAINT "imoveis_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "imoveis" ADD CONSTRAINT "imoveis_enderecoId_fkey" FOREIGN KEY ("enderecoId") REFERENCES "enderecos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "locacoes" ADD CONSTRAINT "locacoes_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "locacoes" ADD CONSTRAINT "locacoes_inquilinoId_fkey" FOREIGN KEY ("inquilinoId") REFERENCES "inquilinos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "locacoes" ADD CONSTRAINT "locacoes_imovelId_fkey" FOREIGN KEY ("imovelId") REFERENCES "imoveis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
