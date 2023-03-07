const closeModalBtn = document.querySelector('[data-modal-close]');
const modalCocktails = document.querySelector('[data-modal-cocktails]');


closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
    modalCocktails.classList.toggle('is-hidden')
}