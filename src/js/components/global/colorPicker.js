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
        const attrName = item.attr("data-name");
        localStorage.setItem("user-select-color", attrColor);
        result.text(`${attrName}`);
      };

      (function setBackground() {
        const items = $(".item--color");

        items.each(function (e) {
          const attrColor = $(this).attr("data-color");
          $(this).css("background", attrColor);
        });
      })();

      (function toggleActive() {
        const item = $(".item--color");
        const result = $(".blockColorPicker__result--code").find(".code");

        item.on("click", function () {
          setColorActive(item, $(this), result);
        });
      })();

      (function startClickColor() {
        const item = $(".item--color").eq(4);
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

  function changeLocation() {
    const tabLabels = document.querySelectorAll(".blockColorPicker__buttons a");
    const tabPanes = document.querySelectorAll(
      ".tab-contents-color .tab-contents"
    );

    if (tabPanes) {
      function activateTab(e) {
        e.preventDefault();

        tabLabels.forEach(function (label, index) {
          label.classList.remove("active");
        });
        [].forEach.call(tabPanes, function (pane, index) {
          pane.classList.remove("active");
        });
        e.target.classList.add("active");
        const clickedTab = e.target.getAttribute("href");
        document.querySelector(clickedTab).classList.add("active");
      }

      tabLabels.forEach(function (label, index) {
        label.addEventListener("click", activateTab);
      });
    }
  }

  changeLocation();
  clickPicture(".data-picker-fasad-one");
  clickPicture(".data-picker-fasad-two");
  clickPicture(".data-bg-room-top-1");
  clickPicture(".data-bg-room-wall-1");
  clickPicture(".data-bg-room-top-2");
  clickPicture(".data-bg-room-wall-2");
}
