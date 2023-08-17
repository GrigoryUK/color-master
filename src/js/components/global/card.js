import $ from 'jquery';
import {isDesktop, isMobile, isTablet} from "../../functions/check-viewport";

export default function cardJs() {

  (function accordionCardMobile() {
    const accordions = document.querySelectorAll('.dropdownMobile');
    if (accordions) {
      accordions.forEach(el => {
        const button = el.querySelector('.button--dropdown');
        button.addEventListener('click', e => {

          let self = e.currentTarget;
          const dropdown = self.closest('.dropdownMobile');
          const content = dropdown.querySelector('.dropdownMobile__container');
          self.classList.toggle('open');
          content.classList.toggle('open');


          if (self.classList.contains('open')) {
            content.style.maxHeight = content.scrollHeight + 'px';
          } else {
            content.style.maxHeight = null;
          }
        });
      });
    }
  })();

  (function twoButtons() {
    const buttonCalc = $('.buttonC--calc');
    const buttonColor = $('.buttonC--config');

    if (buttonCalc) {

      buttonCalc.on('click', function () {
        main(
          $(".tabs--card"),
          $('.tabs__nav-btn--card--calc--desk'),
          $(".blockCalculator--anchor"),
          $('.dropdownMobile--calc')
        )
      })

      buttonColor.on('click', function () {
        main(
          $(".tabs--card"),
          $('.tabs__nav-btn--card--color--desk'),
          $(".blockColorPick--anchor"),
          $('.dropdownMobile--colorPicker')
        )
      })



      function main(deskCont, deskButton, tabCont, mobCont) {
        if (isDesktop()) {
          scrollTo(deskCont, 0)
          deskButton.click()
        }
        if (isTablet()) {
          scrollTo(tabCont, 100)
        }
        if (isMobile()) {
          scrollTo(mobCont, 80);
          if (!mobCont.find('.button--dropdown').hasClass('open')) {
            mobCont.find('.button--dropdown').click();
          }

        }
      }

      function scrollTo(item, dop) {
        $('html, body').animate({
          scrollTop: item.offset().top - dop
        }, 500);
      }

    }
  })();
}
