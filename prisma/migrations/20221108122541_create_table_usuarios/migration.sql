-- CreateTable
CREATE TABLE "usuarios" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "dataNascimento" TIMESTAMP(3) NOT NULL,
    "rg" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "profissao" TEXT NOT NULL,
    "estadoCivil" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_rg_key" ON "usuarios"("rg");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_cpf_key" ON "usuarios"("cpf");
