class NegociacaoService {


    constructor() {
        this._http = new HttpService();
    }
    obterNegociacoesDaSemana() {

        return this._http
            .get('negociacoes/semana')
            .then(
                dados => {
                    const negociacoes = dados.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));

                    return negociacoes;
                },
                err => {
                    throw new Error('Não foi possível obter as negociações');
                }
            );
    }

    obtemNegociacoesDaSemanaAnterior() {

        return this._http
            .get('negociacoes/anterior')
            .then(
                dados => {
                    const negociacoes = dados.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));

                    return negociacoes;
                },
                err => {
                    throw new Error('Não foi possível obter as negociações da semana anterior');
                }
            );
    }

    obtemNegociacoesDaSemanaRetrasada() {

        return this._http
            .get('negociacoes/retrasada')
            .then(
                dados => {

                    const negociacoes = dados.map(objeto =>
                        new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));

                    return negociacoes;
                },
                err => {
                    throw new Error('Não foi possível obter as negociações da semana retrasada');
                }
            );
    }


}