class Negociacoes {

    constructor() {
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }


    paraArray() {
        return [].concat(this._negociacoes); // em vez de passar a referencia, passo apenas uma copia, para que um dev desavisado não apague os dados
    }



}