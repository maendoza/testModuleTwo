import '../index.css';
import JS_IMAGE from '../assets/javascript.png';

console.log('Hello world!');

const createH1 = document.createElement('h1')
createH1.textContent = 'I love JavaScript'
createH1.className = 'h1'
const jsImageHTML = document.createElement('img');
jsImageHTML.className = 'js-image';
jsImageHTML.src = JS_IMAGE;
document.body.append(createH1, jsImageHTML);