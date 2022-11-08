import { hash, compare } from "bcryptjs";

class BcryptHashGenerator {
    async hashGenerator(senha: string): Promise<string> {
        return await hash(senha, 8);
    }

    async compare(senha: string, payload: string): Promise<boolean> {
        return await compare(senha, payload);
    }
}

export { BcryptHashGenerator }