import $ from "jquery";
import Swiper, { FreeMode, Navigation, Pagination, Scrollbar } from "swiper";
Swiper.use([Navigation, Pagination, FreeMode, Scrollbar]);
export default function colorPickerJS() {
  (function sliderColor() {
    const container = document.querySelector(".blockColorPicker");

    if (container) {
      const slider = container.querySelector(".swiper-color");
      const prev = container.querySelector(".arrow-prev");
      const next = container.querySelector(".arrow-next");

      const swiper = new Swiper(slider, {
        navigation: {
          nextEl: next,
          prevEl: prev,
        },
        spaceBetween: 5,
        freeMode: true,
        scrollbar: {
          el: ".swiper-scrollbar",
          draggable: true,
          dragSize: 100,
        },

        breakpoints: {
          0: {
            slidesPerView: "auto",
          },

          576: {
            slidesPerView: "auto",
          },

          1025: {
            slidesPerView: 5,
          },

          1640: {
            slidesPerView: 5,
          },

          1650: {
            slidesPerView: 7,
          },
        },
      });

      const setColorActive = (items, item, result) => {
        items.removeClass("active");
        item.addClass("active");
        const attrColor = item.attr("data-color");
        const attrNumber = item.attr("data-number");
        const attrBase = item.attr("data-base");
        localStorage.setItem("user-select-color", attrColor);
        result.text(`NCS S ${attrNumber}-${attrBase}`);
      };

      (function setBackground() {
        const items = $(".item--color");

        items.each(function (e) {
          const attrColor = $(this).attr("data-color");
          $(this).css("background", attrColor);
        });
      })();

      (function changeLocation() {
        const buttonRoom = $(".data-button-colorpicker-room");
        const buttonFC = $(".data-button-colorpicker-facad");
        const contRoom = $(".data-picker-hard");
        const contFC = $(".data-picker-normal");

        buttonRoom.on("click", function () {
          $(this).addClass("active");
          buttonFC.removeClass("active");
          contFC.css("display", "none");
          contRoom.css("display", "block");
        });

        buttonFC.on("click", function () {
          $(this).addClass("active");
          buttonRoom.removeClass("active");

          contRoom.css("display", "none");
          contFC.css("display", "block");
        });
      })();

      (function toggleActive() {
        const item = $(".item--color");
        const result = $(".blockColorPicker__result--code").find("a");

        item.on("click", function () {
          setColorActive(item, $(this), result);
        });
      })();

      (function startClickColor() {
        const item = $(".item--color").eq(10);
        item.click();
      })();
    }
  })();

  function clickPicture(item) {
    const picture = $(item);

    picture.on("click", function () {
      const color = localStorage.getItem("user-select-color");
      $(this).css("background", color);
    });
  }

  // clickPicture('.data-picker-hard')
  clickPicture(".data-picker-normal");

  function changeLocation() {
    const buttonRoom = $(".data-button-colorpicker-room");
    const buttonFC = $(".data-button-colorpicker-facad");
    const contRoom = $(".data-picker-hard");
    const contFC = $(".data-picker-normal");

    buttonRoom.on("click", function () {
      $(this).addClass("active");
      buttonFC.removeClass("active");
      contFC.fadeOut("fast");
      contRoom.fadeIn("fast");
    });

    buttonFC.on("click", function () {
      $(this).addClass("active");
      buttonRoom.removeClass("active");

      contRoom.fadeOut("fast");
      contFC.fadeIn("fast");
    });
  }

  changeLocation();

  function canvasSleep() {
    const canvas = document.getElementById("canvasRoom");

    if (canvas) {
      const ctx = canvas.getContext("2d");
      const img = document.querySelector(".data-img-room");

      function clickTop() {
        $(".data-picker-top").on("click", function () {
          const color = localStorage.getItem("user-select-color");
          console.log(color);

          top(color);
        });
      }

      function top(color) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(842, 0);
        ctx.lineTo(772, 66);
        ctx.lineTo(0, 66);
        ctx.lineTo(0, 0);
        console.log(2);
        ctx.fillStyle = color;

        ctx.fill();
      }
      top();
      clickTop();
      // clickTop()

      ctx.drawImage(img, 0, 0);
    }
  }

  canvasSleep();
}
