let lesson = 'Destructuring assignment';
let title = document.querySelector('h1');
let content = document.querySelector('#content')
title.innerHTML = lesson;

class Destructuring {
  constructor() {
    this.objectFunction = {
      number1: 10,
      number2: 30,
    
      multiply: () => {
        return  `The result is ${this.number1 * this.number2}`;
      }
    }
  }

  render() {
    let { number1, ...resto } = this.objectFunction;
    content.innerHTML = resto.number2;
  }
}
