'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">COUNTRY</h3>
            <h4 class="country__region">REGION</h4>
            <p class="country__row"><span>👫</span>POP people</p>
            <p class="country__row"><span>🗣️</span>LANG</p>
            <p class="country__row"><span>💰</span>CUR</p>
          </div>
        </article>
  `;
countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) throw new Error('No neighbour found!');
//       console.log('Neighbour:', neighbour);
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         'Neighbour not found'
//       );
//     })
//     .then(neighbourData => {
//       console.log('Neighbour Data:', neighbourData);
//       if (!neighbourData || neighbourData.length === 0 || !neighbourData[0] || neighbourData[0].status === 404) {
//         console.error('Neighbour data not found');
//         throw new Error('Neighbour data not found');
//       }
//       renderCountry(neighbourData[0], 'neighbour');
//     })
//     .catch(err => {
//       console.error(`${err.message}`);
//       renderError(`Error: ${err.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('pakistan');
// });

// wait(2).then(() =>{
//   console.log('I waited for 2 seconds')
//   return wait(1)
// }).then(() => console.log('I waited for 1 seconds'))

// Promise.resolve('abc').then(x => console.log(x))
// Promise.reject('abc').then(x => console.log(x))

// const wait = function(seconds) {
//   return new Promise(function(resolve){
//     setTimeout((resolve, seconds * 1000));
//   })
// }

// const imgContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
// .catch(err => console.error(err));

// const whereAmI = async function (country) {
//   await fetch(`https://restcountries.com/v3.1/name/${country}`);
//   console.log(res);
// };

// whereAmI('portugal');
// console.log('FIRST');

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// // fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(res => console.log(res))

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };


// const whereAmI = async function () {





//     // Reverse geocoding
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!resGeo.ok) throw new Error('Problem getting location data');

//     const dataGeo = await resGeo.json();
//     console.log(dataGeo);

//     // Country data
//     const res = await fetch(
//       `https://restcountries.com/v3.1/name/${dataGeo.country}`
//     );
//     if (!res.ok) throw new Error('Problem getting country');

//     const data = await res.json();
//     console.log(data);
//     // renderCountry(data[0]); // render country data, this function needs to be defined

//   }
//   .catch (err) {
//     console.error(`${err} 💥`);
//     // renderError(`💥 ${err.message}`); // render error, this function needs to be defined
//   }

// console.log('FIRST');
// whereAmI();

// btn.addEventListener('click')

// wait(2).then(() =>{
//   console.log('I waited for 2 seconds')
//   .then(wait(2).catch(() => console.log('I waited for 1 seconds')))

// const wait = function(seconds) {
//   return new Promise(function(resolve){
//     setTimeout((resolve, seconds * 1000));
//   })
// }

// const imgContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
// .catch(err => console.error(err));


const whereAmI = async function(country) {
  // fetch(`https://restcountries.com/v3.1/name/${country}`).then(res => console.log(res))

 const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  console.log(res)

  const data = await res.json()
  console.log(data)
  renderCountry(data[0])
}

whereAmI('portugal')
console.log('FIRST')