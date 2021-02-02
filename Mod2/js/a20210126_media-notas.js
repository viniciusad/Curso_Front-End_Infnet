function somaNotas() {
    var valor1 = eval(document.getElementById('v1').value);
    var valor2 = eval(document.getElementById('v2').value);
    var valor3 = eval(document.getElementById('v3').value);

    document.getElementById('total').value = valor1 + valor2 + valor3;
}

function mediaAluno() {
    var resultado = document.getElementById('total').value;

    document.getElementById('media').value = resultado / 3;
    
    if (resultado / 3 >= 7) {
    document.getElementById('status').value="Aprovado";
    } else if (resultado / 3 < 6) {
    document.getElementById('status').value="Reprovado";
    } else if (resultado / 3 <= 7 && resultado / 3 >= 6) {
    document.getElementById('status').value="Recuperação";
    } else {
    document.getElementById('status').value="...";
    }
}

function limpaCampo() {
    document.getElementById('total').value = '';
    document.getElementById('media').value = '';
}
function limpaCampo2() {
    document.getElementById('v1').value = '';
    document.getElementById('v2').value = '';
    document.getElementById('v3').value = '';
}
function limpaCampos() {
    document.getElementById('total').value = '';
    document.getElementById('media').value = '';
    document.getElementById('v1').value = '';
    document.getElementById('v2').value = '';
    document.getElementById('v3').value = '';
}
function onlyNumbers() {
    return event.charCode >= 48 && event.charCode <= 57
}