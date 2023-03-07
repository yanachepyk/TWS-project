function handleLearnMoreBtnClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'BUTTON') return;
  else {
    const modalWindow = document.querySelector('[data-modal-cocktails]');
    const selectedCocktail = e.target.dataset.id;
    getCocktailsDetailsById(selectedCocktail).then(({ drinks }) => {
      const ingredients = [];
      for (let ingr in drinks[0]) {
        if (ingr.includes('strIngredient') && ingr !== null)
          ingredients.push(ingr);
      }
      const listOfIngredients = ingredients.map(
        item => ` <li class="modal-cocktails__item">
      ✶ ${item}
      <a class="modal-cocktails__link" href="#">Ingridient</a>
    </li>`
      );
      const markup = `<h1 class="modal-cocktails__title">${drinks[0].strDrink}</h1>
      <h2 class="modal-cocktails__subtitle">INSTRACTION:</h2>
      <p class="modal-cocktails__descrip">
       ${drinks[0].strInstructions}
      </p>
      <img
        class="modal-cocktails__img"
        src="${strDrinkThumb}"
        alt="modal-cocktails"
        width="280px"
        height="280px"
      />
      <h2 class="modal-cocktails__conteine">INGREDIENTS</h2>
      <p class="modal-cocktails__per">Per cocktail</p>
      <ul class="modal-cocktails__list">
      ${listOfIngredients}
      </ul>`;
    });
  }
  modalWindow.insertAdjacentHTML('afterbegin', markup);
}
