import { getCocktailsDetailsById } from './api-service';



export function handleLearnMoreBtnClick(selectedCocktail) {
  const modalWindow = document.querySelector('[data-modal-cocktails]');
  const backdrop = document.querySelector('.backdrop-cocktails');

  getCocktailsDetailsById(selectedCocktail).then(({ drinks }) => {
    const ingredientsMeasure = [];
    const ingredients = [];

    const listMarkup = [];

    for (let ingr in drinks[0]) {
      if (ingr.includes('strIngredient') && drinks[0][ingr] !== null) {
        ingredients.push(drinks[0][ingr]);
      }
    }


    for (let measure in drinks[0]) {
      if (measure.includes('strMeasure') && drinks[0][measure] !== null) {
        ingredientsMeasure.push(drinks[0][measure]);
      }
    
    }

    for (let i = 0; i < ingredients.length; i += 1) {
      listMarkup.push(`<li class="modal-cocktails__item"><span class="modal-cocktails__span">✶</span>
      ${ingredientsMeasure[i] || ''}<span class="ingredient" name='${ingredients[i]}'>${ingredients[i]}</span>
    </li>`);
    }
    const list = listMarkup.join(' ');
    const markup = `
      <h1 class="modal-cocktails__title">${drinks[0].strDrink}</h1>
    <div class="test">
        <div class="test2">
          <h2 class="modal-cocktails__subtitle">INSTRACTION:</h2>
           <p class="modal-cocktails__descrip">${drinks[0].strInstructions}</p>
        </div>
      
      <img
        class="modal-cocktails__img"
        src="${drinks[0].strDrinkThumb}"
        alt="modal-cocktails"
        width="280px"
        height="280px"
      />

        <div class="test3">
          <h2 class="modal-cocktails__conteine">INGREDIENTS</h2>
          <p class="modal-cocktails__per">Per cocktail</p>
          <ul class="modal-cocktails__list">${list}</ul>
        </div>   
    </div>`;

    modalWindow.innerHTML =  markup;

    backdrop.classList.remove('hidden');
  });
}

