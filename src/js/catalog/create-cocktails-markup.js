export function createCocktailsMarkup(cocktails) {
    const icon = document.querySelector('.catalog__icon')
    return cocktails
      .map(
        cocktail =>
          `<li class="catalog__item">
          <div class="catalog__wrapper-img">
              <img class="catalog__img" src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink} image" />
          </div>
          <h3 class="catalog__item-name">${cocktail.strDrink}</h3>
          <div class="catalog__item-actions">
              <button class="button-primary" type="button" data-action="learn_more" data-id="${cocktail.idDrink}">
                  Learn more
              </button>
              <button class="button-secondary" type="button" data-action="favorite" data-id="${cocktail.idDrink}">
                  Add to ${icon.outerHTML}
              </button>
          </div>
      </li>`
      )
      .join('');
  }