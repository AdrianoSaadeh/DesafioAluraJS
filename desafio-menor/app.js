function capturarValores() {
    const nome = document.getElementById('campoNome').value;
    const idade = document.getElementById('campoIdade').value;

    document.getElementById('mostraNome').textContent = `Nome: ${nome}, Idade: ${idade}`;
    console.log(`Nome: ${nome}, Idade: ${idade}`);

    //Separar número com split()
    const numerosSeparados = "10,20,30,40,50";
    const arrayNumeros = numerosSeparados.split(',');
    console.log(arrayNumeros);
}