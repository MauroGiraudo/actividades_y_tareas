'use strict';

let x = 1;
let y = 'test';
withVars();

function withVars() {
  let x = 'a';
  console.log(x, y);
}

console.log(x, y);

//El Hoisting permite que, aunque la función sea declarada luego de ser utilizada, esta situación no de error. Es decir, podríamos
//ubicar la declaración de funciones al final del programa mientras dejamos las líneas de código más relevantes al comienzo del archivo
