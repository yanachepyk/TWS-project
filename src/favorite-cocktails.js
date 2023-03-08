import './js/header/header-form';
import './js/header/header-modal';
import './js/header/theme-switch';

import { getCocktailsByName } from './js/shared/api-service';
import { createCocktailsMarkup } from './js/catalog/create-cocktails-markup';
import { handleCocktailsSearch } from './js/shared/handle-cocktails-search';
const searchForm = document.querySelector('.header__search-form');
const catalog = document.querySelector('.catalog__list');

searchForm.addEventListener('submit', handleFavoritePageSearch);

async function handleFavoritePageSearch(e) {
  //   e.preventDefault();
  const query = e.target?.elements?.search?.value?.trim() || '';
  const data = await getCocktailsByName(query);
  const datacock = data.drinks[0];
  const markup = `<li class="catalog__item">
    <div class="catalog__wrapper-img">
        <img class="catalog__img" src="${datacock.strDrinkThumb}" alt="${datacock.strDrink} image" />
    </div>
    <h3 class="catalog__item-name">${datacock.strDrink}</h3>
    <div class="catalog__item-actions">
        <button class="button-primary" type="button" data-action="learn_more" data-id="${datacock.idDrink}">
            Learn more
        </button>
        <button class="button-secondary" type="button" data-action="favorite" data-id="${datacock.idDrink}">
            Add to
        </button>
    </div>
</li>`;
  localStorage.setItem('query', markup);
  window.location.href = 'index.html';
}
