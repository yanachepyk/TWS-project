import { getCocktailsAmountPerPage } from "../../shared/get-cocktails-amount-per-page";

export function createButtonsMarkup(cocktailsAmount) {
    let step = getCocktailsAmountPerPage();
    const btnMarkup = [];
  
    if (cocktailsAmount <= step) {
      return '';
    }
    
    const pages = Math.ceil(cocktailsAmount / step);
  
    for (let i = 1; i <= pages; i += 1) {
      const markup = `<button class="page-btn" value="${i}">${i}</button>`;
  
      btnMarkup.push(markup);
    }
  
    return btnMarkup.join('');
  }
  