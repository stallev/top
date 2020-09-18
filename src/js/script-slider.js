$(document).ready(function(){
  $('.slider').slick({
   arrows: true,
    dots: true,
    //adaptiveHeight: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    easing: 'ease',
    infinite: true,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 1500,
    pauseOnFocus: true,
    pauseOnHover: true,
  });
  $('.clients__slider').slick({
    arrows: true,
     dots: true,
     //adaptiveHeight: false,
     slidesToShow: 5,
     slidesToScroll: 1,
     speed: 300,
     easing: 'ease',
     infinite: true,
     initialSlide: 0,
     autoplay: false,
     autoplaySpeed: 1500,
     pauseOnFocus: true,
     pauseOnHover: true,
   });
});