import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

export default function slidersJs() {

  const swiperHome = document.querySelectorAll('.swiper-home');

  if (swiperHome) {
    swiperHome.forEach(item => {
      const prev = item.querySelector('.arrow-prev');
      const next = item.querySelector('.arrow-next');

      const swiper = new Swiper(item, {
        slidesPerView: 'auto',

      });
    })
  }




}
