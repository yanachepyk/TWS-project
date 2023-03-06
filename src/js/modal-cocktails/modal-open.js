const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal-ingredient');
const closeButton = document.querySelector('.close');
const addButton = document.querySelector('.modal-ingredient__btn');

function openModal() {
  backdrop.classList.remove('hidden');
  modal.classList.remove('hidden');
}

function closeModal() {
  backdrop.classList.add('hidden');
  modal.classList.add('hidden');
}

addButton.addEventListener('click', openModal);

closeButton.addEventListener('click', closeModal);

backdrop.addEventListener('click', closeModal);

