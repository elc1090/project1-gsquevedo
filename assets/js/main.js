$(document).ready(function() {

    let navbarlinks = $('#navbar .scrollto');
    const navbarlinksActive = () => {
      let position = $(window).scrollTop() + 200;
      navbarlinks.each(function() {
        if (!$(this).attr('href')) return;
        let section = $($(this).attr('href'));
        if (!section.length) return;
        if (position >= section.offset().top && position <= (section.offset().top + section.outerHeight())) {
          $(this).addClass('active');
        } else {
          $(this).removeClass('active');
        }
      });
    }
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
  
    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $(this).toggleClass('bi-list bi-x');
    });
  
    $(document).on('click', '.scrollto', function(e) {
      if ($(this).attr('href')) {
        e.preventDefault();
        let body = $('body');
        if (body.hasClass('mobile-nav-active')) {
          body.removeClass('mobile-nav-active');
          $('.mobile-nav-toggle').toggleClass('bi-list bi-x');
        }
        scrollto($(this).attr('href'));
      }
    });

    if (window.location.hash) {
      let section = $(window.location.hash);
      if (section.length) {
        scrollto(window.location.hash);
      }
    }
});
  