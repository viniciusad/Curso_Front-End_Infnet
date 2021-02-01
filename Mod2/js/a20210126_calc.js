function funcao1() {
    var valor1 = eval(document.getElementById('v1').value);
    var valor2 = eval(document.getElementById('v2').value);
    var resultado = eval(document.getElementById('total').value);
            
    document.getElementById('total').value = valor1 + valor2;
}
function funcao2() {
    var valor1 = eval(document.getElementById('v1').value);
    var valor2 = eval(document.getElementById('v2').value);
            
    document.getElementById('total').value = valor1 - valor2;
}
function funcao3() {
    var valor1 = eval(document.getElementById('v1').value);
    var valor2 = eval(document.getElementById('v2').value);
            
    document.getElementById('total').value = valor1 * valor2;
}
function funcao4() {
    var valor1 = eval(document.getElementById('v1').value);
    var valor2 = eval(document.getElementById('v2').value);

            
    document.getElementById('total').value = valor1 / valor2;
}

function limpaCampo() {
document.getElementById('total').value = '';
}
function limpaCampo2() {
document.getElementById('v1').value = '';
document.getElementById('v2').value = '';
}

function onlyNumbers() {
    return event.charCode >= 48 && event.charCode <= 57
}