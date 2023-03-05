import { createCocktailsMarkup } from "../catalog/create-cocktails-markup";
import { getCocktailsByFirstLetter } from "../shared/api-service";
import { createButtonsMarkup } from "../catalog/pagination/creat-buttons-markup";

const refs = {
    list: document.querySelector('.catalog__list'),
    paginator: document.querySelector('.paginator')
    // треба витягнути елемент not found
};

export async function handleLetterClick(event) {
    const letter = event.target.value;
    const {drinks} = await getCocktailsByFirstLetter(letter);

    if (!drinks.length) {
        refs.list.innerHTML = '';
        refs.paginator.innerHTML = '';
        // показувати елемент секції "Not Found" 
        return;
    }

    // ховати елемент секції "Not Found" 
    refs.list.innerHTML = createCocktailsMarkup(drinks);
    refs.paginator.innerHTML = createButtonsMarkup(drinks.length);
}

