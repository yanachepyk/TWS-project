export function getCocktailsAmountPerPage() {
  const mobile = window.matchMedia('(max-width: 767px)');
  const tablet = window.matchMedia('(min-width: 768px), (max-width: 1280px)');
  let step = null;
  if (mobile.matches) {
    step = 3;
  } else if (tablet.matches) {
    step = 6;
  } else {
    step = 9;
  }
  return step;
}
