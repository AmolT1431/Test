  new Swiper('.card-wrapper', {
    // Optional parameters
    effect: 'fade',
    direction: 'horizontal',
    fadeEffect: {
        crossFade: true,            // Enable cross-fade between slides
      },
    loop: true,
    autoplay: {
        delay: 3000,             // Autoplay delay (3 seconds)
        disableOnInteraction: false, // Continue autoplay after interaction
      },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    speed: 1000,
  });