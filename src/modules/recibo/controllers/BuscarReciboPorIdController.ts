import { Request, Response } from "express";
import { BuscarReciboPorId } from "../services/BuscarReciboPorId";

const buscarReciboPorId = new BuscarReciboPorId();

class BuscarReciboPorIdController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const recibo = await buscarReciboPorId.execute({
            reciboId: id
        });

        return res.status(201).json(recibo);
    }
}

export { BuscarReciboPorIdController }