//Crear una función que reciba un array y una cadena. La función debe revisar si la cadena ya se encuentra en el array y si no agregarla al final
//y siempre debe devolver la posición del array donde se encuentra ya sea que existiera o si la agregó.

let cadena = 'everyone';
const array = ['Hello', 'good', 'morning', 'to'];
const strIndex = (ar, str) => {
  if (ar.indexOf(str) === -1) {
    ar.push(str);
  }
  return ar.indexOf(str);
};
console.log(
  `The index of "${cadena}" is {${strIndex(array, cadena)}} in [${array}]`
);
