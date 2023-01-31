$(document).ready(function(){
    $('.reviews__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      asNavFor: '.reviews__slider--nav',
      responsive: [ 
          {
            breakpoint: 768,
            settings: {
              arrows: false
            }
          }

      ]
    });
    $('.reviews__slider--nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.reviews__slider',
      arrows: false,
      centerMode: true,
      focusOnSelect: true,
      variableWidth: true,
      responsive: [ 
        {
          breakpoint: 768,
          settings: {
            arrows: true
          }
        }

    ]
    });
    });