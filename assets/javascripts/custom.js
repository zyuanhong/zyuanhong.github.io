(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v2.12&appId=1310500319071955&autoLogAppEvents=1';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

$(function(){

    $('.btn-top').click(function(){
		$('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 750);
		return false;
	});
    $('.btn-anchor').click(function(){
		$('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top -100
    }, 750);
		return false;
	});

    $(".input-number").TouchSpin({
        min: 0,
        max: 99,
        step: 1,
        decimals: 0,
        boostat: 5,
        maxboostedstep: 10,
        buttonup_class: 'btn btn-outline btn-up',
        buttondown_class: 'btn btn-outline btn-down'
    });

    $('.box-select').click(function() {
        var index = $(this).index();
        if($(this).hasClass('active')) {
        } else {
            $('.box-select').removeClass('active');
            $(this).addClass('active')
        }
    });
    $(".chk").on('click', function() {
              var $box = $(this);
              if ($box.is(":checked")) {
                var group = "input:checkbox[name='" + $box.attr("name") + "']";
                $(group).prop("checked", false);
                $box.prop("checked", true);
              } else {
                $box.prop("checked", false);
              }
            });

    $('.readmore-intro').readmore({
        speed: 500,
        collapsedHeight: 230,
        moreLink: '<div class="mt-3 text-center"><a class="btn btn-outline-primary" href="#">展開完整內容</a></div>',
        lessLink: '<div class="mt-3 text-center"><a class="btn btn-outline-primary" href="#">收合完整內容</a></div>',
    });

    $(document).on( 'shown.bs.tab', 'a[data-toggle=\'tab\']', function (e) {
        $('.readmore-intro').readmore({
            speed: 500,
            collapsedHeight: 230,
            moreLink: '<div class="mt-3 text-center"><a class="btn btn-outline-primary" href="#">展開完整內容</a></div>',
            lessLink: '<div class="mt-3 text-center"><a class="btn btn-outline-primary" href="#">收合完整內容</a></div>',
        });
    })

    $('.readmore-review').readmore({
        speed: 500,
        collapsedHeight: 35,
        moreLink: '<a class="my-1 font-small" href="#"><u>more</u></a>',
        lessLink: '',
    });

});

$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 300) {
        $('.nav-fixed').fadeIn();
    } else {
      $('.nav-fixed').fadeOut();
  }
});

$('.slider-kv').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
});

$('.slider-single').slick({
    arrows: true,
    dots: false,
});

$('.slider-items-6').slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
});

$('.slider-items-5').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
});

$('.slider-items-4').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
