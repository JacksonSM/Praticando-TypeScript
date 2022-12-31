import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    inputData;
    inputQuantidade;
    InputValor;
    negociacoes = new Negociacoes();
    negociacoesView = new NegociacoesView('#negociacoesView');
    mensagemView = new MensagemView("#mensagemView");
    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.InputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update('Apenas negociaçoes em dias úteis são aceitas.');
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.atualizaView();
        this.limparFomulario();
    }
    criaNegociacao() {
        const negociacao = new Negociacao(this.inputData.valueAsDate, this.inputQuantidade.valueAsNumber, parseFloat(this.InputValor.value));
        return negociacao;
    }
    limparFomulario() {
        this.inputData.value = '';
        this.InputValor.value = '';
        this.inputQuantidade.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação feita com sucesso!');
    }
    ehDiaUtil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }
}
