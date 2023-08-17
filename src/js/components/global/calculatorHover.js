import $ from 'jquery';
import {isDesktop, isMobile, isTablet} from "../../functions/check-viewport";

export default function calculatorHoverJs() {

  if (isDesktop()) {
      const container = $('.blockServiceLink__content');

      if (container) {
        const item = container.find('.itemCom--2');
        const content = item.find('.itemCom__cont__image');

        const maxSpan = 20;

        for (let i = 0; i < maxSpan; i++) {
          let element = document.createElement('span');
          element.classList.add(`decor--${i}`)
          content.append(element);
        }
      }
  }
}
