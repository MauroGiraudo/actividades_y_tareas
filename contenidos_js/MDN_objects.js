const myObject = {
  city: 'Madrid',
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

myObject.greet(); // Greetings from Madrid
//-------------------------------------------------
const yourDate = new Date();
let object = yourDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);

// Date.prototype
// Object { }
// null

//-------------------------------------------------
const myDate = new Date(2003, 9, 5);

console.log(myDate.getMonth()); // 9

myDate.getYear = function () {
  console.log('GITGUD!');
};

myDate.getYear(); // 'GITGUD!'
//-------------------------------------------------
const personPrototype = {
  greet() {
    console.log('¡Buenas noches terrícolas!');
  },
};

const carlitos = Object.create(personPrototype);
carlitos.greet(); // ¡Buenas noches terrícolas!
//-------------------------------------------------
const personaPrototype = {
  greet() {
    console.log(`hello, my name is ${this.name}!`);
  },
};

function Person(name) {
  this.name = name;
}

Object.assign(Person.prototype, personaPrototype);
// or
// Person.prototype.greet = personaPrototype.greet;

const reuben = new Person('Reuben');
reuben.greet(); // hello, my name is Reuben!
//-------------------------------------------------
