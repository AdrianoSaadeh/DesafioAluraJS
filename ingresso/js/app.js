function comprar() {
    // Recuperar tipo de ingresso
    let ingresso = document.getElementById('tipo-ingresso').value;
    let qtd = document.getElementById('qtd').value;

    // Validar a quantidade de tipo-ingresso disponíveis
    let elementoQtd = document.getElementById(`qtd-${ingresso}`);
    let qtdDisponivel = parseInt(elementoQtd.textContent);

    if (qtd > qtdDisponivel) {
        alert(`Quantidade de ingresso(s) ${ingresso} excede a disponível para venda`)
        return;
    }

    // Realizar a compra
    qtdDisponivel = qtdDisponivel - qtd;

    // Deduzir o número de ingressos em tela
    elementoQtd.textContent = qtdDisponivel;
}