
import { getCocktailsDetailsById } from './api-service';


export function handleLearnMoreBtnClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'BUTTON') return;
  else {
    const modalWindow = document.querySelector('[data-modal-cocktails]');
    const selectedCocktail = e.target.dataset.id;
    getCocktailsDetailsById(selectedCocktail).then(({ drinks }) => {
      const ingredientsMeasure = [];
      const ingredients = [];
      for (let ingr in drinks[0]) {
        if (ingr.includes('strIngredient') && ingr !== null)
          ingredients.push(ingr);
      }
      for (let measure in drinks[0]) {
        if (ingr.includes('strMeasure') && ingr !== null)
          ingredientsMeasure.push(measure);
      }
      let listMarkup = '';
      for (let i = 0; i < ingredients.length; i += 1) {
        listMarkup = `<li class="modal-cocktails__item">
      ✶ ${ingredientsMeasure[i]}<span class="ingredient" name='${ingredients[i]}'>${ingredients[i]}</span>
      <a class="modal-cocktails__link" href="#">Ingridient</a>
    </li>`;
      }
      const markup = `<h1 class="modal-cocktails__title">${drinks[0].strDrink}</h1>
      <h2 class="modal-cocktails__subtitle">INSTRACTION:</h2>
      <p class="modal-cocktails__descrip">
       ${drinks[0].strInstructions}
      </p>
      <img
        class="modal-cocktails__img"
        src="${drinks[0].strDrinkThumb}"
        alt="modal-cocktails"
        width="280px"
        height="280px"
      />
      <h2 class="modal-cocktails__conteine">INGREDIENTS</h2>
      <p class="modal-cocktails__per">Per cocktail</p>
      <ul class="modal-cocktails__list">
      ${listMarkup}
      </ul>`;
      modalWindow.insertAdjacentHTML('afterbegin', markup);

      modalWindow.classList.remove('hidden');
    });
  }
}
