import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

export default function slidersJs() {

  const swiperHome = document.querySelectorAll('.blockSlider-home');
  const swiperHistory = document.querySelectorAll('.blockSlider-history');
  const swiperOrganizations = document.querySelectorAll('.blockSlider-organizations');
  const swiperCompare = document.querySelectorAll('.blockSlider-compare');

  if (swiperOrganizations) {
    swiperOrganizations.forEach(item => {
      const slider = item.querySelector('.swiper-organizations');
      const prev = item.querySelector('.arrow-prev');
      const next = item.querySelector('.arrow-next');

      const swiper = new Swiper(slider, {
        slidesPerView: 1,
        loop: true,

        navigation: {
          nextEl: next,
          prevEl: prev,
        },


      });
    })
  }
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
          },

          1441: {
            slidesPerView: 4,
          }
        }
      });
    })
  }

  if (swiperCompare) {
    swiperCompare.forEach(item => {
      const slider = item.querySelector('.swiper-compare')
      const prev = item.querySelector('.arrow-prev');
      const next = item.querySelector('.arrow-next');

      const swiper = new Swiper(slider, {
        navigation: {
          nextEl: next,
          prevEl: prev,
        },

        breakpoints: {

          0: {
            slidesPerView: 2,
            spaceBetween: 0,
          },

          576: {
            slidesPerView: 2,
            spaceBetween: 15,
          },

          900: {
            slidesPerView: 3,
            spaceBetween: 15,
          },

          1025: {

            slidesPerView: 3,
            spaceBetween: 15,
          },

          1441: {
            slidesPerView: 4,
            spaceBetween: 15,
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
