import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

export default function slidersJs() {

  const swiperHome = document.querySelectorAll('.blockSlider-home');
  const swiperHistory = document.querySelectorAll('.blockSlider-history');


  if (swiperHome) {
    swiperHome.forEach(item => {
      const slider = item.querySelector('.swiper-home')
      const prev = item.querySelector('.arrow-prev');
      const next = item.querySelector('.arrow-next');

      const swiper = new Swiper(slider, {
        navigation: {
          nextEl: next,
          prevEl: prev,
        },

        breakpoints: {

          0: {
            slidesPerView: 'auto',
            spaceBetween: 10,
          },

          576: {
            slidesPerView: 2,
          },

          900: {
            slidesPerView: 3,
          },

          1025: {
            slidesPerView: 'auto',
          }
        }
      });
    })
  }


  if (swiperHistory) {
    swiperHistory.forEach(item => {
      const slider = item.querySelector('.swiper-history')
      const prev = item.querySelector('.arrow-prev');
      const next = item.querySelector('.arrow-next');

      const swiper = new Swiper(slider, {
        // loop: true,
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

        navigation: {
          nextEl: next,
          prevEl: prev,

        },

        breakpoints: {

          0: {
            slidesPerView: 1,
            speed: 1000,
            spaceBetween: 15,
          },


          768: {
            slidesPerView: 2,
            speed: 1500,
            spaceBetween: 15,
          },

          1366: {
            speed: 1500,
            spaceBetween: 15,
            slidesPerGroup: 3,
          },

          1900: {
            speed: 1500,
            spaceBetween: 15,
            slidesPerGroup: 4,
          }
        }
      });
    })
  }



}
