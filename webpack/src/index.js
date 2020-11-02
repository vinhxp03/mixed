import imgCat from './assets/images/cat-icon.jpg'

const path = require('path');

const element = document.querySelector('#h1-hello');
element.style.color = 'green';

console.log(`Hello world ahi!`);

function createImgElement() {
  const imgElement = document.createElement('img');
  imgElement.src = imgCat;
  imgElement.alt = 'Cat';

  return imgElement;
}

document.getElementById('root').appendChild(createImgElement());

