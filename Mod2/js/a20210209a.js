/*===========AULA PARTE 1=============*/
$(document).ready(function() {
    document.getElementById('msg').innerHTML = ('Clicar nos botões para testar as funções');
});


$(document).ready(function() {
    
    $('#btn1').click(function() {
        document.getElementById('msg').innerHTML = ('F1 Funcionando')
    })
    
})

$(document).ready(function() {
    $('#btn2').click(function() {
        var x = $('#texto1').val();
        document.getElementById('msg').innerHTML = (x);
    });
});

$('#texto2').datepicker();



    $(".banner").vegas({
        slides: [
            {src: "./assets/img1-500x500.jpg"},
            {src: "./assets/img2-500x500.jpg"},
            {src: "./assets/img3-500x500.jpg"},
            {src: "./assets/img4-500x500.jpg"},
            {src: "./assets/img5-500x500.jpg"},
            {src: "./assets/img6-500x500.jpg"},
            {src: "./assets/img1-500x500.jpg"},
        ],
        transition: 'zoomOut'
    })


/*===========AULA PARTE 2=============*/
