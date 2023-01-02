import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController{
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private InputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView', true);
    private mensagemView = new MensagemView('#mensagemView', false);

    constructor(){
        this.inputData = <HTMLInputElement> document.querySelector('#data');
        this.inputQuantidade = <HTMLInputElement> document.querySelector('#quantidade');
        this.InputValor = <HTMLInputElement> document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }

    adiciona(): void{
        const negociacao = this.criaNegociacao();  
        if(!this.ehDiaUtil(negociacao.data)){
            this.mensagemView.update('Apenas negociaçoes em dias úteis são aceitas.');
            return;
        }

        this.negociacoes.adiciona(negociacao);
        this.atualizaView();
        this.limparFomulario();
    }

    criaNegociacao(): Negociacao{
        const negociacao = new Negociacao(
            this.inputData.valueAsDate as Date,
            this.inputQuantidade.valueAsNumber,
            parseFloat(this.InputValor.value)
        );
        return negociacao;
    }

    limparFomulario(): void{
        this.inputData.value = '';
        this.InputValor.value = '';
        this.inputQuantidade.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação feita com sucesso!');
    }

    private ehDiaUtil(data: Date): boolean{
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }
}