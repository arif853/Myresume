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