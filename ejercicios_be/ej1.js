//Crear un array con 10 valores y mostrarlo en sentido inverso sin modificar el array.

const array = [
  true,
  undefined,
  'Mauro',
  10,
  null,
  { name: 'Song of the Ancients', duration: '03:04' },
  'DSW',
  18,
  false,
  0,
];

function reverseArray(ar) {
  const revArray = [];
  for (let i = 0; i < ar.length; i++) {
    revArray.unshift(ar[i]);
  }
  return revArray;
}

const array2 = reverseArray(array);

console.log(
  `This is normal array: ${array}\nAnd this is inverted array: ${array2}`
);
//console.log(array);
