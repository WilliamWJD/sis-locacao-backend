import { prisma, Recibo } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";
import { ReciboEntradaDto } from "../dtos/ReciboEntradaDto";
import { ReciboSaidaDto } from "../dtos/ReciboSaidaDto";

class ReciboRepository {
    async salvaRecibo(data: ReciboEntradaDto): Promise<Recibo> {
        return await prismaClient.recibo.create({
            data
        })
    }

    async buscarReciboPoId(reciboId: string): Promise<ReciboSaidaDto | null> {
        return await prismaClient.recibo.findFirst({
            where: {
                id: reciboId
            },
            select: {
                id: true,
                numeroRecibo: true,
                dataInicio: true,
                dataFim: true,
                valorAgua: true,
                valorLuz: true,
                total: true,
                totalExtenso: true,
                juros: true,
                locacao: {
                    select: {
                        id: true,
                        tempoContrato: true,
                        inquilino: {
                            select: {
                                id: true,
                                nome: true,
                                cpf: true
                            }
                        },
                        imovel: {
                            select: {
                                id: true,
                                nomeImovel: true
                            }
                        }
                    }
                }
            }
        })
    }

    async excluirReciboPorId(reciboId: string): Promise<void> {
        await prismaClient.recibo.delete({
            where: {
                id: reciboId
            }
        })
    }
}

export { ReciboRepository }