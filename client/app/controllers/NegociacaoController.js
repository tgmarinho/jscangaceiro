class NegociacaoController {

    constructor() {


        const $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        // estrategia de atualizacao da View
        /*
Um teste demonstra que nosso código funcionou, sendo muito menos verboso do que o anterior. Como isso é possível? Isto ocorre porque a arrow function não é apenas uma maneira sucinta de escrevermos uma função, ela também tem uma característica peculiar: o escopo de seu this é léxico (estático) em vez de dinâmico.

O this de uma arrow function obtém seu valor do "código ao redor", mantendo esse valor independente do lugar onde é chamado. É por isso que o this da função da armadilha passada aponta para a instância de NegociacaoController.

        */
        this._negociacoes = new Negociacoes(model => {
            console.log(this);
            this._negociacoesView.update(model);
        });



        this._negociacoesView = new NegociacoesView('#negociacoes');
        this._negociacoesView.update(this._negociacoes);
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView('#mensagemView');
        this._mensagemView.update(this._mensagem);

    }


    adiciona(event) {

        event.preventDefault();
        this._negociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = 'Negociação adicionada com sucesso!';
        this._negociacoesView.update(this._negociacoes);
        this._limpaFormulario();
    }


    _limpaFormulario() {

        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0
        this._inputData.focus();

    }

    _criaNegociacao() {
        return new Negociacao(DateConverter.paraData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value));

    }

    apaga() {
        this._negociacoes.esvazia();
        this._negociacoesView.update(this._negociacoes);
        this._mensagem.texto = 'Negociações apagadas com sucesso';
    }


}