$(document).ready(function() {
$('.main_btn, .main_btna, a[href="#sheldure"]').on('click', function() {
    $('.overlay').fadeIn(1000);
    $('.modal').slideDown(2000);
});
$('.close').on('click', function() {
    $('.overlay').fadeOut(1000);
    $('.modal').slideUp(2000);
})
});