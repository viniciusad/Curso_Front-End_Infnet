/*===========AULA PARTE 1=============*/

function funcao1() {
    var valor1 = parseInt(document.getElementById('n1').value);
    var valor2 = parseInt(document.getElementById('n2').value);
    var contador = valor1;

    while ( contador <= valor2 ) {
        document.getElementById('console').innerHTML = (contador++);
    }
}

function funcao2() {
    var x = document.getElementsByClassName('f2')[0].value;
    var titulo = document.getElementsByTagName('h1');

    titulo[0].innerHTML = x;
    titulo[0].style.color = 'red';
    titulo[0].classList.add('xyz');
}

function funcao3() {
    var x = document.querySelectorAll('.n1 ')[0].value;

    document.getElementById('console').innerHTML = (x);
}

/*===========AULA PARTE 2=============*/

/* Muda uma característic do "addEventListener" 
fazendo com que ele percorra os elementos de mesma característica */
NodeList.prototype.addEventListener = function(event, func) {
    this.forEach(function(content, item) {
        content.addEventListener(event, func);
    });
}

document.querySelector('[class=btn4]').addEventListener('click', () => {  // '() =>' equivale a 'function()'
    document.getElementById('console').innerHTML = ('F4 Funcionando!')
    
})

document.querySelectorAll('.box a').addEventListener('click', (event) => {
    event.preventDefault();  //O mesmo que "Return false"
    document.getElementById('console').innerHTML = ('Função Funcionando!');
})


/*===========INPUT RECEBENDO APENAS NUMEROS=============*/

function numeros(x) {
    document.getElementById('console').innerHTML = x.charCode

    codigo = (x.keyCode ? x.keyCode : x.charCode);

    console.log(codigo);

    if (codigo<48 || codigo>57) {
        return false;
    } else {
        return true;
    }
}