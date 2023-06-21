import $ from 'jquery';
import {isDesktop, isMobile, isTablet} from "../../functions/check-viewport";
import disableScroll from 'disable-scroll';
import {disableScrollCustom, enableScrollCustom} from "../library/srollMove";


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

  (function toggleFeedback() {

    const menu =  $('*[data-feedback-always]');


    if (menu) {
      const menuMain = $('*[data-menu-always]');
      const buttonConnection = $('*[data-feedback-open-bid]');
      const buttonConnectionMobile = $('*[data-feedback-open-bid-mobile]');
      const buttonCallMobile = $('*[data-feedback-open-phone-mobile]');
      const buttonCall = $('*[data-feedback-open-phone]');
      const buttonClose =  $('*[data-feedback-close]');


      buttonConnection.on('click', function () {
       if (isDesktop()) {
         disableScroll.on()
       }
       if (isMobile() || isTablet()) {
         disableScrollCustom()
       }
        menu.fadeIn('fast', function () {
          menu.find('.feedback__connection').addClass('active');
        });


      })

      buttonConnectionMobile.on('click', function () {
        menu.fadeIn('fast', function () {
          menu.find('.feedback__connection').addClass('active');
        });
      })

      buttonCallMobile.on('click', function () {
        menu.fadeIn('fast', function () {
          menu.find('.feedback__call').addClass('active');
        });
      })

      buttonCall.on('click', function () {
        if (isDesktop()) {
          disableScroll.on()
        }
        if (isMobile() || isTablet()) {
          disableScrollCustom()
        }
        menu.fadeIn('fast', function () {
          menu.find('.feedback__call').addClass('active');
        });

      })

      buttonClose.on('click', function (e) {
        e.preventDefault();
        menu.find('.feedback__connection').removeClass('active');
        menu.find('.feedback__call').removeClass('active');
        menuMain.fadeOut('fast');
        menu.fadeOut('slow');
        if (isDesktop()) {
          disableScroll.off()
        }
        if (isMobile() || isTablet()) {
          enableScrollCustom()
        }

      })
    }




  })();

}
