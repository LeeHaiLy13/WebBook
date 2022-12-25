$(function () {
    $('#js-slider-3').slick({
        arrows: true,
        dots: true, 
        appendDots: $('.dots-3'), 
        speed: 1000, 
        slidesToShow: 2,
        centerMode: true, 
        variableWidth: true, 
    });
});
$(function () {
    $('.autoplay').slick({
        slidesToShow: 4, 
        slidesToScroll: 4, 
       
        infinite: true,

    });
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
});