import { Router } from 'express';
import { AutenticacaoController } from '../controllers/AutenticacaoController';

const UsuarioRoutes = Router();

const autenticacaoController = new AutenticacaoController();

UsuarioRoutes.post('/login', autenticacaoController.handle);

export { UsuarioRoutes }