import { PrismaClient } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';

const prisma = new PrismaClient();

async function main() {
    const usuario = await prisma.usuario.create({
        data: {
            nome: "Narcisio José Dias",
            dataNascimento: "1997-07-16T19:20:30.451Z",
            rg: "789456123",
            cpf: "789456123",
            profissao: "Aposentado",
            estadoCivil: "CASADO",
            genero: "MASCULINO",
            email: "narcisio.j.dias@gmail.com",
            password: "123456789",
            enderecos: {
                create: {
                    endereco: {
                        create: {
                            estado: "SP",
                            cidade: "Sumaré",
                            bairro: "Jd Minesotta",
                            cep: "13179072",
                            logradouro: "R. Denilson de oliveira",
                        },
                    },
                    numero: 519
                }
            }
        }
    })

    const inquilino = await prisma.inquilino.create({
        data: {
            nome: "Narcisio José Dias",
            dataNascimento: "1997-07-16T19:20:30.451Z",
            rg: "789456123",
            cpf: "789456123",
            profissao: "Aposentado",
            estadoCivil: "CASADO",
            genero: "MASCULINO",
            email: "narcisio.j.dias@gmail.com",
            usuarioId: usuario.id
        }
    })

    const imovel = await prisma.endereco.create({
        data: {
            estado: "SP",
            cidade: "Sumaré",
            bairro: "Jd Minesotta",
            cep: "13179072",
            logradouro: "R. Denilson de oliveira",
            imovel: {
                create: {
                    nomeImovel: "CASA 01-A",
                    descricao: "qualquer coisa",
                    usuarioId: usuario.id
                }
            }
        },
        include: {
            imovel: true
        }
    })

    console.log(imovel)

    const locacao = await prisma.locacao.create({
        data: {
            dataInicio: "2022-08-11T19:20:30.451Z",
            dataFim: "2023-08-11T19:20:30.451Z",
            tempoContrato: 12,
            valorLocacao: 550.00,
            imovelId: imovel.imovel[0].id,
            inquilinoId: inquilino.id,
            usuarioId: usuario.id
        }
    })

    await prisma.recibo.create({
        data: {
            dataInicio: "2022-08-11T19:20:30.451Z",
            dataFim: "2022-09-11T19:20:30.451Z",
            juros: 0,
            valorAgua: 20.00,
            valorLuz: 20.00,
            total: 590.00,
            totalExtenso: "Quinhentos reais",
            numeroRecibo: 1,
            locacaoId: locacao.id
        }
    })
}

main();