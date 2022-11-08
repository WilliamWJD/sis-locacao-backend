import { sign } from 'jsonwebtoken';

import { JwtConfig } from '../../../config/JwtConfig';
import { BcryptHashGenerator } from "../providers/BcryptHashGenerator";
import { UsuarioRepository } from '../repositories/UsuarioRepository';

const bcryptHashGenerator = new BcryptHashGenerator();
const usuarioRepository = new UsuarioRepository();

interface Request {
    email: string;
    senha: string;
}

interface AuthResponse {
    user: {
        id: string;
        nome: string;
        email: string;
    },
    token: string
}

class AutenticacaoService {
    async execute({ email, senha }: Request): Promise<AuthResponse> {
        // recupera dados de usuario
        const usuario = await usuarioRepository.buscarUsuarioPorEmail(email);

        if (!usuario) {
            throw new Error("Usuário ou senha inválido");
        }

        // compara senha com o hash do banco
        if (!bcryptHashGenerator.compare(senha, usuario.password)) {
            throw new Error("Usuário ou senha inválido");
        }

        // gera token jwt
        const token = sign({ id: usuario.id }, JwtConfig.secret, {
            subject: usuario.id,
            expiresIn: JwtConfig.expiresIn
        })

        const data = {
            user: {
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email
            },
            token
        }

        return data;

    }
}

export { AutenticacaoService }