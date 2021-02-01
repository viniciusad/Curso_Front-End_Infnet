function funcao1() {
    var valor1 = eval(document.getElementById('v1').value);
    var valor2 = eval(document.getElementById('v2').value);
    var valor3 = eval(document.getElementById('v3').value);
    var valor4 = eval(document.getElementById('v4').value);
    var valor5 = eval(document.getElementById('v5').value);
    var resultado = eval(document.getElementById('total').value);
            
    document.getElementById('total').value = valor1 + valor2 + valor3 + valor4 + valor5;
}

function limpaCampo() {
document.getElementById('v1').value = '0';
document.getElementById('v2').value = '0';
document.getElementById('v3').value = '0';
document.getElementById('v4').value = '0';
document.getElementById('v5').value = '0';
}