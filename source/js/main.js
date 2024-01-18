import {initAccordion} from './modules/accordion/init-accordion';
import {initCustomSelect} from './modules/custom-select/init-custom-select';
import {initHeader} from './modules/header/init-header';
import {initModals} from './modules/modal/init-modals';
import {initPhoneMask} from './modules/init-phone-mask';
import {initPhoneValidation} from './modules/init-phone-validation';
import {initIntroSlider} from './modules/sliders/init-intro-slider';
import {initCategoriesSlider} from './modules/sliders/init-categories-slider';
import {initRecommendSlider} from './modules/sliders/init-recommend-slider';
import {initWatchedSlider} from './modules/sliders/init-watched-slider';
import {initFilter} from './modules/filter/init-filter';
import { initGallerySlider } from './modules/sliders/init-gallery-slider';


window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initHeader();
    initModals();
    initCustomSelect();
    initFilter();
    initAccordion();
    initPhoneMask();
    initPhoneValidation();
    initIntroSlider();
    initCategoriesSlider();
    initRecommendSlider();
    initWatchedSlider();
    initGallerySlider();
  });
});
