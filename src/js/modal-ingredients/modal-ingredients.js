const closeModalBtn = document.querySelector('[data-modal-close]');
const backdrop = document.querySelector('.backdrop-cocktails');
const backdropModalCocktails = document.querySelector('.backdrop-cocktails');

closeModalBtn.addEventListener('click', closeModal);
backdropModalCocktails.addEventListener('click', closeModal);

function closeModal() {
  backdrop.classList.add('hidden');
}
