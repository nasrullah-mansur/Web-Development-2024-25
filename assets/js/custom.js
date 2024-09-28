

let myH1 = document.querySelector('h1');
let myH1jquery = $('h1');


console.log(myH1, myH1jquery);







// let myLis = document.querySelectorAll('li');

// Array.from(myLis).forEach(element => {
//     element.innerHTML = 'One Test';
// });




$(document).ready(function() {


    // // jQuery;
    // jQuery('li').html('One Test');

    $('h1').click(function() {
        $('h1').hide();
    });

    // $('button').click(function() {
    //     $('h1').show();
    // });

    // document.querySelector('h1').addEventListener('click', function() {
    //     document.querySelector('h1').style.display = 'none';
    // })


    $('.toggle').click(function() {
        $('.box').toggle();
    })

    $('.slideUp').click(function() {
        $('.box').slideUp();
    })

    $('.slideDown').click(function() {
        $('.box').slideDown();
    })

    $('.slideToggle').click(function() {
        let test = 'test';
        $('.box').slideToggle();
    })

    $('.fadeUp').click(function() {
        $('.box').fadeIn();
    })

    $('.fadeDown').click(function() {
        $('.box').fadeOut();
    })


});


document.querySelectorAll('li').innerHTML = 'sofasdhfa;sdhf ';
// $('li:first-child').html('somehaosdjfp asdfpoa ');

document.querySelector('li').html('test');

// console.log(lis);
// console.log(lisjquery);




