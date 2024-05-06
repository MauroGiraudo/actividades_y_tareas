'use strict';

const samy = {
  firstName: 'Samy',
  lastName: 'Clemens',
  age: 25,
  greet() {
    return `Hello, I'm ${this.firstName} ${this.lastName}`;
  },
};

console.log(`${samy.firstName} says:\n${samy.greet()}`);

console.log(`samy's prototype is:${JSON.stringify(samy.__proto__)}`);

console.log(Object.prototype == samy.__proto__);

console.log(
  `the prototype of the prototype of samy is:${JSON.stringify(
    samy.__proto__.__proto__
  )}`
);

//------------------------------------------------------------------------------------------------------------

const sam = {
  firstName: 'Sam',
  lastName: 'Clemens',
  age: 25,
  greet() {
    return `Hello, I'm ${this.firstName} ${this.lastName}`;
  },
};

const mark = {
  firstName: 'Mark',
  lastName: 'Twain',
  quote:
    'Never argue with stupid people, they will drag you down to their level and then beat you with experience.',
  sayQuote() {
    return `"${this.quote}". ${this.firstName} ${this.lastName}`;
  },
  __proto__: sam,
};

console.log(`${sam.firstName} says:\n${sam.greet()}`);
console.log();

console.log(
  `${mark.firstName} greets:\n${mark.greet()}\nand says:${mark.sayQuote()}`
);
console.log();

console.log(`sam's prototype is:${JSON.stringify(sam.__proto__)}`);
console.log(`mark's prototype is:${JSON.stringify(mark.__proto__)}`);

console.log(`mark.__proto__ is sam? ${sam === mark.__proto__}`);
console.log(
  `the prototype of the prototype of mark is:${JSON.stringify(
    mark.__proto__.__proto__
  )}`
);
console.log(
  `the prototype of the prototype of the prototype of mark is:${JSON.stringify(
    mark.__proto__.__proto__.__proto__
  )}`
);

//También podríamos agregar "Object.create(objeto)" luego del igual cuando declaramos "mark" para asignar a "sam" como su prototipo.
