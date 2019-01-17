const title = document.querySelector('h1');
const content = document.querySelector('#content');
const lesson = 'Reduce';
title.innerHTML = `Hi, ${ lesson }`;

const arrayCamisa = ['Escola de Pilotagem', 'Track Day', 'Shad Cup', 'Acelera'];

const eventos = [
  { circuito:'Mega Space', realizados: 12 },
  { circuito:'Guaratinguetá', realizados: 6 }
];

let soma = eventos.reduce(( prevVal, elem ) =>  prevVal + elem.realizados, 0 );

let todosCircuitos = eventos.reduce(( prevVal, elem ) =>  [ ...prevVal, elem.circuito ], ['Interlagos'] ).sort().join(', ');

content.innerHTML = `Eventos em ${ todosCircuitos } e o número de eventos realizados em 2018: ${ soma }`;
