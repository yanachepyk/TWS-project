import { getCocktailIngredientByName } from './api-service';
const ingredientList = document.querySelector('.modal-cocktails');
const closeBtn = document.querySelector('[data-btn-close]');
const backdrop = document.querySelector('.backdrop-cocktails');
const ingredientModalWindow = document.querySelector(
  '[data-ingredient-window]'
);
ingredientList.addEventListener('click', handleIngredientModalOpen);
closeBtn.addEventListener('click', handleIngredientModalClose);

function handleIngredientModalClose(e) {
  ingredientModalWindow.classList.add('hidden');
  backdrop.classList.remove('hidden');
}

function handleIngredientModalOpen(e) {
  console.log(e.target);
  if (e.target.nodeName !== 'SPAN') return;
  else {
    const selectedIngredient = e.target.textContent;
    const favoriteIng = JSON.parse(localStorage.getItem('favoriteIng') || '[]');
    const ingredientWindow = document.querySelector('[data-ingredient-window]');
    const markupContainer = document.querySelector(
      '.modal-ingredient__wrapper'
    );
    const addToFavoriteBtn = document.querySelector('.js-modal-ingredient');
    getCocktailIngredientByName(selectedIngredient).then(({ ingredients }) => {
      const ingredient = ingredients[0];
      const markup = `
    <h3 class="modal-ingredient__title">${
      ingredient.strIngredient || 'this ingredient is not found'
    }</h3>
    <p class="modal-ingredient__descr">${ingredient.strType || 'none'}</p>
    <p class="modal-ingredient__text">
      <span class="modal-ingredient__name">${
        ingredient.strIngredient || 'this ingredient is not found'
      }</span> ${ingredient.strDescription || 'description is not found'}
    </p>
    <ul class="modal-ingredient__list">
      <li class="modal-ingredient__item">Type: ${
        ingredient.strIngredient || ' '
      }</li>
      <li class="modal-ingredient__item">Country of origin:</li>
      <li class="modal-ingredient__item">Alcohol by volume: ${
        ingredient.strABV || ' '
      }%</li>
      <li class="modal-ingredient__item">Flavour:</li>
    </ul>`;
      markupContainer.innerHTML = markup;
      backdrop.classList.add('hidden');
      ingredientModalWindow.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      addToFavoriteBtn.value = ingredient.idIngredient;

      if (favoriteIng.includes(ingredient.idIngredient)) {
        addToFavoriteBtn.textContent = 'Remove from favorites';
        addToFavoriteBtn.dataset.action = 'remove_favorite';
      } else {
        addToFavoriteBtn.textContent = 'Add to favorites';
        addToFavoriteBtn.dataset.action = 'favorite';
      }
    });
  }
}
