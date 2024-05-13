import axios from 'axios';
axios.defaults.headers.common[
  'live_SHQEExY89Jej7MJEUsYBxp09955uhKmpihGa8Zucaa4Essbsf6NGfgfdTnSyjGtz'
] = 'cheia ta';

const breedSelect = document.querySelector('.breed-select');

const Cat_Api_URL = 'https://api.thecatapi.com/v1';

function fetchBreeds() {
  axios
    .get(`${Cat_Api_URL}/breeds`)
    .then(res => {
      //   console.log(res);
      //   console.log(res.data);
      res.data.map(cat => {
        // console.log(cat);
        renderCatNames(cat);
      });
    })
    .catch(er => {
      errorParagraph.style.visibility = 'visible';
    });
}

function renderCatNames(cat) {
  const options = document.createElement('option');
  options.setAttribute('value', cat.id);
  options.textContent = cat.name;

  breedSelect.append(options);
}

export const fetch = fetchBreeds();
