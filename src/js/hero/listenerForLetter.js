import { handleCocktailsSearch } from '../shared/handle-cocktails-search';

const heroBox = document.querySelector('.hero__box');

heroBox.addEventListener('click', event => {
  if (event.target.classList.contains('js-letter')) {
    const searchQuery = event.target.value.trim();
    handleCocktailsSearch({
      target: { nodeName: 'BUTTON', value: searchQuery },
    });
  }
});

const toChoose = document.querySelector('.to-choose');

toChoose.addEventListener('click', event => {
  if (event.target.classList.contains('js-letter')) {
    const searchQuery = event.target.value.trim();
    handleCocktailsSearch({
      target: { nodeName: 'BUTTON', value: searchQuery },
    });
  }
});
