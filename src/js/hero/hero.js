const checkbox = document.querySelector('.check-box');
const toChoose = document.querySelector('.to-choose');
const letters = document.querySelectorAll('.js-letter');

checkbox.addEventListener('click', () => {
  toChoose.classList.toggle('to-choose--visible');
});

letters.forEach(letter => {
  letter.addEventListener('click', function (event) {
    event.preventDefault();
    checkbox.childNodes[0].nodeValue = event.target.value;
    toChoose.classList.remove('to-choose--visible');
  });
});
