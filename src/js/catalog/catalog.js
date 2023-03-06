import { getRandomCocktail} from '../shared/api-service';
import { getCocktailsAmountPerPage } from '../shared/get-cocktails-amount-per-page';
import { createCocktailsMarkup } from './create-cocktails-markup';

function getRandomCoctails(amount) {
  return Array(amount)
    .fill(null)
    .map(() => getRandomCocktail().then(res => res.drinks[0]));
}

async function showInitialCoctails() {
  const cocktailsAmount = getCocktailsAmountPerPage();
  const cocktailsPromises = getRandomCoctails(cocktailsAmount);
  const cocktails = await Promise.all(cocktailsPromises);

  refs.list.innerHTML = createCocktailsMarkup(cocktails);
}

const refs = {
  title: document.querySelector('.catalog__title'),
  list: document.querySelector('.catalog__list'),
  paginator: document.querySelector('.paginator')
};

showInitialCoctails();
