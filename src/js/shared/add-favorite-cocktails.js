import { getCocktailsDetailsById } from "./api-service";
import { createCocktailsMarkup } from "../catalog/create-cocktails-markup";
import { handleCocktailClickAction } from "../catalog/handle-cocktails-click-action";

const noFavoriteCocktails = document.querySelector('.favorite__text');
const favoriteCocktailsContainer = document.querySelector('.js-favorite__cocktails');
const favoriteCocktails = JSON.parse(localStorage.getItem('favoriteCocktails') || '[]');
const promises = favoriteCocktails.map(id => {
    return getCocktailsDetailsById(id).then(res => res.drinks[0]);
});

Promise.all(promises).then(cocktails => {
    if(cocktails?.length) {
        noFavoriteCocktails.classList.add('hidden');
        favoriteCocktailsContainer.innerHTML = createCocktailsMarkup(cocktails);
    } else {
        noFavoriteCocktails.classList.remove('hidden');
        favoriteCocktailsContainer.innerHTML = '';
    }
});


favoriteCocktailsContainer.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.nodeName !== 'BUTTON') {
        return;
    }

    if (e.target.dataset.action === 'remove_favorite') {
        e.target.closest('.catalog__item').remove();
    }

    handleCocktailClickAction(e);

    if (!favoriteCocktailsContainer.children.length) {
        noFavoriteCocktails.classList.remove('hidden');
    }
});

