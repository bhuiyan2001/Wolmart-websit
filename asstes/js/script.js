$(function () {
  'use strict';


  // banner slide start
  $('#banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
  });

  // countdown js
  $('.countDown').countdown('2024/12/30', function (event) {
    $(this).html(event.strftime(' %d days %H:%M:%S'));
  });

  // mega slide part
  $('.mega_slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    fade: true,
    prevArrow: '<i class="fas fa-angle-left prv_arr"></i>',
    nextArrow: '<i class="fas fa-angle-right nxt_arr"></i>',
  });
  // right part slide 
  $('.right_part_slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    fade: true,
    prevArrow: '<i class="fas fa-angle-left prv_arr"></i>',
    nextArrow: '<i class="fas fa-angle-right nxt_arr"></i>',
  });
  // blog popular part slide 
  $('.popular-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    prevArrow: '<i class="fas fa-angle-left prv_arr"></i>',
    nextArrow: '<i class="fas fa-angle-right nxt_arr"></i>',
  });
  // menu fixed js

  $(window).on('scroll', function () {
    var abc = $(this).scrollTop();
    if (abc > 670) {
      $('#menu').addClass('fixt_menu');
    } else {
      $('#menu').removeClass('fixt_menu');
    }
  });

  $(window).on('scroll', function () {
    var abc = $(this).scrollTop();
    if (abc > 670) {
      $('.remove_list').addClass('ul_remove');
    } else {
      $('.remove_list').removeClass('ul_remove');
    }
  });
  // calendar js start
  $(function () {
    $('.calendar-container').calendar();
  });

  // blog fixed scroll top js
  $(window).on('scroll', function () {
    var abc = $(this).scrollTop();


    if (abc > 950) {
      $('.blog_categories_part').addClass('fixt_categories');
    } else {
      $('.blog_categories_part').removeClass('fixt_categories');
    }
  });

  // // counter slide start
  // $('.counter').slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   autoplaySpeed: 2000,
  //   arrows: false,
  //   dots: false,
  // });

  // popUp js start

 $('.close').on('click', function(){
   $('.popup').fadeOut();
 });

});