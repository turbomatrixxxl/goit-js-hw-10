import axios from 'axios';
axios.defaults.headers.common[
  'live_SHQEExY89Jej7MJEUsYBxp09955uhKmpihGa8Zucaa4Essbsf6NGfgfdTnSyjGtz'
] = 'cheia ta';
// import { catBreeds } from './cat-api';

const breedSelect = document.querySelector('.breed-select');
const loaderParagraph = document.querySelector('.loader');
const errorParagraph = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');
catInfo.style.display = 'flex';
catInfo.style.gap = '20px';

const Cat_Api_URL = 'https://api.thecatapi.com/v1';

loaderParagraph.style.display = 'none';
errorParagraph.style.visibility = 'hidden';
errorParagraph.style.color = 'red';

import { fetch } from './cat-api.js';
console.log(breedSelect);

breedSelect.addEventListener('change', ev => {
  catInfo.innerHTML = null;
  //   console.log(ev.currentTarget.value);

  loaderParagraph.style.display = 'block';

  const breedId = ev.currentTarget.value;
  fetchCatByBreed(breedId);
  setTimeout(fetchDescription(breedId), 100);
});

function fetchCatByBreed(breedId) {
  axios
    .get(`${Cat_Api_URL}/images/search?breed_ids=${breedId}`)
    .then(res => {
      loaderParagraph.style.display = 'none';

      console.log(res.data);
      const cat = res.data;

      cat.map(cat => {
        renderCatByBreed(cat);
      });
    })
    .catch(er => {
      loaderParagraph.style.display = 'none';
      breedSelect.style.display = 'none';
      errorParagraph.style.visibility = 'visible';
    });
}

function renderCatByBreed(cat) {
  const catImage = document.createElement('img');
  //   catImage.setAttribute('height', cat.height);
  //   catImage.setAttribute('width', cat.width);
  catImage.style.width = 'calc(100% - 70%)';
  catImage.style.display = 'block';
  catImage.style.objectFit = 'cover';

  catImage.setAttribute('src', cat.url);
  console.log(catImage);
  catInfo.append(catImage);
  return catImage;
}

function fetchDescription(breedId) {
  axios
    .get(`${Cat_Api_URL}/breeds`)
    .then(res => {
      //   console.log(res);
      console.log(res.data);

      res.data.find(cat => {
        if (cat.id === breedId) {
          loaderParagraph.style.display = 'none';

          console.log(cat.name);
          renderDescription(cat);
        }
      });
    })
    .catch(er => {
      loaderParagraph.style.display = 'none';
      breedSelect.style.display = 'none';
      errorParagraph.style.visibility = 'visible';
    });
}

function renderDescription(cat) {
  const descriptionContainer = document.createElement('div');

  const name = document.createElement('h2');
  name.textContent = cat.name;
  name.style.margin = '0px';
  name.textContent = cat.name;

  const description = document.createElement('p');
  description.textContent = cat.description;

  const temperament = document.createElement('p');
  temperament.textContent = cat.temperament;

  const bold = document.createElement('b');
  bold.textContent = 'Temperament:';

  temperament.prepend(bold);

  descriptionContainer.append(name, description, temperament);
  catInfo.append(descriptionContainer);
}
