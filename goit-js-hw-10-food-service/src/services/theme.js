const refs = {
  themeButton: document.querySelector('.js-switch-input'),
  body: document.querySelector('body'),
};

!localStorage.getItem('theme') && localStorage.setItem('theme', 'white-theme');

localStorage.getItem('theme') === 'dark-theme' &&
  (refs.themeButton.checked = true);

refs.body.classList.add(localStorage.getItem('theme'));

refs.themeButton.addEventListener('click', themeColor);

function themeColor() {
  if (localStorage.getItem('theme') === 'white-theme') {
    localStorage.setItem('theme', 'dark-theme');
    refs.body.classList.add('dark-theme');
    refs.body.classList.remove('white-theme');
    return;
  }
  localStorage.setItem('theme', 'white-theme');
  refs.body.classList.add('white-theme');
  refs.body.classList.remove('dark-theme');
}
