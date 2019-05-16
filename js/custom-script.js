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

$('.step-icons li').find('img').show();
     $('.step-icons li').find('img.active').hide();
     

    $('.step-icons li.active').find('img').hide();
    $('.step-icons li.active').find('img.active').show();
});

 $('.select-list').on('click', 'li', function() {
    $('.select-list li.active').removeClass('active');
    $(this).addClass('active');
});

$('.select select').click(function(){
  $(this).toggleClass('clicked');
});

 
 
