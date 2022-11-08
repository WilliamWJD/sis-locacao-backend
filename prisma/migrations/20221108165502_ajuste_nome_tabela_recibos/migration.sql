/*
  Warnings:

  - You are about to drop the `Recibo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Recibo" DROP CONSTRAINT "Recibo_locacaoId_fkey";

-- DropTable
DROP TABLE "Recibo";

-- CreateTable
CREATE TABLE "recibos" (
    "id" TEXT NOT NULL,
    "numeroRecibo" INTEGER NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "dataFim" TIMESTAMP(3) NOT NULL,
    "valorAgua" DECIMAL(65,30) NOT NULL,
    "valorLuz" DECIMAL(65,30) NOT NULL,
    "Juros" DECIMAL(65,30) NOT NULL,
    "total" DECIMAL(65,30) NOT NULL,
    "totalExtenso" TEXT NOT NULL,
    "locacaoId" TEXT NOT NULL,

    CONSTRAINT "recibos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "recibos" ADD CONSTRAINT "recibos_locacaoId_fkey" FOREIGN KEY ("locacaoId") REFERENCES "locacoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
