import { getCocktailsByName } from './api-service';
import { createCocktailsMarkup } from '../catalog/create-cocktails-markup';
import { createButtonsMarkup } from '../catalog/pagination/creat-buttons-markup';

const refs = {
  title: document.querySelector('.catalog__title'),
  list: document.querySelector('.catalog__list'),
  paginator: document.querySelector('.paginator'),
  // "Not Found" el
};

export async function handleCocktailsSearch(event) {
  const searchQuery = event.target.value.trim();
  let cocktails;

  if (event.target.nodeName === 'BUTTON') {
    cocktails = await getCocktailsByFirstLetter(searchQuery);
  } else if (event.target.nodeName === 'INPUT') {
    cocktails = await getCocktailsByName(searchQuery);
  }

  if (!cocktails.drinks.length) {
    refs.title.textContent = '';
    refs.list.innerHTML = '';
    refs.paginator.innerHTML = '';
    // показувати секцію "Not Found"
    return;
  }

  // ховати секцію "Not Found"
  refs.title.textContent = 'Searching results';
  refs.list.innerHTML = createCocktailsMarkup(cocktails.drinks);
  refs.paginator.innerHTML = createButtonsMarkup(cocktails.drinks.length);
}
