class NegociacaoController {

    adiciona(event) {
        //cancelando a submmissao do formulario
        event.preventDefault();


        // a ideia é que $ seja o querySelector
        //	realizando	o	bind,	$	mantém	document	como	seu	contexto this
        let $ = document.querySelector.bind(document);

        // buscando os elementos
        let inputData = $('#data');
        let inputQuantidade = $('#quantidade');
        let inputValor = $('#valor');

        console.log(inputData.value);
        console.log(parseInt(inputQuantidade.value));
        console.log(parseFloat(inputValor.value));

    }
}