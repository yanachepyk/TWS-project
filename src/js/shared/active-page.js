document.querySelectorAll('.nav-link-active').forEach(link => {
  if (link.href === window.location.href) {
    console.log(link);
    link.setAttribute('aria-current', 'page');
  }
});
