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

        console.log(this._inputData.value);
        console.log(parseInt(this._inputQuantidade.value));
        console.log(parseFloat(this._inputValor.value));

    }
}