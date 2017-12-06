import { NegociacaoController } from './controllers/NegociacaoController.js';
import { debounce } from './util/index.js';
// criou a instancia do controller
const controller = new NegociacaoController();

const $ = document.querySelector.bind(document);

$('.form').addEventListener('submit', controller.adiciona.bind(controller));

$('#botao-apaga').addEventListener('click', controller.apaga.bind(controller));

$('#botao-importa').addEventListener('click', controller.importaNegociacoes.bind(controller));