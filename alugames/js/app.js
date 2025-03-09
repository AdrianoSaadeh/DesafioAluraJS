function alterarStatus(id) {

    // minha implementação

    // if (id === 1) {
    //     botao = document.querySelector('#game-1 .dashboard__item__button');
    //     botao.classList.add('dashboard__item__button--return');
    //     botao.textContent = 'Devolver'
    // } else if (id === 2) {
    //     botao = document.querySelector('#game-2 .dashboard__item__button');
    //     botao.classList.add('dashboard__item__button--return');
    //     botao.textContent = 'Devolver'
    // } else {
    //     botao = document.querySelector('#game-3 .dashboard__item__button');
    //     botao.classList.remove('dashboard__item__button--return');
    //     botao.textContent = 'Alugar'
    // }

    // Solução da Alura

    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            jogosAlugados--;
        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados++;
    }

    imprimeJogosAlugados();
}

let jogosAlugados = 0;

function imprimeJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function () {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    imprimeJogosAlugados();
});