function alterarStatus(num) {

    if (num === 1) {
        botao = document.querySelector('#game-1 .dashboard__item__button');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver'
    } else if (num === 2) {
        botao = document.querySelector('#game-2 .dashboard__item__button');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver'
    } else {
        botao = document.querySelector('#game-3 .dashboard__item__button');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar'
    }
}