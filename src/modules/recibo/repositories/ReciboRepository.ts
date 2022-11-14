import { Recibo } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";
import { ReciboEntradaDto } from "../dtos/ReciboEntradaDto";

class ReciboRepository {
    async salvaRecibo(data: ReciboEntradaDto): Promise<Recibo> {
        return await prismaClient.recibo.create({
            data
        })
    }
}

export { ReciboRepository }