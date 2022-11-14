export interface ReciboEntradaDto {
    dataInicio: Date,
    dataFim: Date,
    valorAgua: number,
    valorLuz: number,
    locacaoId: string;
    juros: number;
    usuarioId: string;
    numeroRecibo: number;
    total: number;
    totalExtenso: string;
}