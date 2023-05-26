import $ from 'jquery';
import {isDesktop, isMobile, isTablet} from "../../functions/check-viewport";
import {disableScrollCustom} from "../../functions/disable-scroll";
import {enableScrollCustom} from "../../functions/enable-scroll";


export function headerJs() {
  if (isDesktop()) {

    (function headerDropdownsDesk() {
      const container = $('.header__bottom--buttons');
      if (container) {
        const buttons = container.find('.dropdownC');
        const menu = container.find('.header__menu--display');
        buttons.on('click', function(e){
          e.stopPropagation();
          $('.dropdownC').not($(this)).removeClass('dropdownC-catalog-active');
          $(this).toggleClass('dropdownC-catalog-active');

        });

        $(document).on('click', function() {
          buttons.removeClass('dropdownC-catalog-active');
        });


        menu.on('click', function (e) {
          e.stopPropagation()
        })

      }
    })()

  }

  if (isMobile() || isTablet()) {

    (function toggleSearchHeader() {
      const container = $('.header__container--tablet');
      if (container) {
        const buttonOpen = container.find('.header__buttons').find('.btn-search');
        const containerSearch = container.find('.header__search--display');
        const buttonClose = containerSearch.find('.btn-close');

        buttonOpen.on('click', function () {
          containerSearch.fadeIn('fast', function () {
            setTimeout(() => {
              containerSearch.find('input').focus()
            }, 100)
          })
        })

        buttonClose.on('click', function () {
          containerSearch.fadeOut('fast')
        })
      }
    })();

    (function toggleMenuHeader() {
      const menu = $('*[data-menu-always]');
      const buttonOpen = $('*[data-burger-open]');
      const buttonClose = $('*[data-burger-close]');

      if (menu) {
        buttonOpen.on('click', function () {
          menu.fadeIn()
          disableScrollCustom()
        })

        buttonClose.on('click', function () {
          menu.fadeOut()
          enableScrollCustom()
        })
      }
    }());

    (function AccordionHeader() {
      const accordions = document.querySelectorAll('.menu-item-has-children');
      if (accordions) {
        accordions.forEach(el => {
          const button = el.querySelector('a');
          button.addEventListener('click', e => {
            e.preventDefault();
            let self = e.currentTarget;
            const dropdown = self.closest('.menu-item-has-children');
            const content = dropdown.querySelector('.sub-menu');
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


  }

}
