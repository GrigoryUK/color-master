import smoothScroll from "./footer/smoothScroll"
import calculatorJs from "./global/calculator"
import calculatorHoverJs from "./global/calculatorHover"
import cardJs from "./global/card"
import collapseJs from "./global/collapse"
import colorPickerJS from "./global/colorPicker"
import { cookieJS } from "./global/cookie"
import filtersJs from "./global/filters"
import { modalJs } from './global/modal'
import { mutationCatalogJS } from "./global/mutationCatalog"
import sliderCardJs from "./global/sliderCard"
import slidersJs from "./global/sliders"
import tabsJs from "./global/tabs"
import youtubeJS from "./global/youtube"
import { feedbackForm } from "./header/feedbackForm"
import { headerJs } from "./header/header"

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
  calculatorHoverJs()
  cookieJS()
  mutationCatalogJS()
  modalJs()
});
