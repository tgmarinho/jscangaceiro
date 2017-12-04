var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];

console.log(campos);	//	verificando	o	conteúdo	do	array


var tbody = document.querySelector('table tbody');


document.querySelector('.form').addEventListener('submit', function (event) {

    // cancelando a sumissão do formulário, pois quero apenas pegar os dados e não da refresh na tela.
    event.preventDefault()

    //	substituindo	o	alert	pelo	novo	código
    var tr = document.createElement('tr');

    campos.forEach(function (campo) {
        // cria uma td sem informações
        var td = document.createElement('td');
        // atribui o valor do campo à td
        td.textContent = campo.value;
        // adiciona a td na tr
        tr.appendChild(td);
    });

    // Nova td que armazenara o volume da negociação
    var tdVolume = document.createElement('td');

    // as posições 1 e 2 do array armazenam os campos de quantidade e valor, respectivamente
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);

    // adicionando a tr ao tbody
    tbody.appendChild(tr);


    //limpa	o	campo	da	data
    campos[0].value = '';
    //limpa	o	campo	da	quantidade
    campos[1].value = 1;
    //limpa	o	campo	do	valor
    campos[2].value = 0;
    //foca	no	campo	da	data
    campos[0].focus();

});