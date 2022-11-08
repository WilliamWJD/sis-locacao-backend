import { Request, Response } from "express";
import { AutenticacaoService } from "../services/AutenticacaoService";

const autenticacaoService = new AutenticacaoService();

class AutenticacaoController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { email, senha } = req.body;
        const jwtResponse = await autenticacaoService.execute({ email, senha });
        return res.status(201).json(jwtResponse);
    }
}

export { AutenticacaoController }