$(function () {
  //submenu를 숨긴다.
  $('.submenu_wrap').hide();
  $('.gnb li').mouseenter(function () {
    $('.submenu_wrap').stop().slideDown();
  });
  //지칭을 하기 위해 gnb와 submenu를 포함하는 box를 만들어야함.
  $('#gnb_wrap').mouseleave(function () {
    $('.submenu_wrap').stop().slideUp();
  });

  $("#slideshow > div:gt(0)").hide();

});

//메인 슬라이드
$(function () {
  setInterval(function () {
    $('#slideshow > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow');
  }, 3000);
});

//모바일 메뉴
$(document).ready(function () {
  $('.menu_btn>a').on('click', function () {
    $('.menu_bg').show();
    $('.sidebar_menu').show().animate({
      left: 0
    });
  });
  $('.close_btn>a').on('click', function () {
    $('.menu_bg').hide();
    $('.sidebar_menu').animate({
      left: '-' + 100 + '%'
    }, function () {
      $('.sidebar_menu').hide();
    });
  });

});

$(document).ready(function () {
  $('#gnb_wrap').hide();
  // Header scroll class
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#gnb_wrap').addClass('header-scrolled');
      $('#gnb_wrap').slideDown(0);
    } else {
      $('#gnb_wrap').removeClass('header-scrolled');
      $('#gnb_wrap').slideUp(0);
    }
  })

});



$(function () {
  $('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: {     //자동슬라이드 (false-비활성화)
      delay: 2000, // 시간 설정
      disableOnInteraction: false,
    },
    arrows: false, /* 화살표 */
  });
});
$(function () {
  $('.fade1').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: true, /* 화살표 */

  });
});

