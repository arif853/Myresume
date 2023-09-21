

//animation scroll js
$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".hidenmenu a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

$(window).load(function(){
  var $container = $('.portfolioContainer');
  $container.isotope({
      filter: '*',
      animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
      }
  });

  $('.portfolioFilter a').click(function(){
    $('.portfolioFilter .current').removeClass('current');
    $(this).addClass('current');

    var selector = $(this).attr('data-filter');
    $container.isotope({
        filter: selector,
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
    return false;
  }); 
});

$('.bg-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true
});
$('.edu_slider').slick({
  dots: false,
  vertical: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow:'<i class="fas fa-chevron-up up"></i>',
  nextArrow:'<i class="fas fa-chevron-down down"></i>',
  autoplay: true,
  autoplaySpeed: 2000,
});

  var typed = new Typed('.mytype', {
    strings: [
      'Developer...',
      'Software Engineer...',
      'Frontend Developer...',
    
    ],
    stringsElement: null,
    typeSpeed: 100,
    startDelay: 0,
    loop: true,
  }); 

  function togglemenu(){
    document.querySelector('#hidenmenu').classList.toggle('active');
  };

  jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});



