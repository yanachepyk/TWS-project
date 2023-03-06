export function handleCocktailClickAction(event) {
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