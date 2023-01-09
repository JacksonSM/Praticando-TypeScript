export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    paraTexto() {
        return JSON.stringify(this.negociacoes);
    }
    ehIgual(objeto) {
        return JSON.stringify(this.negociacoes) === JSON.stringify(objeto.lista());
    }
}
//# sourceMappingURL=negociacoes.js.map