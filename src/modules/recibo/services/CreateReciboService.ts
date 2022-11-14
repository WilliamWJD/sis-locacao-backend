import { Recibo } from '@prisma/client';
import valorPorExtenso from 'extenso';

import { prismaClient } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";
import { ReciboEntradaDto } from '../dtos/ReciboEntradaDto';
import { ReciboRepository } from '../repositories/ReciboRepository';

const reciboRepository = new ReciboRepository();

interface Request {
    dataInicio: Date,
    dataFim: Date,
    valorAgua: number,
    valorLuz: number,
    locacaoId: string;
    juros: number;
    usuarioId: string;
}

class CreateReciboService {
    async execute(data: Request): Promise<Recibo> {
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
        const numRec = numUltimoRecibo.length === 0 ? 1 : numUltimoRecibo[0].numeroRecibo + 1;

        // CALCULA TOTAL DO RECIBO
        const total = Number(locacao.valorLocacao) + data.valorAgua + data.valorLuz + data.juros;

        // ESCREVE TOTAL POR EXTENSO
        const totalExtenso = valorPorExtenso(total, { mode: 'currency' });

        const dataPayload = {
            ...data,
            numeroRecibo: numRec,
            total: total,
            totalExtenso: totalExtenso,
        }

        return reciboRepository.salvaRecibo(dataPayload);
    }
}

export { CreateReciboService }