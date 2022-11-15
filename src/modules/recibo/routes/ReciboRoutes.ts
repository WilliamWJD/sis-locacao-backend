import { Router } from 'express';

import { CreateReciboController } from '../controllers/CreateReciboController';
import { ExcluiReciboController } from '../controllers/ExcluiReciboController';
import { BuscarReciboPorIdController } from '../controllers/BuscarReciboPorIdController';

const ReciboRoutes = Router();

const createReciboController = new CreateReciboController();
const excluiReciboController = new ExcluiReciboController();
const buscarReciboPorIdController = new BuscarReciboPorIdController();

ReciboRoutes.post('/', createReciboController.handle);
ReciboRoutes.delete('/:id', excluiReciboController.handle);
ReciboRoutes.get('/:id', buscarReciboPorIdController.handle);

export { ReciboRoutes }