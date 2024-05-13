import axios from 'axios';
axios.defaults.headers.common[
  'live_SHQEExY89Jej7MJEUsYBxp09955uhKmpihGa8Zucaa4Essbsf6NGfgfdTnSyjGtz'
] = 'cheia ta';

const breedSelect = document.querySelector('.breed-select');
const Cat_Api_URL = 'https://api.thecatapi.com/v1';

export const catBreeds = fetchBreeds();

// function fetchBreeds() {
//   axios
//     .get(`${Cat_Api_URL}/breeds`)
//     .then(response => {
//       const catBreeds = [];
//       const cats = response.data.map(cat => {
//         const options = document.createElement('option');
//         options.setAttribute('value', cat.id);
//         options.textContent = cat.name;
//       });
//       catBreeds.push(cats);
//       return catBreeds;
//     })
//     .catch(er => {
//       console.log(er);
//     });
// }
