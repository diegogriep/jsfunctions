let lesson = 'Arrow function';
let title = document.querySelector('h1');
let content = document.querySelector('#content')
title.innerHTML = lesson;

//normal function
function normalFunction() {
  return `I'm different of ${lesson}`;
}

let simpleArrowFunction = () => { return `I'm a simple ${lesson}` };
let oneArgumentsimpleArrowFunction = () => `I'm a simple ${lesson} with just one argument`;
let oneParamArrowFunction = word => `I'm a simple ${lesson} with just one param: ${ word }`;
let objectFunction = {
  number1: 10,
  number2: 20,

  multiply() {
    return  `The result is ${this.number1 * this.number2}`;
  }
};

content.innerHTML = objectFunction.multiply();
