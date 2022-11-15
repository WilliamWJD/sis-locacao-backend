import { Request, Response } from "express";
import { ExcluirReciboService } from "../services/ExcluiReciboService";

const excluirReciboService = new ExcluirReciboService();

class ExcluiReciboController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        await excluirReciboService.execute({
            reciboId: id
        });

        return res.status(201).send();
    }
}

export { ExcluiReciboController }