const title = document.querySelector('h1');
const content = document.querySelector('#content');
const lesson = 'Filter';
title.innerHTML = `A little about ${ lesson }`;

const arrayCamisa = ['Escola de Pilotagem', 'Track Day', 'Shad Cup', 'Acelera'];
//O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.

let uniqueArray = arrayCamisa.filter( ( elem, index ) => arrayCamisa.indexOf( elem ) === index );

content.innerHTML = uniqueArray;
