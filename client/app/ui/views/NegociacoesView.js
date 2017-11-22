class NegociacoesView {

    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }


    update(model) {

        // repassa o model para this.template()
        this._elemento.innerHTML = this.template(model);
    }

    // PARÂMETRO AQUI!
    // deve retornar o template baseado no model
    template(model) {

            return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>

                <tbody>
                    ${model.paraArray().map(negociacao => 
                        `
                        <tr>
                            <td>${DateConverter.paraTexto(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                            <td>${negociacao.volume}</td>
                         </tr>  
                         
                         `
                    ).join('')}
                </tbody>

                <tfoot>
                    <tr>
                        <td colspan="3"></td>
                        <td>${model.volumeTotal}</td>            
                    </tr>
                </tfoot>
            </table>
        `

    }


}