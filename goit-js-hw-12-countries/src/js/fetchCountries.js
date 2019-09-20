import { alert, defaultModules } from '@pnotify/core';
import countrieMarkup from '../templates/countrie.hbs';
import countriesMarkup from '../templates/countries.hbs';
const debounce = require('lodash.debounce');

const refs = {
  input: document.querySelector('.input'),
  list: document.querySelector('.countrie'),
};

function fetchCountries(event) {
  if (event.target.value === '') {
    refs.list.innerHTML = '';
    return;
  }

  fetch(`https://restcountries.eu/rest/v2/name/${event.target.value}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      if (data.status === 404) return;

      if (data.length === 1) {
        refs.list.innerHTML = countrieMarkup(data);
        return;
      } else if (data.length >= 2 && data.length <= 10) {
        refs.list.innerHTML = countriesMarkup(data);
        return;
      }
      alert({
        text: 'Too many matches found!',
        type: 'info',
        delay: 800,
      });
      refs.list.innerHTML = '';
    });
}

refs.input.addEventListener('input', debounce(fetchCountries, 500));
