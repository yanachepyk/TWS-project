function fetchCocktails() {
  return fetch('www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka').then(
    res => res.json()
  );
}
fetchCocktails().then(console.log);
