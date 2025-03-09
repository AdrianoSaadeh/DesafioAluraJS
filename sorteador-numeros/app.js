function sortear() {
    var qtd = parseInt(document.getElementById('quantidade').value);
    var de = parseInt(document.getElementById('de').value);
    var ate = parseInt(document.getElementById('ate').value);

    var sorteados = [];
    var num;

    for (let index = 0; index < qtd; index++) {

        num = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(num)) {
            num = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(num);
    }
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;

    alterarStattusBotao();
}

function alterarStattusBotao() {
    var botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.replace('container__botao-desabilitado', 'container__botao');
    } else {
        botao.classList.replace('container__botao-desabilitado', 'container__botao');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = "";
    document.getElementById('de').value = "";
    document.getElementById('ate').value = "";

    document.querySelector('#resultado .texto__paragrafo').textContent = 'Números sorteados: nenhum até agora';

    alterarStattusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}