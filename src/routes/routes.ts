import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ReciboRoutes } from '../modules/recibo/routes/ReciboRoutes';
import { UsuarioRoutes } from '../modules/usuario/routes/UsuarioRoutes';

const routes = Router();

routes.use('/usuario', UsuarioRoutes);

routes.use(ensureAuthenticated);

routes.use('/recibos', ReciboRoutes);

export { routes }