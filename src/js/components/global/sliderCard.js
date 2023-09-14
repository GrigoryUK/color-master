import Swiper, { FreeMode, Navigation, Pagination, Thumbs } from 'swiper'

Swiper.use([Navigation, Pagination, Thumbs, FreeMode]);

export default function sliderCardJs() {
  const containerBig = document.querySelector('.blockSliderCard--big');
  const container = document.querySelector('.blockSliderCard');
  const containerSmall = document.querySelector('.blockSliderCard--small');

  if (container) {
    const sliderBig = containerBig.querySelector('.slider-card-big');
    const sliderSmall = containerSmall.querySelector('.slider-card-small');
    const prevBig = containerBig.querySelector('.arrow-prev');
    const prevSmall = containerSmall.querySelector('.arrow-prev');
    const nextBig = containerBig.querySelector('.arrow-next');
    const nextSmall = containerSmall.querySelector('.arrow-next');

    nextSmall.addEventListener('click', el => {
      nextBig.click()
    })

    prevSmall.addEventListener('click', el => {
      prevBig.click()
    })


    const swiperSmall = new Swiper(sliderSmall, {
      // loop: true,
      // navigation: {
      //   nextEl: nextBig,
      //   prevEl: prevBig,
      // },

      freeMode: true,
      slidesPerView: 'auto',

      breakpoints: {

        0: {
          // slidesPerView: 4,
        },

        576: {
          slidesPerView: 'auto',
        },

        1025: {
          // slidesPerView: 3,
        },

        1440: {
          // slidesPerView: 3,
        },

        1600: {
          // slidesPerView: 'auto',
        }
      }


    });

    const swiperBig = new Swiper(sliderBig, {
      slidesPerView: 1,
      // loop: true,
      navigation: {
        nextEl: nextBig,
        prevEl: prevBig,
      },

      thumbs: {
        swiper: swiperSmall
      },


    });


  }




}
