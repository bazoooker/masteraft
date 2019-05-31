
$(window).scroll(function() {


    $('.js-trigger-boat').each(function() {
        if( $(this).visible(true) ) {
            if(!$('.js-trigger-boat').hasClass('triggered')) {
                $('.js-trigger-boat').addClass('triggered');
                var pathBoatWave = anime.path('#pathForFloatingBoat path');
                console.log('trigger!');
                anime({
                    targets: '.js-raft-float',
                    translateX: pathBoatWave('x'),
                    translateY: pathBoatWave('y'),
                    rotate: pathBoatWave('angle'),
                    easing: 'linear',
                    duration: 10000,
                    begin: function(anim) {
                        console.log('anim begin');
                    },
                    complete: function(anim) {
                        $('.js-trigger-boat').removeClass('triggered');
                    }
                }) 
            }
        }        
    });

    // $('.js-trigger-map-boat').each(function() {
    //     if( $(this).visible(true) ) {
    //         if(!$('.js-trigger-map-boat').hasClass('triggered')) {
    //             $('.js-trigger-map-boat').addClass('triggered');
    //             var pathBoatMapWave = anime.path('#pathForMapBoat path');
    //             console.log('trigger!');
    //             anime({
    //                 targets: '.js-raft-float',
    //                 translateX: pathBoatWave('x'),
    //                 translateY: pathBoatWave('y'),
    //                 rotate: pathBoatWave('angle'),
    //                 easing: 'linear',
    //                 duration: 10000,
    //                 begin: function(anim) {
    //                     console.log('anim begin');
    //                 },
    //                 complete: function(anim) {
    //                     $('.js-trigger-boat').removeClass('triggered');
    //                 }
    //             }) 
    //         }
    //     }        
    // });


});




        // document.addEventListener("DOMContentLoaded", function(event) { 
        //   document.getElementById("animate").onclick = function(){
            

        //     var timeline = anime.timeline({ autoplay: true, direction: 'alternate', loop: false });

        //     timeline
        //     .add({
        //       targets: '#work-blyat', 
        //       d: [
        //         {
        //           value: 'M247.954 65.4473C352.411 -54.7792 576.538 22.3088 648.769 53.114C649.132 53.2691 649.465 53.3814 649.847 53.4823C771.014 85.4892 961.252 231.832 961.252 453.498C961.252 600 768.274 638.526 450.515 725.807C144 810 -67.8036 764 -67.8036 659.412C-67.8036 543.715 -42.9018 511.922 83.8466 382.617C206 258 138 192 247.954 65.4473Z',
        //           duration: 1000,
        //           easing: 'easeInOutQuad'
        //         },
        //       ]
        //     });
        //   }
        // });





        // document.addEventListener("DOMContentLoaded", function(event) { 
        //   document.getElementById("animate").onclick = function(){
        //     anime({
        //       targets: '#work-blyat',
        //       d: [
        //         { value: 'M308.298 50.653C439.099 -31.347 612.632 2.98618 678.798 37.1528C790.632 72.4862 1016.98 243.243 966.798 483.153C934.798 636.153 774.798 641.653 495.298 786.653C215.798 931.653 60.7985 830.153 16.7985 712.653C-27.2015 595.153 13.7985 508.653 156.798 404.153C299.798 299.653 144.798 153.153 308.298 50.653Z' },
        //         { value: 'M248.396 51.5C379.196 -30.5 552.729 3.83322 618.896 37.9999C730.729 73.3332 1002.98 208.243 952.799 448.153C920.799 601.153 726 577 446.5 722C167 867 81.5 763.5 37.5 646C-6.50002 528.5 -39 449 104 344.5C247 240 84.8958 154 248.396 51.5Z' },
        //         { value: 'M308.298 50.653C439.099 -31.347 612.632 2.98618 678.798 37.1528C790.632 72.4862 1016.98 243.243 966.798 483.153C934.798 636.153 774.798 641.653 495.298 786.653C215.798 931.653 60.7985 830.153 16.7985 712.653C-27.2015 595.153 13.7985 508.653 156.798 404.153C299.798 299.653 144.798 153.153 308.298 50.653Z' },
        //       ],
        //       easing: 'easeOutQuad',
        //       duration: 1300,
        //     });
        //   }
        // });





$(document).ready(function(){

    new WOW().init();
    $.stellar();
    $('.js-mask-tel').mask('+7 (999) 999-99-99');

    // --------------------
    // анимация фигур

    $('.js-animate-shape-on-hover').mouseenter(function() {

        // !!! 
        // чтобы схема работала, нужно:
        // 1. присвоить класс .js-animate-shape-on-hover родительскому контейнеру
        // 2. присводить ему дата-таргет, идентичный id svg-фигуры внути
        // 3. присвоить svg-фигуре ай-ди

        var animTarget = $(this).data('target');
        var pathFrom = $(this).find('path.path-1').attr('d');
        var pathTo = $(this).find('path.path-2').attr('d');

        anime({
            targets: "#"+animTarget,
            d: [
                { value: pathFrom },
                { value: pathTo },
                { value: pathFrom },
            ],
            easing: 'easeOutQuad',
            duration: 700,
        });
    });

    // --------------------



    $('.js-made-by-anim').on('mouseenter', function() {
        $(this).addClass('made-by_active');
    });
    $('.js-made-by-anim').on('mouseleave', function() {
        $(this).removeClass('made-by_active');
    })




      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Маршруты на моторных лодках', 6873],
          ['Пешие маршруты', 2008],
          ['Конные маршруты', 1683],
          ['Простые сплавы', 507],
          ['Солжные рафт-сплавы', 7129]
        ]);

        var options = {
          pieHole: 0.6,
          legend: 'none',
          backgroundColor: 'none',
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }






    // --------------------
    // анимация лодки


    // анимация лодки мск-хабаровск
    var pathBoat = anime.path('#my-path path');

    // !!! важно
    // уменьшить дистанци, т.к. лодка заплывает за пин

    $('#anime-boat').click(function() {
        anime({
          targets: '.js-raft-total-distance',
          translateX: pathBoat('x'),
          translateY: pathBoat('y'),
          rotate: pathBoat('angle'),
          easing: 'linear',
          duration: 6000,
          begin: function(anim) {
            console.log('anim begin');
            // здесь сделать анимацию первого пина карты
          },
          complete: function(anim) {
            console.log('anim end');
            // анимировать второй пин на карте
          }
        });
    })
// var path = anime.path('.motion-path-demo path');

// anime({
//   targets: '.motion-path-demo .el',
//   translateX: path('x'),
//   translateY: path('y'),
//   rotate: path('angle'),
//   easing: 'linear',
//   duration: 2000,
//   loop: true
// });


    // анимация лодки по большой волне
    var pathBoatWave = anime.path('#pathForFloatingBoat path');

    // $('#big-anime-boat').click(function() {
        anime({
          targets: '.js-raft-float',
          translateX: pathBoatWave('x'),
          translateY: pathBoatWave('y'),
          rotate: pathBoatWave('angle'),
          easing: 'linear',
          duration: 6000,
          begin: function(anim) {
            console.log('anim begin');
          },
          complete: function(anim) {
            console.log('anim end');
          }
        // });
    })
    // --------------------






    // --------------------
    // icon-text hover
    $('.js-icon-text-hover').mouseenter(function() {
        $(this).addClass('icon-text_active');
    });

    $('.js-icon-text-hover').mouseleave(function() {
        $(this).removeClass('icon-text_active');
    })
    // --------------------





    // --------------------
    // аккордеоны
    $('.js-accordeon').click(function() {
        let accordIsOpen = $(this).parent().hasClass('accordeon_active');
        $('.accordeon').removeClass('accordeon_active');
        $('.accordeon').find('.accordeon__content').slideUp(300);
        if(accordIsOpen) {
            $(this).parent().removeClass('accordeon_active');
            $(this).parent().find('.accordeon__content').slideUp(300);
        }else {
            $(this).parent().addClass('accordeon_active');
            $(this).parent().find('.accordeon__content').slideDown(300);
        }
    });

    // --------------------




    // --------------------
    // табы

    // нажатие на табы
    $('.js-tab-link').click(function() {
        var targetTab = $(this).data('target');
        var allSlidesInParent = $(this).parent().parent().find('.tab-slide');
        var slideToShow = $(allSlidesInParent).eq(targetTab-1);

        // цвета табов
        $(this).parent().find('.tab-link_active').removeClass('tab-link_active');
        $(this).addClass('tab-link_active');

        // поялвение контента
        $(allSlidesInParent).addClass('tab-slide_hidden');
        $(slideToShow).removeClass('tab-slide_hidden');
    });


    // нажатие на стрелки
    // листание табов вперед
    $('.js-tabs-nav-next').click(function() {
        let tabsTarget = $(this).data('tabs-target');
        let currentActiveTab = $('#'+tabsTarget).find('.tab-link_active').index();

        console.log(currentActiveTab);
        if(currentActiveTab > 1) { //переход с третьего таба на первый
            // цвета табов
            $('#'+tabsTarget).find('.tab-link').eq(0).addClass('tab-link_active');
            $('#'+tabsTarget).find('.tab-link').eq(currentActiveTab).removeClass('tab-link_active');


            // появление контента
           var allSlidesInParent = $('#'+tabsTarget).find('.tab-slide');
           var slideToShow = $('#'+tabsTarget).find('.tab-slide').eq(0);
           $(allSlidesInParent).addClass('tab-slide_hidden');
           $(slideToShow).removeClass('tab-slide_hidden');

        } else {
            // цвета табов
            $('#'+tabsTarget).find('.tab-link').eq(currentActiveTab+1).addClass('tab-link_active');
            $('#'+tabsTarget).find('.tab-link').eq(currentActiveTab).removeClass('tab-link_active');
            // появление контента
            var allSlidesInParent = $('#'+tabsTarget).find('.tab-slide');
            var slideToShow = $('#'+tabsTarget).find('.tab-slide').eq(currentActiveTab+1);
            $(allSlidesInParent).addClass('tab-slide_hidden');
            $(slideToShow).removeClass('tab-slide_hidden');
        }
    });





    $('.js-tabs-nav-prev').click(function() {
        let tabsTarget = $(this).data('tabs-target');
        let currentActiveTab = $('#'+tabsTarget).find('.tab-link_active').index();

        console.log(currentActiveTab);
        if(currentActiveTab < 1) {
            // цвета табов
            $('#'+tabsTarget).find('.tab-link').eq(2).addClass('tab-link_active');
            $('#'+tabsTarget).find('.tab-link').eq(currentActiveTab).removeClass('tab-link_active');

            // появление контента
            var allSlidesInParent = $('#'+tabsTarget).find('.tab-slide');
            var slideToShow = $('#'+tabsTarget).find('.tab-slide').eq(currentActiveTab+2);
            $(allSlidesInParent).addClass('tab-slide_hidden');
            $(slideToShow).removeClass('tab-slide_hidden');
        } else {
            // цвета табов
            $('#'+tabsTarget).find('.tab-link').eq(currentActiveTab-1).addClass('tab-link_active');
            $('#'+tabsTarget).find('.tab-link').eq(currentActiveTab).removeClass('tab-link_active');

            // появление контента
            var allSlidesInParent = $('#'+tabsTarget).find('.tab-slide');
            var slideToShow = $('#'+tabsTarget).find('.tab-slide').eq(currentActiveTab-1);
            $(allSlidesInParent).addClass('tab-slide_hidden');
            $(slideToShow).removeClass('tab-slide_hidden');
        }
    });
    // --------------------





    $('.js-hero-slider-controls').click(function() {
        let heroSlideTo = $(this).data('slideto');        
        $('.js-hero-slider-controls').removeClass('bullets__dot_active');
        $(this).addClass('bullets__dot_active');
        swiperHero.slideTo(heroSlideTo, 200);        
        $('.hero__text-slide').hide();
        $('.hero__text-slide#text-slide-'+heroSlideTo).show();
    });




   var swiperHero = new Swiper('.js-hero-slider', {
        speed:  350,
      spaceBetween: 0,
      effect: 'fade',
      autoplay: {
        delay: 6000,
      },
      on: {
        init: function () {
          // console.log('swiper initialized');
        },
      },
    });
    swiperHero.on('slideChange', function () {
        $('.js-hero-slider-controls').removeClass('bullets__dot_active');
        $('.js-hero-slider-controls').eq(swiperHero.activeIndex).addClass('bullets__dot_active');
        $('.hero__text-slide').hide();
        $('.hero__text-slide#text-slide-'+swiperHero.activeIndex).show();
        // $('.hero__text-slide').eq(heroSlideTo).addClass('hero__text-slide_active');
    });
    swiperHero.on('transitionStart', function () {
        $('.hero__photo').addClass('hero__photo_animated');
        
    });
    swiperHero.on('transitionEnd', function () {
        $('.hero__photo').removeClass('hero__photo_animated');
    });






    var swiperFeedback = new Swiper('.js-feedback-slider', {
      slidesPerView: 3,
      spaceBetween: 20,
      navigation: {
        nextEl: '.feedback-slider__nav .swiper-button-next',
        prevEl: '.feedback-slider__nav .swiper-button-prev',
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



    // function favMsge() {
    //     var timer;
    //     $('#success-msg').removeClass('visible');
    //     clearTimeout(timer);

    //     if ( !$(thisProd).hasClass('product-thumb_in-fav') ) {
    //         $(thisProd).addClass('product-thumb_in-fav');
    //         $('#fav-message-add').addClass('visible');

    //         timer = setTimeout( function() {
    //             $('#fav-message-add').removeClass('visible');
    //         }, 900);
    //     }else {
    //         clearTimeout(timer);
    //         $(thisProd).removeClass('product-thumb_in-fav');
    //         $('#fav-message-del').addClass('visible');

    //         timer = setTimeout( function() {
    //             $('#fav-message-del').removeClass('visible');
    //         }, 900);
    //     }
    // }

        $('.js-show-success-message').click(function() {
            var timer;
            $('.message').addClass('message_visible');
            clearTimeout(timer);


            timer = setTimeout( function() {
                $('.modal').removeClass('modal_active');
                $('.overlay_modal').fadeOut(400); 
            }, 2000);
        });



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

    function showStickyHeader() {
        if ( window.pageYOffset > 293 ) {
           $('.sticky-header').addClass('visible');
        }
        else {
            $('.sticky-header').removeClass('visible');
        }
    };

    $(window).scroll(showStickyHeader); 
    // ---------------------------







    // ---------------------------
    // МОДАЛКИ



    $(".js-open-modal").on('click', function(e){
        e.preventDefault();
        $('.message').removeClass('message_visible');

        $('.modal').removeClass('modal_active');
        $('.overlay_modal').fadeOut(400);                          

        var modalName = $(this).data('target');                        
        var modal = $('#' + modalName);

        if( !$(modal).hasClass('modal_active') ) {
            $(modal).addClass('modal_active');
            $('.overlay_modal').fadeIn(400);                          
        } else {
            $(modal).removeClass('modal_active');                          
            $('.overlay_modal').fadeOut(400);                          
        }
    });

    $(".js-modal-close").on('click', function(){
        $('.modal').removeClass('modal_active');
        $('.overlay_modal').fadeOut(400);                          
    });
    // ---------------------------



$('.js-show-signup-message-success').on('click', function(){
    $(this).html('<i class="fa fa-check" aria-hidden="true"></i>&nbsp;&nbsp;Отправлено!')
});

 
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

