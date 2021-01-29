function funcao1() {
    var x = document.getElementById('texto').value;
    alert(x);
}

function funcao2(y) {
    var meutexto = y;
    document.getElementById('texto').value = meutexto;
}

function somar(n1, n2) {
    valor1 = parseInt(n1);
    valor2 = parseInt(n2);
    total = valor1 + valor2;
    //alert("Resultado:" + total); // Aqui ele exibe em um alerta na página
    document.getElementById('texto').value = "Resultado:" + total; // Aqui ele exibe no input "TEXTO" da página
}

//somar(44, 61);

function funcao4() {
    var x = document.getElementById('texto').value;
    somar(x, 100);
}

//função com retorno
function funcao5() {
    var n1 = 54;
    var n2 = 32;
    var total = n1 + n2;

    return total;
}

function funcao6() {
    var x = document.getElementById('texto').value;

    if ( x == 'Vini') {
        return true;
    } else {
        return false;
    }
}