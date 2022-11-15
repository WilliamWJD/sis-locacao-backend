import { Router } from 'express';

import { CreateReciboController } from '../controllers/CreateReciboController';
import { ExcluiReciboController } from '../controllers/ExcluiReciboController';

const ReciboRoutes = Router();

const createReciboController = new CreateReciboController();
const excluiReciboController = new ExcluiReciboController();

ReciboRoutes.post('/', createReciboController.handle);
ReciboRoutes.delete('/:id', excluiReciboController.handle);

export { ReciboRoutes }