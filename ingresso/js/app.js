function comprar() {
    // Recuperar ingresso e qtd selecionados
    let ingresso = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);

    // Recuperar quantidades disponíveis
    let elementoQtd = document.getElementById(`qtd-${ingresso}`);
    let qtdDisponivel = parseInt(elementoQtd.textContent);

    // Validar a quantidade de tipo-ingresso disponíveis
    if (qtd > qtdDisponivel) {
        alert(`Quantidade de ingresso(s) ${ingresso} excede a disponível para venda`)
        return;
    }

    // Realizar a compra
    qtdDisponivel = qtdDisponivel - qtd;

    // Deduzir o número de ingressos em tela
    elementoQtd.textContent = qtdDisponivel;
}