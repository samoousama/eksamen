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

var header = document.getElementById("checked-List");
var btns = header.getElementsByClassName("listS");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

// Icons list 
 $('.step-icons').on('click', 'li', function() {
    $('.step-icons li.active').removeClass('active');
    $(this).addClass('active');
});