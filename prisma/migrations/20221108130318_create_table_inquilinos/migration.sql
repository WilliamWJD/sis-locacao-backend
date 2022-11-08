-- CreateTable
CREATE TABLE "inquilinos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "dataNascimento" TIMESTAMP(3) NOT NULL,
    "rg" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "profissao" TEXT NOT NULL,
    "estadoCivil" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "inquilinos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "inquilinos_rg_key" ON "inquilinos"("rg");

-- CreateIndex
CREATE UNIQUE INDEX "inquilinos_cpf_key" ON "inquilinos"("cpf");
