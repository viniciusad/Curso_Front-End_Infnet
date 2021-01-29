txt = document.getElementById('texto').value;  //Testando variável

var x = 110;
if ( x >= 100 ) {
    console.log('O valor de X é maior ou igual a 100');
} else {
    console.log('O valor de X é menor que 100');
}

var nome = 'Vini';
if (nome == 'João') {
    console.log('O nome é João');
} else {
    console.log('O nome NÃO é João');
}

var media = 10;
var faltas = 2;

if (media>=7 && faltas <4) {
    console.log('Aluno Aprovado');
} else {
    console.log('Aluno Reprovado');
}


var clube = 'Botafogo';

if (clube=='Flamengo') {
    console.logconsole.log('Hino do Flamengo');
} else if (clube=='Vasco') {
    console.log('Hino do Vasco');
} else if (clube=='Fluminense') {
    console.log('Hino do Fluminense');
} else if (clube =='Botafogo') {
    console.log('Hino do Botafogo');
} else {
    console.log('sem time');
}