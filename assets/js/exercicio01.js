
function simuladorSalario() {
    const SALARIO_COMERCIAL = 1300;
    const PERCENTUAL_DE_COMISSAO = 0.1;
    const META_DE_VENDAS = 1000;

    var nomeDoVendedor = document.getElementById("nomeDoVendedor").value;
    var totalVendas = document.getElementById("totalVendas").value;



    if (totalVendas >= META_DE_VENDAS) {
        var salarioBruto = SALARIO_COMERCIAL + (totalVendas * PERCENTUAL_DE_COMISSAO);
        var comissao = totalVendas * PERCENTUAL_DE_COMISSAO;
        exibirMensagemSucesso(nomeDoVendedor, salarioBruto, comissao);
    } else {
        exibirMensagemErro(nomeDoVendedor);
    }




    console.log('Nome do vendedor: ' + nomeDoVendedor);
    console.log('Total de vendas: ' + totalVendas);
    console.log('Salário bruto: ' + salarioBruto);
}


function exibirMensagemSucesso(nome, salario, comissao) {
    let html = '<div class="col-sm-12 col-md-9 col-lg-9 pt-29">' +
        '<div class="alert alert-success" role="alert">' +
        '<h4>' + nome + ', seu salário bruto será de ' + salario + ' reais.<br>Você recebeu ' + comissao + ' reais de comissão.</h4>' +
        '</div>' +
        '</div>';
    let mensagemResultado = document.getElementById("mensagemResultado");
    mensagemResultado.className = 'row visible';
    mensagemResultado.innerHTML = html;

}

function exibirMensagemErro(nome) {
    let html = '<div class="col-sm-12 col-md-9 col-lg-9 pt-29">' +
        '<div class="alert alert-danger" role="alert">' +
        '<h4>' + nome + ', nada.</h4>' +
        '</div>' +
        '</div>';
    let mensagemResultado = document.getElementById("mensagemResultado");
    mensagemResultado.className = 'row visible';
    mensagemResultado.innerHTML = html;

}