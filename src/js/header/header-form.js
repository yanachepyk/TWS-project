import { handleCocktailsSearch } from '../shared/handle-cocktails-search';

const searchForm = document.querySelector('.header__search-form');
const searchFormModal = document.querySelector('.header__search-form-modal');

searchForm.addEventListener('submit', handleCocktailsSearch);
searchFormModal.addEventListener('submit', handleCocktailsSearch);
