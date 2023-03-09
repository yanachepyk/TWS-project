const footer = document.querySelector('.footer');
window.addEventListener('load', function () {
  const contentHeight = document.documentElement.scrollHeight;
  const viewportHeight = window.innerHeight;

  if (contentHeight > viewportHeight) {
    footer.style.position = 'fixed';
  }
});