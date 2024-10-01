// =========== jQuery Methods =============




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

  

    $.ajax({
        method: 'GET',
        header: 'application/json',
        url: 'https://course.divinecoder.com/food-categories',
        success: (res) => {
            console.log(res);
            
        },
        error: (error) => {
            console.log(error);
            
        }
    });


    let myobj = {
        my_name: 'your name',
        business_email: 'your email',
        subject: 'your subject',
    }


    $.ajax({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: myobj,
        success: () => {},
        error: () => {},
    });

    $.get('https://jsonplaceholder.typicode.com/posts', function(res) {
        console.log(res);
    });


    var mixer = mixitup('.gallery-container');


    new VenoBox({
        selector: ".my-image-links"
    });

});