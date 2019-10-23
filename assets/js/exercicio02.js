var nomes = [];

function adicionarNome(){
    let nome = document.getElementById('nome').value;
    nomes.push(nome);
    console.log(nomes);
    listarNomes();
    document.getElementById('nome').value = '';
}



function listarNomes(){
    var ol = document.querySelector('#listaNomes');
    nomes.forEach(function (item, index){
        ol.innerHTML += '<li>'+item+'</li>';
    });
}