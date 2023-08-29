const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  clickable: true,

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },

  breakpoints: {
    320: {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20
    },
    993: {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 40
    }
  },
});

const galleryThumbs = new Swiper(".tabs", {
  slidesPerView: 4,
  direction: 'vertical',
  breakpoints: {
      768: {
          direction: 'horizontal',
      },
  }
});

const galleryMain = new Swiper(".gallery", {
  watchOverflow: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  preventInteractionOnTransition: true,
  effect: 'fade',
  fadeEffect: {
      crossFade: true
  },
  thumbs: {
      swiper: galleryThumbs
  }
});

galleryMain.on('slideChangeTransitionStart', function () {
  galleryThumbs.slideTo(galleryMain.activeIndex);
});

galleryThumbs.on('transitionStart', function () {
  galleryMain.slideTo(galleryThumbs.activeIndex);
});