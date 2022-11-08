-- CreateTable
CREATE TABLE "Endereco" (
    "id" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "logradouro" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Endereco_pkey" PRIMARY KEY ("id")
);
