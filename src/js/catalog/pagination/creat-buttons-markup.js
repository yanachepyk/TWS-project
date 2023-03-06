// import { getCocktailsAmountPerPage } from '../../shared/get-cocktails-amount-per-page';
// const paginator = document.querySelector('.paginator');
// const middleBtn = document.querySelector('[data-span]');
// export function createButtonsMarkup(cocktailsAmount) {
//   let step = getCocktailsAmountPerPage();
//   const pages = Math.ceil(cocktailsAmount / step);
//   const firstPages = [];
//   const lastPages = [];
//   if (cocktailsAmount <= step) {
//     return '';
//   } else if (pages <= 6) {
//     for (let i = 1; i <= pages; i += 1) {
//       const markup = `<button class="page-btn" value="${i}">${i}</button>`;
//       firstpages.push(markup);
//       paginator.insertAdjacentElement('afterbegin', firstPagesMarkup);
//     }
//   } else {
//     for (let i = 1; i <= 3; i += 1) {
//       const markup = `<button class="page-btn" value="${i}">${i}</button>`;
//       firstpages.push(markup);
//     }
//     for (let k = pages; k >= pages - 3; k -= 1) {
//       const markup = `<button class="page-btn" value="${k}">${k}</button>`;
//       lastPages.push(markup);
//     }
//     const firstPagesMarkup = firstPages.join('');
//     const lastPagesMarkup = lastPages.join('');
//     middleBtn.style.display = 'inline-block';
//     paginator.insertAdjacentHTML('afterbegin', firstPagesMarkup);
//     paginator.insertAdjacentHTML('beforeend', lastPagesMarkup);
//   }
// }

// function handlePageBtnsClick(e) {
//   const selectedPage = e.target.value;
//   const selectedcocktails =
// }

let a = [1, 3, 5, 7, 9, 11];
let b = a.splice(0, 2);
console.log(b);
