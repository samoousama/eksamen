$(document).ready(function() {
    // Transition effect for navbar 
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if($(this).scrollTop() > 80) { 
          $('.navbar').addClass('nav-white-bg');
      } else {
          $('.navbar').removeClass('nav-white-bg');
      }
    });
});