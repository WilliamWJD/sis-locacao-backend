import { prisma, Recibo } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";
import { ReciboEntradaDto } from "../dtos/ReciboEntradaDto";

class ReciboRepository {
    async salvaRecibo(data: ReciboEntradaDto): Promise<Recibo> {
        return await prismaClient.recibo.create({
            data
        })
    }

    async buscarReciboPoId(reciboId: string): Promise<Recibo | null> {
        return await prismaClient.recibo.findFirst({
            where: {
                id: reciboId
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