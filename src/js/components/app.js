import {headerJs} from "./header/header";
import {feedbackForm} from "./header/feedbackForm";
import smoothScroll from "./footer/smoothScroll";
import tabsJs from "./global/tabs";
import slidersJs from "./global/sliders";

document.addEventListener('DOMContentLoaded', (event) => {
  headerJs()
  feedbackForm()
  smoothScroll()
  tabsJs()
  slidersJs()
});
