import { getCocktailsByName, getCocktailsByFirstLetter } from './api-service';
import { catalogPaginator } from '../catalog/catalog';

const refs = {
  title: document.querySelector('.catalog__title'),
  list: document.querySelector('.catalog__list'),
  notFound: document.querySelector('.coctails__wrapper-found')
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
    refs.notFound.classList.remove("hidden");
    refs.title.classList.add("hidden");
    catalogPaginator.hidePaginator();
    return;
  }

  refs.notFound.classList.add("hidden");
  refs.title.classList.remove("hidden");
  refs.title.textContent = 'Searching results';
  catalogPaginator.update(cocktails?.drinks);
}
