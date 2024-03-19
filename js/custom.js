$(function () {

    $('.MainVisual .main_visual_slide').slick({
        dots: false,
        arrows: false,
        pauseOnHover: false,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        cssEase: 'linear'
    });

    $('.MainInfo .info_slide').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
    });

    $('.MainSlide .sub_tab_inner').slick({
        dots: false,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
    });

    $('.MainSlide .arrows .left').on('click', function () {
        $('.sub_tab_inner').slick('slickPrev');
    });
    $('.MainSlide .arrows .right').on('click', function () {
        $('.sub_tab_inner').slick('slickNext');
    });


    $('.list_area .itm').on('click', function () {
        $('.itm').removeClass('on');

        $(this).addClass('on');
    });


    $('.main_tab li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index();
        $('.tab_content .content')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on');
        $(this)
            .addClass('on')
            .siblings()
            .removeClass('on');
    });

 $('.mopen').on('click', function () {
    $('.gnb').toggleClass('on');
    $(this).toggleClass('on');
  });

    $('.sub_tab li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index();
        $('.tab_area .content')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on');
        $(this)
            .addClass('on')
            .siblings()
            .removeClass('on');
    });

     $('#Header .header_bottom .gnb>ul>li>a').on('click', function (e) {
        e.preventDefault();
        const IDX = $(this).parent().index();

        if ($('#Header .header_bottom .gnb').hasClass('on')) {
            $('#Header .header_bottom .gnb .sub').eq(IDX).toggleClass('on');
            if ($('#Header .header_bottom .gnb .sub').eq(IDX).hasClass('on')) {
                $('#Header .header_bottom .gnb .sub').eq(IDX).slideDown();
            } else {
                $('#Header .header_bottom .gnb .sub').eq(IDX).slideUp();
            }
        } else {
            return
        }
    })
})

