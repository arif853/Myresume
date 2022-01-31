
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

$('.bg-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true
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
