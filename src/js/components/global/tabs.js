import GraphTabs from 'graph-tabs'
import { default as $, default as jQuery } from 'jquery'
import {isDesktop} from "../../functions/check-viewport";
import GraphTabsCustom from "../helpers/tabsCastom";
export default function tabsJs() {

  (function GraphTab() {
    const tabsPrimary = document.querySelector('div[data-tabs="tabs-primary"]');
    const tabsSecondary = document.querySelector('div[data-tabs="tabs-mini-buttons"]');
    const tabsCalc = document.querySelector('div[data-tabs="tabs-calc"]');
    const tabsCalcCard = document.querySelector('div[data-tabs="tabs-calc-card"]');
    const tabsCard = document.querySelector('div[data-tabs="tabs-card"]');
    const tabsCardChoice = document.querySelector('div[data-tabs="tabs-choice"]');
    if (tabsPrimary) {
      const tabsProfile = new GraphTabs('tabs-primary');

    }
    if (tabsSecondary) {
      const tabsLogoAndPhoto = new GraphTabs('tabs-mini-buttons');
    }
    if (tabsCalc) {
      const tabsCalc = new GraphTabs('tabs-calc');
    }
    if (tabsCalcCard) {
      const tabsCalcCard = new GraphTabsCustom('tabs-calc-card', '.tabs__nav--calc', '.tabs__nav-btn--calc', '.tabs__panel--calc');
    }
    if (tabsCard) {
      if (isDesktop()) {
        const tabsCard = new GraphTabsCustom('tabs-card', '.tabs__nav--card', '.tabs__nav-btn--card', '.tabs__panel--card');
      }
    }
    if (tabsCardChoice) {
      const tabsCardChoice = new GraphTabsCustom('tabs-choice', '.tabs__nav--choice', '.tabs__nav-btn--choice', '.tabs__panel--choice');
    }
  })();


  (function toggleTabsContact(){
    const container = $('.pageContact__panel--container--one');
    if (container) {
      const buttons = container.find('.pageContact__button');
      const buttonOne = container.find('.pageContact__button--1');
      const buttonTwo = container.find('.pageContact__button--2');
      const blocksInfoOne = container.find('.pageContact__info--1');
      const blocksInfoTwo = container.find('.pageContact__info--2');
      const blocksMapOne = container.find('.pageContact__map--1');
      const blocksMapTwo = container.find('.pageContact__map--2');

      buttonOne.on('click', function () {
        buttons.removeClass('pageContact__button--active');
        $(this).addClass('pageContact__button--active');
        blocksInfoTwo.removeClass('pageContact__info--active')
        blocksMapTwo.removeClass('pageContact__map--active')
        blocksInfoOne.addClass('pageContact__info--active')
        blocksMapOne.addClass('pageContact__map--active')


      })

      buttonTwo.on('click', function () {
        buttons.removeClass('pageContact__button--active');
        $(this).addClass('pageContact__button--active');
        blocksInfoOne.removeClass('pageContact__info--active')
        blocksMapOne.removeClass('pageContact__map--active')
        blocksInfoTwo.addClass('pageContact__info--active')
        blocksMapTwo.addClass('pageContact__map--active')

      })
    }
  })();


  (function( $ ) {
    $.fn.tabConvert = function(options) {

      const settings = $.extend({
        activeClass: "active",
        screenSize: 1024,
      }, options );

      return this.each(function(i) {
        const wrap = $(this).wrap('<div class="tab-to-dropdown"></div>'),
          currentItem = $(this),
          container = $(this).closest('.tab-to-dropdown'),
          value = $(this).find('.'+settings.activeClass).text(),
          toggler = '<div class="selected-tab">'+ value +'</div>';
        currentItem.addClass('converted-tab');
        container.prepend(toggler);

        // function to slide dropdown
        function tabConvert_toggle(){
          currentItem.parent().find('.converted-tab').slideToggle();
        }

        container.find('.selected-tab').click(function(){
          tabConvert_toggle();
          container.toggleClass('active');
        });

        container.find('.converted-tab').click(function () {
          container.toggleClass('active');
        })



        currentItem.find('button').click(function(e){
          const windowWidth = window.innerWidth;

          if( settings.screenSize >= windowWidth){
            tabConvert_toggle();
            const selected_text = $(this).text();
            $(this).closest('.tab-to-dropdown').find('.selected-tab').text(selected_text);
          }
        });

        //Remove toggle if screen size is bigger than defined screen size
        function resize_function(){
          const windowWidth = window.innerWidth;
          if( settings.screenSize >= windowWidth){
            currentItem.css('display','none');
            currentItem.parent().find('.selected-tab').css('display','');
          }else{
            currentItem.css('display','');
            currentItem.parent().find('.selected-tab').css('display','none');
          }
        }
        resize_function();

        // $(window).resize(function(){
        //   resize_function();
        // });

      });
    };



  }( jQuery ));


  $('.tabs__nav-to-dropdown').tabConvert({
    activeClass: "tabs__nav-btn--active",
    screenSize: 1024,
  });
}


