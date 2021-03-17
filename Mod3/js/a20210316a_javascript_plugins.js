/*==================================== FIXAR BARRA APÓS SCROLL ====================================*/
$(document).ready(function() {

    $(window).scroll(function() {
        var x = $(window).scrollTop();

        var tamanhoTela = $('.banner').offset().top;

        if (x >= tamanhoTela) {
            $('nav').addClass('fixed-top');
        } else {
            $('nav').removeClass('fixed-top');
        }
    })
});


/*==================================== PLUGIN https://isotope.metafizzy.co/ ====================================*/
// init Isotope
var $grid = $('.grid').isotope({
    // options
});
// filter items on button click
$('.filter-button-group').on('click', 'button', function(e) {
    e.preventDefault();
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});
