import { Router } from 'express';

import { CreateReciboController } from '../controllers/CreateReciboController';

const ReciboRoutes = Router();

const createReciboController = new CreateReciboController();

ReciboRoutes.post('/', createReciboController.handle);

export { ReciboRoutes }