import './js/header/header-form';
import './js/header/header-modal';
import './js/header/theme-switch';
import './js/favorite_page/favorite_page';
import { handleFavoritePageSearch } from './js/shared/handle-favorite-page-search';
import { hideMobileMenu } from './js/header/header-modal';

const searchForm = document.querySelector('.header__search-form');
const searchFormMobile = document.querySelector('.header__search-form-modal');

searchForm.addEventListener('submit', handleFavoritePageSearch);

searchFormMobile.addEventListener('submit', (e) => {
    e.preventDefault();
    hideMobileMenu();
    handleFavoritePageSearch(e);
});
