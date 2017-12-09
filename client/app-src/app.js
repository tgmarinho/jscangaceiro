import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/js/modal.js';
import '../css/meucss.css';

import { NegociacaoController } from './controllers/NegociacaoController.js';
import { Negociacao } from './domain/index.js';

$('h1').on('click', () => alert('Foi clicado!'));

// provando a existência da função!
console.log('Função adicionada pelo bootstrap:');
console.log($('h1').modal);

const controller = new NegociacaoController();

// REMOVEU O ALIAS $ E AS ASSOCIAÇÕES DOS EVENTOS

const negociacao = new Negociacao(new Date(), 1, 200);
const headers = new Headers();
headers.set('Content-Type', 'application/json');
const body = JSON.stringify(negociacao);
const method = 'POST';

const config = {
    method,
    headers,
    body
};

fetch('http://localhost:3000/negociacoes', config)
    .then(() => console.log('Dado enviado com sucesso'));


//Missão cumprida! Simplificamos bastante a maneira pela qual realizávamos a associação de um evento com os métodos de nosso controller.