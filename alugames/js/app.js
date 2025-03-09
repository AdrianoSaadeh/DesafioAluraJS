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

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }
}