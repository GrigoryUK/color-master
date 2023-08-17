import disableScroll from 'disable-scroll'
import $ from 'jquery'
import { isDesktop, isMobile, isTablet } from "../../functions/check-viewport"

import scrollLock from 'scroll-lock'

export const mutationCatalogJS = () => {
    const block = document.querySelector('.blockGrid--catalog');
    // const blocock = document.querySelector('.blockGrid__content');

    // const button = $('.btn-test');

    // const object = '<button class="btn-reset itemC__button--price" data-feedback-open-bid> Запросить коммерческое предложение</button>'

    // button.on('click', function() {
    //     blocock.innerHTML = object;

    // })

    if (block) {
      let observer = new MutationObserver(() => {
        helperFeedback();
      });


      observer.observe(block, {
        childList: true,
        subtree: true,
        characterDataOldValue: true
      });
    }


    function helperFeedback() {
      const buttonConnection = $('*[data-feedback-open-bid]');
      const menu = $('*[data-feedback-always]');

      buttonConnection.on('click', function () {
        if (isDesktop()) {
          disableScroll.on()
        }
        if (isMobile() || isTablet()) {
          scrollLock.disablePageScroll();
        }
        menu.fadeIn('fast', function () {
          menu.find('.feedback__connection').addClass('active');
        });

      });
    }



}
