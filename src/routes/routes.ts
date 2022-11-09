import { Router } from 'express';

import { ReciboRoutes } from '../modules/recibo/routes/UsuarioRoutes';
import { UsuarioRoutes } from '../modules/usuario/routes/UsuarioRoutes';

const routes = Router();

routes.use('/usuario', UsuarioRoutes);
routes.use('/recibos', ReciboRoutes);

export { routes }