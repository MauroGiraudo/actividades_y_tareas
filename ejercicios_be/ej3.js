//Crear una función que reciba 2 parámetros: un array con valores de múltiples tipos y una cadena indicando el tipo (boolean, number, string,
//object, function, etc) y devuelva un nuevo array sólo con los elementos de ese tipo
let type = 'string';

const array = [
  false,
  'Lol',
  132,
  true,
  undefined,
  'DSW',
  null,
  { value: 30 },
  10,
];

const newArray = array.filter((element) => typeof element === type);

console.log(newArray);

console.log(
  `My array has [${array}], but since I just want ${type} only [${newArray}] remains...`
);
