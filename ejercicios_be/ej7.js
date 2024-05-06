//Hacer un método que reciba un objeto (en terminos de javascript) y me imprima por consola toda la cadena de prototipos hasta llegar a null.

const Animal = {
  movilidad: 'superior',
};

const Perro = {
  name: 'Burbuja',
  breed: 'unknown',
  legs: 4,
  favouriteFood: 'meat',
  __proto__: Animal,
};

function showObject(objeto) {
  switch (objeto) {
    case Object.prototype:
      return 'Object.prototype';
      break;
    case Perro:
      return 'Perro';
      break;
    case Animal:
      return 'Animal';
      break;
    case null:
      return 'null';
      break;
  }
}

Prototypes(Perro);

function Prototypes(object) {
  let obj = object,
    proto;
  do {
    proto = Object.getPrototypeOf(obj);
    console.log(
      `The prototype of ${JSON.stringify(obj)} is ${JSON.stringify(proto)}\n`
    );
    obj = proto;
  } while (proto !== null);
}
