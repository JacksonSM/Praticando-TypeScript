import { Imprimivel } from '../utils/Imprimivel.js';
import { Negociacao } from './negociacao.js';
import { Comparavel } from '../interfaces/comparavel.js';

export class Negociacoes implements Imprimivel, Comparavel<Negociacoes> {
    private negociacoes: Negociacao[] = [];
    
    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
    public paraTexto(): string{
        return JSON.stringify(this.negociacoes);
    }

    public ehIgual(objeto: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(objeto.lista())
    }
}
