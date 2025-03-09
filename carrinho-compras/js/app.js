function adicionar() {
    // Recuperar valores: nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProdutoUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    // Calcular o preço, ou seja, o subtotal
    let preco = quantidade * valorProdutoUnitario
    console.log(preco);

    // Adicionar o produto no carrinho

    // Atualizar o total geral de todos os produtos

}