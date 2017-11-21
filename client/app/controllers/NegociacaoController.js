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

        // Pega a string data e converte em Date
        let data = DateConverter.paraData(this._inputData.value);

        let negociacao = new Negociacao(data,
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );

        // Convertendo a data para Dia/Mes/Ano
        let diaMesAno = DateConverter.paraTexto(negociacao.data);

        console.log(diaMesAno);
    }
}