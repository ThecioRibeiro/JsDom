$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

var vendedor = {
  //nome: document.getElementById('nomeVendedor').value,
  //salarioBase: document.getElementById('salarioBase').value,
  //totalDeVendasNoMes: document.getElementById('totalDeVendas').value,
  //salarioBruto: null,
  //salarioLiquido: null
};

var encargos = {
  inss: null,
  irrf: null
};

function calcularSalarioLiquido() {
  vendedor.nome =  document.getElementById('nomeVendedor').value;
  vendedor.salarioBase =  parseFloat (document.getElementById('salarioBase').value);
  vendedor.totalDeVendasNoMes =  parseFloat (document.getElementById('totalDeVendas').value);

  vendedor.salarioBruto = calcularSalarioBruto(vendedor.salarioBase, vendedor.totalDeVendasNoMes);
  console.log('bruto ' + vendedor.salarioBruto);
  encargos.inss = calcularInss(vendedor.salarioBruto);
  console.log(encargos);
}

function calcularSalarioBruto(salario, vendas) {
  const PERCENTUAL_COMISSAO = 0.1;
  return salario + vendas * PERCENTUAL_COMISSAO;
}

function calcularInss(salario) {
  const FAIXA_1 = 1751.81;
  const FAIXA_2 = 2919.72;

  if (salario <= FAIXA_1) {
    return salario * 0.08;
  } else if (salario <= FAIXA_2) {
    return salario * 0.09;
  }else{
    return salario * 0.11;
  }
}


function calcularIrrf(){
  const PISO_1 = 1903.99;
  const PISO_2 = 2826.65; 
  const PISO_3 = 3751.05; 
  const PISO_4 = 4664.68;
    

  if (condition) {
    
  } else {
    
  }
}

/*vendedor.salarioBruto = calcularSalarioBruto(vendedor.salarioBase, vendedor.totalDeVendasNoMes); */