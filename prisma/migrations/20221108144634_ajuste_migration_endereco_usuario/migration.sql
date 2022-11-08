/*
  Warnings:

  - A unique constraint covering the columns `[usuarioId,enderecoId]` on the table `enderecos_usuarios` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "enderecos_usuarios_usuarioId_enderecoId_key" ON "enderecos_usuarios"("usuarioId", "enderecoId");
