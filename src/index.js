import axios from 'axios';
axios.defaults.headers.common[
  'live_SHQEExY89Jej7MJEUsYBxp09955uhKmpihGa8Zucaa4Essbsf6NGfgfdTnSyjGtz'
] = 'cheia ta';
// import { catBreeds } from './cat-api';
// console.log(catBreeds);

const breedSelect = document.querySelector('.breed-select');
const loaderParagraph = document.querySelector('.loader');
const errorParagraph = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

const Cat_Api_URL = 'https://api.thecatapi.com/v1';

function fetchBreeds() {
  axios
    .get(`${Cat_Api_URL}/breeds`)
    .then(res => {
      console.log(res);
      console.log(res.data);
      //   res.data.map(cat => {
      //     renderCatNames(cat);
      //   });
    })
    .catch(er => {
      console.log(er);
    });
}

// function renderCatNames(cat) {
//   const options = document.createElement('option');
//   options.setAttribute('value', cat.id);
//   options.textContent = cat.name;

//   breedSelect.append(options);
//   //   catBreeds.push(options);
//   //   return catBreeds;
// }
