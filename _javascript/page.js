import { basic, initSidebar, initTopbar } from './modules/layouts';
import { galleryCarousel, imgLazy, imgPopup, initClipboard } from './modules/plugins';

basic();
initSidebar();
initTopbar();
imgLazy();
imgPopup();
galleryCarousel();
initClipboard();
