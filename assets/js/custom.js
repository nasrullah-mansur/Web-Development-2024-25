// =========== jQuery Methods =============


// .show();
// .hide();
// .toggle();
// .slideUp();
// .slideDown();
// .slideToggle();
// .fadeIn();
// .fadeOut();
// .fadeToggle();
// .addClass();
// .removeClass();
// .toggleClass();

// $('h1').addClass('test hello another');


// Events;
// .click();

// $('.fadeToggle').click(function() {
//     $('.box').fadeToggle();
// });

// $('.fadeToggle').on('click', function() {
//     $('.box').fadeToggle();
// })

// $('#myInput').on('focus', function() {
//     let a = '#myInput';

//     $(this).val('this is something');
// })

// $('#myInput').on('blur', function() {
//     let value = $('#myInput').val();

//     if(value == '') {
//         $('#myInput').val('kicu ekta likhun');
//     }
// })



// Getter & Setter;
// .html();
// let myText = $('h1').text();
// let myHtml = $('h1').html();
// let myValue = $('input').val();
// let myType = $('input').attr('type');

// $('h1').text('another text');
// $('h1').html('<span>another text</span>');
// $('input').val('this is my value form javascript');
// $('input').attr('type', 'password');

// $('.my-btn').on('click', function() {
//     let btnText  = $(this).text();
//     let inputText = $('input').attr('type');

//     if(btnText == 'Show') {
//         $(this).text('Hide');
//     } else {
//         $(this).text('Show');
//     }

//     if(inputText == 'password') {
//         $('input').attr('type', 'text');
//     } else {
//         $('input').attr('type', 'password');
//     }
// })


// $('h1').append('<p>this is p tag</p>');
// $('h1').prepend('<p>this is p tag</p>');
// $('h1').after('<p>this is p tag</p>');
// $('h1').before('<p>this is p tag</p>');


// $('h1').remove();
// $('h1').empty();

// let h1Color = $('h1').css('color');

// $('h1').css({
//     color: 'yellow',
//     backgroundColor: 'red',
// });

// $('span').parentUntil('li');

// $('h1').find('strong');
// $('h1 strong')



$(document).ready(function(){
    $('.slider-container').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        slidesToShow: 2,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>'
    });
});