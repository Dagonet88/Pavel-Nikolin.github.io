function accordion(){

    if($(window).width() <= 999){

        $('.faq .answer').hide();

        $('.pluses').appendTo('.content .cont:first');
        $('<div class="hide-arrows"></div>').appendTo('.reviews_block');
        $('<div class="hide-arrows-two"></div>').appendTo('.pay_type');

        $('.faq .question').on('click', function(e){
            e.preventDefault();

            if(!$(this).hasClass('active')){
                $('.faq .question').removeClass('active');
                $('.faq .question').next().stop(true,true).slideUp(1000);
                $(this).addClass('active');
                $(this).next('div').stop(true,true).slideDown(1000);
            }

        });

        $('.faq .question').on('dblclick', function(e){
            e.preventDefault();

            if($(this).hasClass('active')){
                $(this).removeClass('active');
                $(this).next().stop(true,true).slideUp(1000);
            }
        });

        if($('.with-girl').length){
            $('.work_hard').hide();
        } else {
            $('.work_hard').text('Мы действительно хорошо работаем');
        }

        $('.sb_head').text('Отзывы о найшей работе');
        $('.pay_info .left_text').text('Принимаем к оплате');
        $('.content-left .cl-head').text('Курсовая работа на заказ');

    } else {

        $('.faq .answer').show();
        $('.faq .question').removeClass('active');
        $('.faq .question').off();
        $('.work_hard').show();
        $('.sb_head').text('Отзывы о работе сайта «Напишем»');
        $('.content-left .cl-head').text('Курсовая работа по налоговой системе России на заказ');
        $('.pluses').appendTo('.content-left');

    }
}

$(function(){

    var settings = function() {
        var big = {
            minSlides:1,
            maxSlides:2,
            slideWidth:428,
            slideMargin:42,
            pager:true,
            useCSS:false,
            controls:false,
            infiniteLoop:false,
            preventDefaultSwipeX: 0
        };

        var mini = {
            minSlides:1,
            maxSlides:1,
            slideWidth:530,
            slideMargin:42,
            pager:true,
            useCSS:false,
            controls:false,
            infiniteLoop:false,
            preventDefaultSwipeX: 0
        };

        if($(window).width()<=645){

            $('<div class="hide-arrows"></div>').appendTo('.bx-has-pager');
            return mini;

        } else {

            return big;

        }

    };

    var mySlider;

    function tourLandingScript() {
        mySlider.reloadSlider(settings());
    }

    mySlider = $('#reviews_slider').bxSlider(settings());
    $(window).resize(tourLandingScript);



    accordion();

    $('.sb_head').on('click', function(){

        $(this).next('.a_block').slideToggle(1000);

    });


    $('.toogler').on('click', function(){

        $('.screen-image').toggleClass('active');

    });

});

function showBtn (){

    if($('.content-right').length){
        if($(window).scrollTop() >= $('.content-right').offset().top + $('.content-right').height()){
            $('.bot_btn').stop(true,true).fadeIn(500);
        } else {
            $('.bot_btn').stop(true,true).fadeOut(500);
        }

        $('.bot_btn').on('click', function(e){
            e.preventDefault();

            var startPos = $('.content-right').offset().top;

            $(window).scrollTop(startPos);
        });
    }

}

$(window).resize(function(){
    accordion();
});


$(window).scroll(function(){

    if($(window).width() <= 999){

        if($('#price_form .sb_head').length){
            if($(window).scrollTop() >= $('#price_form .sb_head').offset().top){
                $('.bot_btn').stop(true,true).fadeIn(500);
            } else {
                $('.bot_btn').stop(true,true).fadeOut(500);
            }
        }

        showBtn ();
    }



});