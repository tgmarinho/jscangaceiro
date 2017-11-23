// criou a instancia do controller
const controller = new NegociacaoController();

// associa o evento de submissao do form a chamada do metodo 'adiciona'app.js
document
    .querySelector('.form')
    .addEventListener('submit', controller.adiciona.bind(controller));

document
    .querySelector('#botao-apaga')
    .addEventListener('click', controller.apaga.bind(controller));