function mostrar() {
    alert('Boa Noite!');
}

function mostrarEstado() {
    objeto = document.getElementById('estados');
    x = objeto.options[objeto.selectedIndex].text;
    alert(x);
}