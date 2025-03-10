function adicionar() {
    // Recuperar valores: nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProdutoUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    // Calcular o preço, ou seja, o subtotal
    let preco = quantidade * valorProdutoUnitario;

    // Adicionar o produto no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${preco}</span>
        </section>`


    // Atualizar o total geral de todos os produtos

}