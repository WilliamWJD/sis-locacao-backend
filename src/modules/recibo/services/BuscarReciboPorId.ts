import { AppError } from "../../../errors/AppError";
import { ReciboSaidaDto } from "../dtos/ReciboSaidaDto";
import { ReciboRepository } from "../repositories/ReciboRepository";

const reciboRepository = new ReciboRepository();

interface Request {
    reciboId: string;
}

class BuscarReciboPorId {
    async execute({ reciboId }: Request): Promise<ReciboSaidaDto> {
        const recibo = await reciboRepository.buscarReciboPoId(reciboId);

        if (!recibo) {
            throw new AppError("Recibo não encontrado", 404);
        }

        return recibo;
    }
}

export { BuscarReciboPorId }