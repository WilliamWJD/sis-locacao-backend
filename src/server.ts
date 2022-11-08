import express, { NextFunction, Request, Response } from "express";
import { AppError } from './errors/AppError';
import 'express-async-errors';

import { routes } from "./routes/routes";

const app = express();
app.use(express.json());
app.use(routes);

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            message: err.message,
            status: err.statusCode,
        });
    }

    console.error(err);

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error',
    });
});

app.listen(3333, () => {
    console.log('servidor online');
})