//Crear una función que reciba un array de palabras y una cadena e indique cuantas veces se encuentra la palabra en el array.

const array = ['perro', 'palo', 'piedra', 'polvo', 'perro', 'pata'];

console.log(contarString(array, 'perro'));

function contarString(ar, str) {
  let a = 0;
  for (let i = 0; i < ar.length; i++) {
    if (ar.at(i) === str) {
      a++;
    }
  }
  return a;
}
