import valorPorExtenso from 'extenso';

import { prismaClient } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";

interface Request {
    dataInicio: Date,
    dataFim: Date,
    valorAgua: number,
    valorLuz: number,
    locacaoId: string;
    valorJuros: number;
    userId: string;
}

class CreateReciboService {
    async execute(data: Request): Promise<void> {
        // RECUPERA DADOS DA LOCAÇÃO
        const locacao = await prismaClient.locacao.findFirst({
            where: {
                id: data.locacaoId
            },
        })

        if (!locacao) {
            throw new AppError("Locação não encontrada", 401)
        }

        //RECUPERA ULTIMO RECIBO GERADO
        const numUltimoRecibo = await prismaClient.recibo.findMany({
            where: {
                locacaoId: locacao.id
            },
            orderBy: {
                numeroRecibo: 'desc'
            }
        })

        // INCREMENTE NUMERO DE RECIBO
        const numRecibo = numUltimoRecibo[0].numeroRecibo + 1;

        // CALCULA TOTAL DO RECIBO
        const total = Number(locacao.valorLocacao) + data.valorAgua + data.valorLuz + data.valorJuros;

        // ESCREVE TOTAL POR EXTENSO
        const totalExtenso = valorPorExtenso(total, { mode: 'currency' });

        const dataPayload = {
            ...data,
            numRecibo,
            total,
            totalExtenso
        }

        console.log(dataPayload);
    }
}

export { CreateReciboService }