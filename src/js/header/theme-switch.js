const refs = {
  input: document.querySelector('.checkbox'),
  checkbox: document.querySelector('.header__switcher'),
};

const THEME_KEY = 'theme';
const savedTheme = localStorage.getItem(THEME_KEY);

if (savedTheme === 'dark') {
    refs.checkbox.classList.add('checked');
    document.documentElement.dataset.theme = savedTheme;
  }

refs.input.addEventListener('change', event => {
  let activeTheme = null;

  if (event.target.checked) {
    refs.checkbox.classList.add('checked');
    activeTheme = 'dark';
  } else {
    refs.checkbox.classList.remove('checked');
    activeTheme = 'light';
  }

  document.documentElement.dataset.theme = activeTheme;
  localStorage.setItem(THEME_KEY, activeTheme);
});
