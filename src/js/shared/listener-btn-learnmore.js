import '../modal-ingredients/modal-ingredients';
import { handleCocktailClickAction } from "../catalog/handle-cocktails-click-action";

const catalogList = document.querySelector('.catalog__list');

catalogList.addEventListener('click', handleCocktailClickAction);

