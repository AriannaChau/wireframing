$(document).ready(function() {
  $('.nav-button').on('click', function() {
    $('.nav').animate({right: 0}, 500);
    setTimeout(function() {
      $('.close-nav').animate({right: '10px'}, 500);
    }, 900);
  });
  $('.close-nav').on('click', function() {
    $('.nav').animate({right: '-200px'}, 500);
    $('.close-nav').animate({right: '-40px'}, 500);
  });
});
