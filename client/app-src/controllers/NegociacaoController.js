import { Negociacoes, Negociacao } from '../domain';
import { NegociacoesView, MensagemView, Mensagem, DateConverter } from '../ui';
import { getNegociacaoDao, Bind, getExceptionMessage, debounce, controller, bindEvent } from '../util';

@controller('#data', '#quantidade', '#valor')
export class NegociacaoController {

    constructor(_inputData, _inputQuantidade, _inputValor) {


        Object.assign(this, { _inputData, _inputQuantidade, _inputValor })

        this._negociacoes = new Bind(
            new Negociacoes(),
            new NegociacoesView('#negociacoes'),
            'adiciona', 'esvazia');

        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView('#mensagemView'),
            'texto'
        );


        this._init();


    }

    async _init() {
        //Lembre-se de que só podemos utilizar a sintaxe await para uma Promise dentro de uma função async; caso contrário, receberemos a mensagem de erro "await is a reserved word".
        try {
            const dao = await getNegociacaoDao();
            const negociacoes = await dao.listaTodos();
            negociacoes.forEach(negociacao => this._negociacoes.adiciona(negociacao));
        } catch (err) {
            this._mensagem.texto = getExceptionMessage(err);
        }

    }
    @bindEvent('submit', '.form')
    @debounce()
    async adiciona(event) {

        try {

            const negociacao = this._criaNegociacao();
            const dao = await getNegociacaoDao();
            await dao.adiciona(negociacao);
            this._negociacoes.adiciona(negociacao);
            this._mensagem.texto = 'Negociação adicionada com sucesso!';
            this._limpaFormulario();

        } catch (err) {
            this._mensagem.texto = getExceptionMessage(err);
        }


    }


    _limpaFormulario() {

        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0
        this._inputData.focus();

    }

    _criaNegociacao() {
        return new Negociacao(
            DateConverter.paraData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );

    }

    @bindEvent('click', '#botao-apaga')
    async apaga() {

        try {
            const dao = await getNegociacaoDao();
            await dao.apagaTodos();
            this._negociacoes.esvazia();
            this._mensagem.texto = 'Negociações apagadas com sucesso';
        } catch (err) {
            this._mensagem.texto = getExceptionMessage(err);
        }

    }

    @bindEvent('click', '#botao-importa')
    @debounce(1500)
    async importaNegociacoes() {

        try {

            // Lazy loading do módulo. 
            // Importaremos { NegociacaoService } do módulo.

            const { NegociacaoService } = await
            import ('../domain/negociacao/NegociacaoService');

            // criando uma nova instância da classe
            const service = new NegociacaoService();

            // MUDAMOS DE this._service para service

            const negociacoes = await service.obtemNegociacoesDoPeriodo();
            console.log(negociacoes);
            negociacoes.filter(novaNegociacao =>
                    !this._negociacoes.paraArray().some(negociacaoExistente =>
                        novaNegociacao.equals(negociacaoExistente)))
                .forEach(negociacao => this._negociacoes.adiciona(negociacao));
            this._mensagem.texto = 'Negociações do período importadas com sucesso';
        } catch (err) {
            this._mensagem.texto = getExceptionMessage(err);
        }

    }




}