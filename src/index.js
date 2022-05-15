import './sass/main.scss';

$(document).ready(function(){
  $('.reviews__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1
  });
  $('.reviews__slider--nav').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: '.reviews__slider',
    centerMode: false,
    focusOnSelect: true,
    variableWidth: 54
  });
  });
