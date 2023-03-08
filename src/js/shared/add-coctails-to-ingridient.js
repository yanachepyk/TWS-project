const btnIngredients = document.querySelector('.js-modal-ingredient');

btnIngredients.addEventListener('click', addIngToFavorite);

function addIngToFavorite(evt) {
  const id = evt.target.value;
  const favoriteIng = JSON.parse(localStorage.getItem('favoriteIng') || '[]');

  if (evt.target.dataset.action === 'favorite') {
    favoriteIng.push(id);
  } else if (evt.target.dataset.action === 'remove_favorite') {
    const index = favoriteIng.findIndex(_id => _id === id);

    favoriteIng.splice(index, 1);
  }

  // if (!favoriteIng.includes(id)) {
    
  //   btnIngredients.textContent = 'Remove from favorites';
  // } else {
    
  //   btnIngredients.textContent = 'Add to favorites';
  // }

  localStorage.setItem('favoriteIng', JSON.stringify(favoriteIng));
}

function findIdEl(ing) {
  let favoriteIng = JSON.parse(localStorage.getItem('favoriteIng'));
  if (!favoriteIng) {
    localStorage.setItem('favoriteIng', JSON.stringify([]));
  }
  if (ing.includes(ing.idIngredient)) {
  } else {
  }
}

export function createMarkupIng(ing) {
  return ing
    .map(e => {
      return `
  <div class="ing__cocktails">
  <div class="ing__cocktails-wrapper">
    <h3>${e.strIngredient}</h3>
    <p>${e.strType || 'No type found'}</p>
    <button class="button-primary">Learn more</button>
    <button class='button-secondary' data-id="${e.idIngredient}">Remove</button>
  </div>
  </div>`;
    })
    .join('');
}
