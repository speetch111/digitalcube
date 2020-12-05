let header_height = $('.header__wrapper').innerHeight();

function css_styles() {
  if ($(window).width() > 750 && $(window).width() < 1280)
    $('.header__nav').css({
      'top': header_height,
    });

  $('.header').css({
    'height': header_height,
  });

}

function append_contacts() {
  if ($(window).width() < 750) {
    $('.mobile__menu-block').append($('.header__contacts'));

    $('.mobile__menu-block').css({
      'top': header_height,
    });

  }
}

$(window).resize(css_styles, append_contacts);

$(function () {

  css_styles();
  append_contacts();

  $('.mobile__hamburger').click(function () {
    $('.mobile__menu-block').toggleClass('opened');
    $('body').toggleClass('oh');
    $(this).toggleClass('opened');
  });

  $('.header__nav-list li a').click(function () {
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).legth != 0) {
      $('html, body').animate({
        scrollTop: $(scroll_el).offset().top - 160
      }, 500);

      if ($(window).width() < 750) $('.mobile__hamburger').click();
    }
    return false;
  });

  $('.scroll-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 500);

    return false;
  });

  $(window).scroll(function () {
    var positionScroll = $(window).scrollTop();


    if (positionScroll > 300)
      $('.scroll-top').fadeIn();
    else
      $('.scroll-top').fadeOut();

  });

});