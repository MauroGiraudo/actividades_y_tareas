//Arrow Functions

'use strict';

const sayHi = (name, greeting = 'Hi') => `${greeting} ${name}`;

const sayHi2 = (name, greeting = 'Hi') => {
  return `${greeting} ${name}`;
};

//Ambas declaraciones son correctas. Cuando la función consiste en una única linea de código, puedo escribirla sin llaves ni return.

const greetExpressionAnonymous = (recipient, greeting = 'Hi') => {
  if (typeof recipient === 'string') {
    return `${greeting} ${recipient}`; //No entiendo por qué tengo que declarar sí o sí la función de esta manera y no utilizando recursividad.
  } else if (typeof recipient === 'object') {
    return greetExpressionAnonymous(
      `${recipient.firstName} ${recipient.lastName}`,
      greeting
    );
  }
};

console.log(sayHi('James', 'Good Morning'));
console.log(sayHi2('Jorge Acheron', 'Welcome back'));
console.log(
  greetExpressionAnonymous(
    { firstName: 'Clara', lastName: 'Hurlingham' },
    'Hello'
  )
);
console.log(greetExpressionAnonymous('Pepe', 'Good Night'));
