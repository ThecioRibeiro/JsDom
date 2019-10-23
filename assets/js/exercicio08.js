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
  encargos.irrf = calcularIrrf(vendedor.salarioBruto - encargos.inss);
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


function calcularIrrf(baseIrrf){
  const PISO_1 = 1903.99;
  const PISO_2 = 2826.65; 
  const PISO_3 = 3751.05; 
  const PISO_4 = 4664.68;
    

  if (baseIrrf < PISO_1) {
    return 0; 
  } else if (baseIrrf <= PISO_2) {
    return baseIrrf * 0.075;
  } else if (baseIrrf <= PISO_3){
    return baseIrrf * 0.15;
  } else if (baseIrrf <= PISO_4){
    return baseIrrf * 0.22;
  } else{
    return baseIrrf * 27.5;
  }
}

/*vendedor.salarioBruto = calcularSalarioBruto(vendedor.salarioBase, vendedor.totalDeVendasNoMes); */