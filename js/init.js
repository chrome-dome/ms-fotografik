(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy();

  }); 
})(jQuery); 

$(window).on('scroll', function () {
  if ($(window).scrollTop() > 700) {
      $('.arrowScrollTop').addClass('active');
  } else {
      $('.arrowScrollTop').removeClass('active');
  }
});

$('.arrowScrollTop').click(function () {
  $('html, body').animate({
      scrollTop: 0
  }, 300, "linear");
});
