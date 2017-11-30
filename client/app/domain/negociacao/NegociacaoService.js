class NegociacaoService {

    obterNegociacoesDaSemana(cb) {

        return new Promise((resolve, reject) => {

            const xhr = new XMLHttpRequest();
            xhr.open('GET', 'negociacoes/semana');

            xhr.onreadystatechange = () => {

                if (xhr.readyState == 4) {

                    if (xhr.status == 200) {

                        const criaNegociacao = objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor);
                        // realizando o parse
                        const negociacoes = JSON
                            .parse(xhr.responseText)
                            .map(criaNegociacao);

                        // chamou resolve
                        resolve(negociacoes);
                    } else {
                        console.log(xhr.responseText);
                        //chamou reject
                        reject('Não foi possível obter nas negociações da semana', null);
                    }
                }
            };

            xhr.send(); // executa a requisição configurada

        });
    }

}