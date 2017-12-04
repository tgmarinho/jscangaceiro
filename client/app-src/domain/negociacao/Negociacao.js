export class Negociacao {

    /**
     * com _ antes do nome da variável indico por conveção que o
     * atributo não pode ser acessado explicitamente.
     * Se for necessário acessar utilize um método de acesso getAnything();
     * 
     */

    // construtor com parametros padrões e congalando o objeto para tornar imuatavel
    //  constructor(data, quantidade, valor) {
    //     this._data = new Date(data.getTime()); // Solução para deixar Data imutável, isto é se alguem passar uma referencia na classe ciente não vai alterar o valor
    //     this._quantidade = quantidade;
    //     this._valor = valor;
    //     Object.freeze(this); // tornando o objeto imutável
    // }

    // usando object.assign() para fazer copias de objeto e guardar no this.
    // constructor(data, quantidade, valor) {
    //     Object.assign(this, {_data : new Date(data.getTime()), _quantidade : quantidade, _valor : valor});
    //     Object.freeze(this);
    // }


    // ES2016(ES6) usando {} para criação de objetos com Object.assign()
    constructor(_data, _quantidade, _valor) {
        Object.assign(this, { _quantidade, _valor });
        this._data = new Date(_data.getTime());
        Object.freeze(this);
    }



    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }



    equals(negociacao) {
        return JSON.stringify(this) == JSON.stringify(negociacao);
    }


}