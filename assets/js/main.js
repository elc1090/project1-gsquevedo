$(document).ready(function() {

    const scrollto = (el) => {
      let elementPos = $(el).offset().top;
      $('html, body').animate({
        scrollTop: elementPos
      }, 600, 'easeInOutCubic');
    }
  
    let backtotop = $('.back-to-top');
    if (backtotop.length) {
      const toggleBacktotop = () => {
        if ($(window).scrollTop() > 100) {
          backtotop.addClass('active');
        } else {
          backtotop.removeClass('active');
        }
      }
      toggleBacktotop();
      $(window).scroll(toggleBacktotop);
    }

    if (window.location.hash) {
      let section = $(window.location.hash);
      if (section.length) {
        scrollto(window.location.hash);
      }
    }
});
  