/*===========AULA PARTE 1=============*/
function funcao1() {
    var texto = document.getElementById('valor1').value;
    var x = texto.length;
    alert(x);
}

function funcao2() {
    var texto = document.getElementById('valor1').value;
    var x = texto.charAt(2);
    alert(x);
}

function funcao3() {
    var texto = document.getElementById('valor1').value;
    var x = texto.search('a');
    alert('A letra está na posição '+x);
}

function funcao4() {
    var texto = document.getElementById('valor1').value;
    var x = texto.lastIndexOf('ini');
    alert(x);
}
/*==============AULA PARTE 2==============*/

function contarCaracteres() {
    var textoTxt = document.getElementById('texto').value;
    var total = textoTxt.length;
    document.getElementById('total').innerHTML = total;

    if (total > 30) {
        document.getElementById('total').style.color = 'red';
    } else {
        document.getElementById('total').style.color = 'white';
    }
}

function corVermelho() {
    var titulotxt = document.getElementById('titulo');
    titulotxt.classList.remove('azul');
    titulotxt.classList.add('vermelho');
}

function corAzul() {
    var titulotxt = document.getElementById('titulo');
    titulotxt.classList.add('azul');
    titulotxt.classList.remove('vermelho');
}

var x = "Esse é um Texto para testar função";
var y = x.substr(6);
console.log(y);

/*==============AULA PARTE 3==============*/
var texto = document.getElementById('txt-1')
window.onload = function() {
    document.getElementById('btn-1').onclick = function() {
        document.getElementById('txt-1').innerHTML = 'F1 Funcionou!';
    }
}

window.onscroll = function() {
    //document.getElementById('txt-1').innerHTML = 'Você ativou a função onscroll';
    var posicao = window.pageYOffset;
    
    if (posicao >= 250) {
        document.getElementById('menu').classList.add('topo');
    } else {
        document.getElementById('menu').classList.remove('topo');
    }
}

/*==========EXERCÍCIO PADRAO EMAIL============*/
function padraoNome() {

}


function padraoEmail() {

}