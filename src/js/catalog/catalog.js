import { getRandomCocktail } from '../shared/api-service';
import { getCocktailsAmountPerPage } from '../shared/get-cocktails-amount-per-page';
import { createCocktailsMarkup } from './create-cocktails-markup';
// import { Paginator } from './pagination/paginator';

function getRandomCoctails(amount) {
  return Array(amount)
    .fill(null)
    .map(() => getRandomCocktail().then(res => res.drinks[0]));
}

async function showInitialCoctails() {
  const refs = {
    title: document.querySelector('.catalog__title'),
    list: document.querySelector('.catalog__list'),
    paginator: document.querySelector('.paginator'),
  };
  if (localStorage.getItem('query')) {
    const markup = localStorage.getItem('query');
    refs.list.insertAdjacentHTML('afterbegin', markup);
    localStorage.removeItem('query');
  } else {
    const cocktailsAmount = getCocktailsAmountPerPage();
    const cocktailsPromises = getRandomCoctails(cocktailsAmount);
    const cocktails = await Promise.all(cocktailsPromises);

    refs.list.innerHTML = createCocktailsMarkup(cocktails);
  }
}

// export const catalogPaginator = new Paginator({
//   selector: '.paginator',
//   drawMarkup: (cocktails) => {
//     refs.list.innerHTML = createCocktailsMarkup(cocktails);
//   }
// });

showInitialCoctails();
