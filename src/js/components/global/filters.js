import $ from 'jquery';

export default function filtersJs() {

  (function AccordionFilters() {
    const accordions = document.querySelectorAll('.dropdownC--filters');
    if (accordions) {
      accordions.forEach(el => {
        const button = el.querySelector('.dropdownC__btn');
        button.addEventListener('click', e => {

          let self = e.currentTarget;
          const dropdown = self.closest('.dropdownC--filters');
          const content = dropdown.querySelector('.dropdownC__nav');
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

  (function filterCancel() {
    const container = $('.filterC.primary');
    if (container) {
      const checkbox = container.find('input[type="checkbox"]');
      const button = container.find('.filterC__block--cancel');

      button.on('click', function () {
        checkbox.prop('checked', false);
      })
    }
  })();

  (function toggleOpenDropdownTablet() {
    const container = $('.filterC.primary');
    if (container) {
      const button = container.find('.filterC__button');
      const block = container.find('.filterC__block');

      button.on('click', function () {
        $(this).toggleClass('open');
        block.toggleClass('open');

      })
    }
  })();
}
