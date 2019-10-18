
function verificarMaiorValor() {
    var valor1 = document.getElementById("PrimeiroValor").value;
    var valor2 = document.getElementById("SegundoValor").value;
    var textoH4 = document.getElementById('textoh4');

    document.getElementById("mensagemMaiorValor").className = 'row visible';

    if (valor1 == valor2) {
        textoH4.innerText = 'Não é permitido digitar valores iguais, por favor digite um valor diferente para cada campo.';
    } else if (valor1 > valor2) {
        textoH4.innerText = 'O primeiro valor é maior do que o segundo.';
    } else {
        textoH4.innerText = 'O segundo valor é maior do que o primeiro.';
    }
}
