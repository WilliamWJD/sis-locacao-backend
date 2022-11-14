import { Request, Response } from "express";
import { CreateReciboService } from "../services/CreateReciboService";

const createReciboService = new CreateReciboService();

class CreateReciboController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {
            dataInicio,
            dataFim,
            valorAgua,
            valorLuz,
            juros,
            locacaoId
        } = req.body;

        const recibo = await createReciboService.execute({
            dataInicio,
            dataFim,
            valorAgua,
            valorLuz,
            locacaoId,
            juros,
            usuarioId: req.user.id
        });

        return res.status(201).json(recibo);
    }
}

export { CreateReciboController }