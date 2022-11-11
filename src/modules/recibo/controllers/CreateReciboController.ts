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
            locacaoId,
            valorJuros
        } = req.body;

        await createReciboService.execute({
            dataInicio,
            dataFim,
            valorAgua,
            valorLuz,
            locacaoId,
            valorJuros,
            userId: req.user.id
        });

        return res.send("ok");
    }
}

export { CreateReciboController }