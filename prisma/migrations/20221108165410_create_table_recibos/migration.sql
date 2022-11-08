-- CreateTable
CREATE TABLE "Recibo" (
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

    CONSTRAINT "Recibo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Recibo" ADD CONSTRAINT "Recibo_locacaoId_fkey" FOREIGN KEY ("locacaoId") REFERENCES "locacoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
