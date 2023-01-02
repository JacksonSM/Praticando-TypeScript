import { NegociacaoController } from "./controllers/negociacao-controller.js";   
import { NegociacoesView } from "./views/negociacoes-view.js";

const controller = new NegociacaoController();
const form = document.querySelector('.form');

if(form){
    console.log("chegou aqui");
    form.addEventListener('submit', event => {
        event.preventDefault(); 
        controller.adiciona();
    });
}else{
    throw new Error("Não foi possivel encontrar o form");
}

