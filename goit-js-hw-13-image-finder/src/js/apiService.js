import imagesTemplate from '../templates/images.hbs';
import axios from 'axios';
import * as basicLightbox from 'basiclightbox';
const debounce = require('lodash.debounce');

const refs = {
  input: document.querySelector('input[name="query"]'),
  list: document.querySelector('.gallery'),
  load: document.querySelector('.load-more'),
};

const getImages = async e => {
  refs.list.innerHTML = '';
  if (e.target.value === '') return;

  const apiKey = '16765616-737565fd8ffe84de2bba83620';
  const value = e.target.value;
  let page = 1;

  const result = await axios.get(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${value}&page=${page}&per_page=12&key=${apiKey}`,
  );

  let markup = imagesTemplate(result.data.hits);
  refs.list.insertAdjacentHTML('beforeend', markup);
  page += 1;

  const loadMore = async () => {
    const nextPage = await axios.get(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${value}&page=${page}&per_page=12&key=${apiKey}`,
    );

    markup = imagesTemplate(nextPage.data.hits);
    refs.list.insertAdjacentHTML('beforeend', markup);
    page += 1;

    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }, 300);
  };

  refs.load.addEventListener('click', loadMore);
};

// function modal(e) {
//   if (e.target.nodeName === 'IMG') {
//     console.dir(e.target.dataset.url);
//     const modal = basicLightbox.create(
//       `
//     	<img width="1200" height="280" src="${e.target.dataset.url}">
//     `,
//     );

//     modal.show();
//     console.log(modal);
//   }
// }

refs.input.addEventListener('input', debounce(getImages, 500));

// refs.list.addEventListener('click', modal);
