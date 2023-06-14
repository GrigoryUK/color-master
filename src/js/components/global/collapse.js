import $ from 'jquery';

export default function collapseJs() {

  (function toggleCollapse() {
    const container = $('.collapseC');

    if (container) {
      const textBlock = container.find('.collapseC--text');
      const height = 78;
      const textHeight = textBlock.innerHeight();
      const button = container.find('.collapseC--button');


      const h = textBlock.css('height', height);

      button.on('click', function () {
        $(this).toggleClass('active');
        if( textBlock.innerHeight() === height ) {
          textBlock.animate({ height: textHeight + 6 }, 500);
          $(this).find('span').text('Скрыть');
        } else {
          textBlock.animate({ height: height }, 500);
          $(this).find('span').text('Развернуть');
        }
      })
    }
  })()
}
