import { getCocktailsByName } from './api-service';
import { createCocktailsMarkup } from '../catalog/create-cocktails-markup';
import { createButtonsMarkup } from '../catalog/pagination/creat-buttons-markup';

const refs = {
  title: document.querySelector('.catalog__title'),
  list: document.querySelector('.catalog__list'),
  paginator: document.querySelector('.paginator'),
  // потрібно дістати секцію "Not Found"
};

export async function handleCocktailsSearch(event) {
  event.preventDefault();
  let cocktails;

  if (event.target.nodeName === 'BUTTON') {
    /**
     * Сюди попадаємо по кліку на букви в Hero секції
    */
    const searchQuery = event.target?.value?.trim() || '';

    cocktails = await getCocktailsByFirstLetter(searchQuery);
  } else {
    /**
     * Сюди попадаємо при сабміті форми пошуку із хедера
    */
    const searchQuery = event.target?.elements?.search?.value?.trim() || '';

    cocktails = await getCocktailsByName(searchQuery);
  }

  if (!cocktails.drinks?.length) {
    refs.title.textContent = '';
    refs.list.innerHTML = '';
    refs.paginator.innerHTML = '';
    // потрібно показувати секцію "Not Found"
    return;
  }

  // потрібно ховати секцію "Not Found"
  refs.title.textContent = 'Searching results';
  refs.list.innerHTML = createCocktailsMarkup(cocktails.drinks);
  refs.paginator.innerHTML = createButtonsMarkup(cocktails.drinks.length);
}
