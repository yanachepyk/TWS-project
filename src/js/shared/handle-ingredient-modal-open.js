export function handleIngredientModalOpen(e) {
  const selectedIngredient = e.target.name;
  const ingredientWindow = document.querySelector('[data-ingredient-window]');
  const markupContainer = document.querySelector('.modal-ingredient__wrapper');
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
      ingredient.strIngredient || 'not found'
    }</li>
    <li class="modal-ingredient__item">Country of origin:</li>
    <li class="modal-ingredient__item">Alcohol by volume: ${
      ingredient.strABV || 'not found'
    }%</li>
    <li class="modal-ingredient__item">Flavour:</li>
  </ul>`;
    markupContainer.insertAdjacentHTML('afterbegin', markup);
    ingredientWindow.classList.remove('hidden');
  });
}
