
// $(window).scroll(function() {
//     $('.js-fancy-heading').each(function() {
//         if( $(this).visible(true) ) {  
//             $(this).addClass('lines-added')
//         }        
//     });
// });



$(document).ready(function(){

   var swiper = new Swiper('.js-hero-slider', {
      spaceBetween: 30,
      effect: 'fade',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    var swiper = new Swiper('.js-feedback-slider', {
      slidesPerView: 3,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    // var swiper = new Swiper('.js-slider-gallery', {
    //   slidesPerView: 5,
    //   spaceBetween: 0,
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //   },
    //   freeMode: true,
    // });





    // --------------------------
    // КРАСИВЫЕ СЕЛЕКТЫ

    // $('select').niceSelect();
    // --------------------------






    // --------------------------
    // СКРОЛЛ ДО СЕКЦИИ


    // $("#scrollToFeatures").click(function() {
    //     $([document.documentElement, document.body]).animate({
    //         scrollTop: $("#scrollToFeatures").offset().top
    //     }, 600);
    // });

    //---------------------------






    // ---------------------------
    // ОТКРЫТИЕ-ЗАКРЫТИЕ МОБИЛЬНОГО МЕНЮ


    // $('.js-open-mobile-menu').on('click', function() {
    //     if( !$('#mobile-menu').hasClass('active') ) {
    //         $('#mobile-menu').addClass('active');
    //         $('.page-wrapper').addClass('no-scroll');
    //     } else {
    //         $('#mobile-menu').removeClass('active');
    //         $('.page-wrapper').removeClass('no-scroll');
    //     }
    // });

    // $(document).on( 'keydown', function ( e ) {
    //     if ( e.keyCode === 27 ) {
                // функция....
    //     }
    // });
    // ---------------------------







    // ---------------------------
    // ФОРМА С ВСПЛЫВАЮЩИМ ПЛЕЙСХОЛДЕРОМ


    $('.js-floating-label').blur();

    $('.js-floating-label').on('focus', function() {
        $(this).parent().find('.signup-form__floating-placeholder').addClass('float');
        $(this).parent().addClass('active');
    });

    $('.js-floating-label').on('blur', function() {
        if($(this).val()!=""){} else {
            $(this).parent().find('.signup-form__floating-placeholder').removeClass('float');
            $(this).parent().removeClass('active');
        };
    });
    // ---------------------------







    // ---------------------------
    // ПРИЛИПАЮЩИЙ ХЕДЕР

    // function showStickyHeader() {
    //     if ( window.pageYOffset > 293 ) {
    //        $('.sticky-header').addClass('visible');
    //     }
    //     else {
    //         $('.sticky-header').removeClass('visible');
    //     }
    // };

    // $(window).scroll(showStickyHeader); 
    // ---------------------------







    // ---------------------------
    // МОДАЛКИ



    // $(".js-open-modal").on('click', function(){

    //     $('.modal').removeClass('modal_active');
    //     $('.overlay_modal').fadeOut(400);                          

    //     var modalName = $(this).data('target');                        
    //     var modal = $('#' + modalName);

    //     if( !$(modal).hasClass('modal_active') ) {
    //         $(modal).addClass('modal_active');
    //         $('.overlay_modal').fadeIn(400);                          
    //     } else {
    //         $(modal).removeClass('modal_active');                          
    //         $('.overlay_modal').fadeOut(400);                          
    //     }
    // });

    // $(".js-close-modal").on('click', function(){
    //     $('.modal').removeClass('modal_active');
    //     $('.overlay_modal').fadeOut(400);                          
    // });
    // ---------------------------



 
    // ---------------------------
    // НАВЕРХ СТРАНИЦЫ

    // function showToTopButton() {
    //     if ( window.pageYOffset > 500 ) {
    //        $('.to-top').addClass('to-top_visible')
    //     }
    //     else {
    //         $('.to-top').removeClass('to-top_visible')
    //     }
    // }; 

    // function scrollToTop() {
    //   $("html, body").animate({ scrollTop: 0 }, "slow");
    //   return false;
    // }; 
    // ---------------------------




    // $('.js-scroll-to-top').click(scrollToTop);
    // $(window).scroll(showToTopButton);    

});

