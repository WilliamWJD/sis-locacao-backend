import { Prisma } from "@prisma/client";

export interface ReciboSaidaDto {
    id: string;
    numeroRecibo: number;
    dataInicio: Date;
    dataFim: Date;
    valorAgua: Prisma.Decimal;
    valorLuz: Prisma.Decimal;
    total: Prisma.Decimal;
    totalExtenso: string;
    juros: Prisma.Decimal;
    locacao: {
        id: string;
        tempoContrato: number;
        inquilino: {
            id: string;
            nome: string;
            cpf: string;
        },
        imovel: {
            id: string;
            nomeImovel: string;
        }
    }
}