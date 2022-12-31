import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes>{

     template(model: Negociacoes): string{
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(negocicao => {
                    return `
                     <tr>
                        <td>${this.formatar(negocicao.data)}</td>
                        <td>${negocicao._quantidade}</td>
                        <td>${negocicao._valor}</td>
                     </tr>
                    `;
                }).join('')}
            </tbody>
        </table>    
        `;
    }
    private formatar(data: Date): string{
        return new Intl.DateTimeFormat()
        .format(data);
    }
}