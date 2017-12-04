export class Negociacoes {

    constructor() {
        this._negociacoes = [];
        Object.freeze(this);
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }


    paraArray() {
        return [].concat(this._negociacoes); // em vez de passar a referencia, passo apenas uma copia, para que um dev desavisado não apague os dados
    }

    get volumeTotal() {

        /* Maneira tradicional para fazer uma soma total        
        let total = 0;
        for (let i = 0; i < this._negociacoes.length; i++) {
            total += this._negociacoes[i].volume;
        }

        return total;
        */
        // agora com arrow functions, sem uso de bloco
        return this._negociacoes.reduce((total, negociacao) =>
            total + negociacao.volume, 0);


    }

    esvazia() {
        this._negociacoes.length = 0;
    }

}