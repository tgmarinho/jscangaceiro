// criou a instancia do contrller
let controller = new NegociacaoController();

// associa o evento de submissao do form a chamada do metodo 'adiciona'app.js
document
    .querySelector('.form')
    .addEventListener('submit', controller.adiciona.bind(controller));