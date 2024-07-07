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

//toggle
$(function () {

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

});


//tab
function openBoard(evt, boardName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("board");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" opacity", "");
    }
    document.getElementById(boardName).style.display = "block";
    evt.currentTarget.className += " opacity";
}

$(function () {
    $('.popup_wrap').hide();
    $('.popup_open1').click(function () {
        $('.popup_wrap1').fadeIn(0);
    });
    $('.popclose_btn').click(function () {
        $(this).parent().parent('.popup_wrap1').fadeOut(0);
    });
});
$(function () {
    $('.popup_wrap').hide();
    $('.popup_open2').click(function () {
        $('.popup_wrap2').fadeIn(0);
    });
    $('.popclose_btn').click(function () {
        $(this).parent().parent('.popup_wrap2').fadeOut(0);
    });
});
