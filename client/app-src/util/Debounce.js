/*
Vamos recapitular. Quando debounce for invocado, retornará uma nova função. É essa nova função que será associada ao evento "click" do botão. Quando o evento for disparado, a função parará qualquer timer que esteja em andamento e criará um novo timer.
Se nenhuma outra ação for empreendida na janela de tempo de um segundo, a função passada como primeiro parâmetro de debounce será executada. Porém, se outro clique for realizado antes da janela de um segundo terminar, o temporizador vigente será cancelado e um novo tomará o seu lugar.
Por fim, podemos utilizar a função debounce para qualquer evento em nossa aplicação que precise executar apenas uma ação dentro de uma janela de tempo.
*/

export function debounce(fn, milissegundos) {


    // guarda o ID de um timer, 0 indica que não há nenhum
    let timer = 0;

    return () => {

        // para o último timer definido
        clearTimeout(timer);

        // a variável timer ganha o ID de um novo temporizador 
        // afeta a variável no escopo da função debounce
        timer = setTimeout(() => fn(), milissegundos);
    }
}