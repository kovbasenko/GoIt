import menuTemplate from '../templates/menu.hbs';
import menuData from '../menu.json';

const refs = {
  menu: document.querySelector('.menu'),
};

const markup = menuTemplate(menuData);

refs.menu.innerHTML = markup;
