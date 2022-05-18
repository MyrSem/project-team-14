import './sass/main.scss';

$(document).ready(function(){
  $('.reviews__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: '.reviews__slider--nav'
  });
  $('.reviews__slider--nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.reviews__slider',
    arrows: true,
    focusOnSelect: true,
    variableWidth: true,
    centerMode: true,
    responsive:[
    
      {
          breakpoint: 768,
          settings: {
              slidesToShow:5,
              slidesToScroll: 1,
              asNavFor: '.reviews__slider',
              arrows: true,
              focusOnSelect: true,
              variableWidth: true,
          }
      },
      {
          breakpoint: 440,
          settings: {
              slidesToShow:3,
              slidesToScroll: 1,
              asNavFor: '.reviews__slider',
              arrows: true,
              focusOnSelect: true,
              variableWidth: true,
          }
      },
      {
          breakpoint: 240,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.reviews__slider',
            arrows: true,
            focusOnSelect: true,
            variableWidth: true,
          }
      }
    ]
  });
  });
