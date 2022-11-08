import { prismaClient } from "../../../database/prismaClient";

class UsuarioRepository {
    async buscarUsuarioPorEmail(email: string) {
        return await prismaClient.usuario.findFirst({
            where: {
                email
            }
        })
    }
}

export { UsuarioRepository }