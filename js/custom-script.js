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

// Icons list 
 $('.step-icons').on('click', 'li', function() {
    $('.step-icons li.active').removeClass('active');
    $(this).addClass('active');
});

 $('.select-list').on('click', 'li', function() {
    $('.select-list li.active').removeClass('active');
    $(this).addClass('active');
});
 