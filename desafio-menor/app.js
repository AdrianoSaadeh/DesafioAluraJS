function capturarValores() {
    const nome = document.getElementById('campoNome').value;
    const idade = document.getElementById('campoIdade').value;

    document.getElementById('mostraNome').textContent = `Nome: ${nome}, Idade: ${idade}`;
    console.log(`Nome: ${nome}, Idade: ${idade}`);

    //Separar número com split()
    const numerosSeparados = "10,20,30,40,50";
    const arrayNumeros = numerosSeparados.split(',');
    console.log(arrayNumeros);

    // Calculadora

    function adicao(a, b) {
        return a + b;
    }

    function subtracao(a, b) {
        return a - b;
    }

    function multiplicacao(a, b) {
        return a * b;
    }

    function divisao(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return "Erro: divisão por zero.";
        }
    }

    function calculadora(operacao, a, b) {
        switch (operacao) {
            case 'soma':
                return adicao(a, b);
            case 'subtracao':
                return subtracao(a, b);
            case 'multiplicacao':
                return multiplicacao(a, b);
            case 'divisao':
                return divisao(a, b);
            default:
                return "Operação inválida.";
        }
    }

    // Exemplo de uso
    let resultado = calculadora('divisao', 5, 3);
    console.log(resultado); // Saída esperada: 8

    //Verificação de Números Pares e Ímpares
    function verificarParOuImpar(numero) {
        if (numero % 2 === 0) {
            return "Par";
        } else {
            return "Ímpar";
        }
    }

    // Exemplo de uso
    let numero = 6;
    let resultadoParOuImpar = verificarParOuImpar(numero);
    console.log(resultadoParOuImpar); // Saída esperada: Par
}