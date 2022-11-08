import { Router } from 'express';
import { UsuarioRoutes } from '../modules/usuario/routes/UsuarioRoutes';

const routes = Router();

routes.use('/usuario', UsuarioRoutes);

export { routes }