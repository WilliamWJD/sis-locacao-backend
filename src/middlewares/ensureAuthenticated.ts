import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { JwtConfig } from "../config/JwtConfig";
import { AppError } from "../errors/AppError";

interface TokenPayload {
    iat: number;
    exp: number;
    sub: string;
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token não fornecido", 401);
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = verify(token, JwtConfig.secret);
        const { sub } = decoded as TokenPayload

        req.user = {
            id: sub
        }

        return next();
    } catch (error) {
        throw new AppError("Token Inválido", 401);
    }
}