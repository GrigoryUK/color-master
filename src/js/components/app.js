import {headerJs} from "./header/header";
import {feedbackForm} from "./header/feedbackForm";
import smoothScroll from "./footer/smoothScroll";
import tabsJs from "./global/tabs";
import slidersJs from "./global/sliders";
import filtersJs from "./global/filters";
import collapseJs from "./global/collapse";
import calculatorJs from "./global/calculator";
import cardJs from "./global/card";
import sliderCardJs from "./global/sliderCard";
import youtubeJS from "./global/youtube";
import colorPickerJS from "./global/colorPicker";

document.addEventListener('DOMContentLoaded', (event) => {
  headerJs()
  youtubeJS()
  feedbackForm()
  smoothScroll()
  tabsJs()
  slidersJs()
  filtersJs()
  collapseJs()
  calculatorJs()
  cardJs()
  sliderCardJs()
  colorPickerJS()
});
