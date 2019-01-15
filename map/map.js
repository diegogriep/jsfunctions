let lesson = 'map';
let title = document.querySelector('h1');
let content = document.querySelector('#content');

title.innerHTML = lesson;

const arrayCamisa = ['Escola de Pilotagem', 'Track Day', 'Shad Cup', 'Acelera'];

let thisArg = {
  'circuito': 'Mega Space'
}

//The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. 

const novoArrayCamisa = arrayCamisa.map((elem) => {
  return `<p>${ elem } no ${ thisArg.circuito }</p>`
}, thisArg).join('');

content.innerHTML = `
  <p>What learn with ${lesson}</p>
  ${novoArrayCamisa}
`;
