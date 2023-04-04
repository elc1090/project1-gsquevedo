$(document).ready(function() {

    let navbarlinks = $('#navbar .scrollto');
    const navbarlinksActive = () => {
      let position = $(window).scrollTop();
      navbarlinks.each(function() {
        if (!$(this).attr('href')) return;
        let section = $($(this).attr('href'));
        if (!section.length) return;
        if (position >= section.offset().top && position <= (section.offset().top + section.height())) {
          $(this).addClass('active');
        } else {
          $(this).removeClass('active');
        }
      });
    }
    console.log(navbarlinks)
    navbarlinksActive();
    $(window).scroll(navbarlinksActive);
  

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
  