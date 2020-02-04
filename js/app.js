var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})

mySwiper.on('slideChange', function () {
  $('.page-title').removeClass(function(index, className) {
    return (className.match(/slide-\S+/g) || []).join(' ');
  });
  $('.page-title').addClass('slide-' + mySwiper.realIndex);
});
