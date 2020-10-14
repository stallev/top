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
     responsive:[
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
     ]
   });
});