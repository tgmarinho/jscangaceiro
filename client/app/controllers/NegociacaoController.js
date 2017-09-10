class NegociacaoController {

    constructor() {

        // a ideia é que $ seja o querySelector
        //	realizando	o	bind,	$	mantém	document	como	seu	contexto this
        let $ = document.querySelector.bind(document);

        // buscando os elementos
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');



    }


    adiciona(event) {
        //cancelando a submmissao do formulario
        event.preventDefault();

        // Pega a string data e converte em Date
        let data = new Date(...this._inputData.value
            .split('-')
            .map((item, indice) => item - indice % 2)
        );

        let negociacao = new Negociacao(data,
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );

        console.log(negociacao);
    }
}