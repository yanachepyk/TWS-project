function getRandomCocktail() {
  return fetch(`${API_URL}/random.php`).then(response => response.json());
}

function getCocktailsByName(name) {
    return fetch(`${API_URL}/search.php?s=${name}`).then(response => response.json());
}

function getCocktailsByFirstLetter(letter) {
    return fetch(`${API_URL}/search.php?f=${letter}`).then(response => response.json());
}

function getDeviceType() {
  const userAgent = navigator.userAgent;

  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
    return 'tablet';
  } else if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      userAgent
    )
  ) {
    return 'mobile';
  }

  return 'desktop';
}

function getCocktailsAmount() {
  const userDevice = getDeviceType();

  switch (userDevice) {
    case 'mobile':
      return 3;
    case 'tablet':
      return 6;
    case 'desktop':
      return 9;
  }
}

function creatMarkup(cocktails) {
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
                Add to
                <svg class="favorite-icon" width="21" height="19">
                    <use href="./images/icons.svg#icon-like"></use>
                </svg>
            </button>
        </div>
    </li>`
    )
    .join('');
}

function getRandomCoctails(amount) {
  return Array(amount)
    .fill(null)
    .map(() => getRandomCocktail().then(res => res.drinks[0]));
}

const refs = {
  title: document.querySelector('.catalog__title'),
  list: document.querySelector('.catalog__list'),
};

const API_URL = 'http://www.thecocktaildb.com/api/json/v1/1';
const coctailsAmount = getCocktailsAmount();

Promise.all(getRandomCoctails(coctailsAmount)).then(cocktails => {
    refs.list.innerHTML = creatMarkup(cocktails)
});


async function handleInputSearch(event) {
    const searchQuery = event.target.value.trim();
    const {drinks} = await getCocktailsByName(searchQuery);
 
    if (!drinks.length) {
        refs.list.innerHTML = '';
        console.log('not Found');
        return
    }

    refs.list.innerHTML = creatMarkup(drinks);
}

async function handleLetterClick(event) {
    const letter = event.target.value;
    const {drinks} = await getCocktailsByFirstLetter(letter);
    
    if (!drinks.length) {
        refs.list.innerHTML = '';
        console.log('not Found');
        return
    }

    refs.list.innerHTML = creatMarkup(drinks);
}

const select = document.querySelector('#select');
select.addEventListener('change', handleLetterClick)
const btn = document.querySelector('.btn');
btn.addEventListener('click', handleLetterClick)

function handleCocktailClickAction(event) {
    if (event.target.nodeName !== 'BUTTON') {
        return;
    }

    const action = event.target.dataset.action;
    const cocktailId = event.target.dataset.id;

    if (action === 'learn_more') {
        // визиваємо функцію відкриття модалки
    } else if (action === 'favorite') {
        // провіряємо чи є у LocalStorage ("улюблених") айді цього коктейлю, та якщо ні - добавляємо
    }
    
}