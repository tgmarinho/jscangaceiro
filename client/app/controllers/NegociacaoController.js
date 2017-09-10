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

        let negociacao = new Negociacao(
            this._inputData.value,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);

    }
}