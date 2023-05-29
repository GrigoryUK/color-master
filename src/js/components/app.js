import {headerJs} from "./header/header";
import {feedbackForm} from "./header/feedbackForm";
import smoothScroll from "./footer/smoothScroll";

document.addEventListener('DOMContentLoaded', (event) => {
  headerJs()
  feedbackForm()
  smoothScroll()
});
