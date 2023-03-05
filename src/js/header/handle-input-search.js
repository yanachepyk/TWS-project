import { getCocktailsByName } from "../shared/api-service";
import { createCocktailsMarkup } from "../catalog/create-cocktails-markup";
import { createButtonsMarkup } from "../catalog/pagination/creat-buttons-markup";

const refs = {
    list: document.querySelector('.catalog__list'),
    paginator: document.querySelector('.paginator')
    // "Not Found" el
};

export async function handleInputSearch(event) {
    const searchQuery = event.target.value.trim();
    const {drinks} = await getCocktailsByName(searchQuery);
 
    if (!drinks.length) {
        refs.list.innerHTML = '';
        refs.paginator.innerHTML = '';
        // показувати секцію "Not Found"
        console.log('not Found');
        return
    }

    // ховати секцію "Not Found"
    refs.list.innerHTML = createCocktailsMarkup(drinks);
    refs.paginator.innerHTML = createButtonsMarkup(drinks.length);
}