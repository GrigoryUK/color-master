import $ from 'jquery';
import {isDesktop, isMobile, isTablet} from "../../functions/check-viewport";

export default function collapseJs() {

  (function toggleCollapse() {
    const container = $('.collapseC');

    if (container) {
      const textBlock = container.find('.collapseC--text');

      function heightSize () {
        if (isDesktop() || isTablet()) {
          return 78;
        }

        if (isMobile()) {
          return 82
        }
      }


      const textHeight = textBlock.innerHeight();
      const button = container.find('.collapseC--button');
      const shadow = container.find('.collapseC--shadow');

      const height = heightSize();
      const h = textBlock.css('height', height);

      button.on('click', function () {
        $(this).toggleClass('active');

        if( textBlock.innerHeight() === height ) {
          textBlock.animate({ height: textHeight + 6 }, 500);
          $(this).find('span').text('Скрыть');
          // shadow.addClass('open');
        } else {
          textBlock.animate({ height: height }, 500);
          $(this).find('span').text('Развернуть');
          // setTimeout(() => {
          //   // shadow.removeClass('open');
          // }, 500)
        }
      })
    }
  })()
}
