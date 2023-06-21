import Swiper, {Navigation, Pagination, FreeMode, Scrollbar} from 'swiper';
Swiper.use([Navigation, Pagination, FreeMode, Scrollbar]);
import $ from 'jquery';
export default function colorPickerJS() {


  (function sliderColor() {
    const container = document.querySelector('.blockColorPicker');

    if (container) {
      const slider = container.querySelector('.swiper-color');
      const prev = container.querySelector('.arrow-prev');
      const next = container.querySelector('.arrow-next');

      const swiper = new Swiper(slider, {
        navigation: {
          nextEl: next,
          prevEl: prev,
        },
        spaceBetween: 5,
        freeMode: true,
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true,
          dragSize: 100,
        },

        breakpoints: {

          0: {
            slidesPerView: 'auto',
          },

          576: {
            slidesPerView: 'auto',
          },

          1025: {
            slidesPerView: 5,
          },

          1640: {
            slidesPerView: 5,
          },

          1650: {
            slidesPerView: 7,
          }
        }
      });

      const setColorActive = (items, item, result) => {
        items.removeClass('active');
        item.addClass('active');
        const attrColor = item.attr('data-color');
        const attrNumber = item.attr('data-number');
        const attrBase = item.attr('data-base');
        localStorage.setItem('user-select-color', attrColor);
        result.text(`NCS S ${attrNumber}-${attrBase}`);
      }


      (function setBackground() {
        const items = $('.item--color');

        items.each(function (e){
          const attrColor = $(this).attr('data-color');
          $(this).css('background', attrColor);
        })
      })();







      (function toggleActive(){
        const item = $('.item--color');
        const result = $('.blockColorPicker__result--code').find('a');

        item.on('click', function () {
          setColorActive(item, $(this), result);
        })
      })();

      (function clickPicture(){
        const picture = $('.blockColorPicker__picture');


        picture.on('click', function () {
          const color = localStorage.getItem('user-select-color');
          $(this).css('background', color);
        });
      }());

      (function startClickColor() {
        const item = $('.item--color').eq(10);
        item.click();
      })();

    }

  })();
}
