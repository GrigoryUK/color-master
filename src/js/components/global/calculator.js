import $ from 'jquery';
import Inputmask from "inputmask";

export default function calculatorJs() {

  (function maskNumber() {
    let code = document.querySelectorAll('input[type="num"]');
    let codeMask = new Inputmask("9{*}");
    codeMask.mask(code);
  })();

  (function toggleDropdown() {
    const container = $('.blockCalc');

    if (container) {

      const dropdown = container.find('.blockCalc__dropdown--input');
      const button = container.find('.buttonC--calc--main');
      const dropdownInput = dropdown.find('input');
      const menu = container.find('.blockCalc__dropdown--menu');
      const options = container.find('.option');
      const link = container.find('.link-main');
      const warning = container.find('.blockCalc__container--buttons--warning');
      const result = container.find('.blockCalc__result');

      dropdownInput.on('click', function () {
        dropdown.toggleClass('open');

        if (dropdown.hasClass('open')) {
          menu.fadeIn('fast')
        } else {
          menu.fadeOut('fast');
        }
      });

      options.on('click', function () {
        dropdown.removeClass('open');
        menu.fadeOut('fast');
        options.removeClass('active');
        $(this).addClass('active');

        dropdownInput.val($(this).val());
        dropdownInput.text($(this).text());

      });

      button.on('click', function () {

        if (dropdownInput.val() === "") {
          warning.fadeIn('fast');

        } else {
          warning.fadeOut('fast');
          link.text(dropdownInput.text());
          result.fadeIn('fast');
        }
      })


    }
  })()


}
