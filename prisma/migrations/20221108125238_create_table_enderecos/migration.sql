/*
  Warnings:

  - You are about to drop the `Endereco` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Endereco";

-- CreateTable
CREATE TABLE "enderecos" (
    "id" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "logradouro" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "enderecos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "enderecos_usuarios" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "enderecoId" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,

    CONSTRAINT "enderecos_usuarios_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "enderecos_usuarios" ADD CONSTRAINT "enderecos_usuarios_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "enderecos_usuarios" ADD CONSTRAINT "enderecos_usuarios_enderecoId_fkey" FOREIGN KEY ("enderecoId") REFERENCES "enderecos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
