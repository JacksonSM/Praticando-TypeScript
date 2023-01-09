import { Imprimivel } from "./Imprimivel.js";

export function imprimir(...objetos: Imprimivel[]){
    for(let obejto of objetos){
        console.log(obejto.paraTexto());
    }
}