import { AppError } from "../../../errors/AppError";
import { ReciboRepository } from "../repositories/ReciboRepository";

const reciboRepository = new ReciboRepository();

interface Request {
    reciboId: string;
}

class ExcluirReciboService {
    async execute({ reciboId }: Request): Promise<void> {
        const recibo = await reciboRepository.buscarReciboPoId(reciboId);

        if (!recibo) {
            throw new AppError("Recibo não encontrado", 404);
        }

        await reciboRepository.excluirReciboPorId(recibo.id)
    }
}

export { ExcluirReciboService }